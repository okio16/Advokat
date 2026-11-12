<?php
/**
 * Router за вградения PHP сървър – само за localhost. Заменя .htaccess, който php -S не чете:
 * /uslugi → uslugi.html, /en → en.html, непознат адрес → 404.html. Файловете и kontakt.php се обслужват както са.
 *
 * Стартиране от корена на проекта:
 *   php -S localhost:8000 -t site scripts/dev-router.php
 */

$root = rtrim($_SERVER['DOCUMENT_ROOT'], '/\\');
$path = rawurldecode((string) parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

if ($path === '' || strpos($path, '..') !== false || strpos($path, "\0") !== false) {
    http_response_code(400);
    return true;
}

// Съществуващ файл (CSS, JS, снимки, kontakt.php, *.html) или началната страница → сървърът се справя сам
if ($path === '/' || is_file($root . $path)) {
    return false;
}

// Чист адрес: /uslugi/ → /uslugi → uslugi.html
$html = $root . rtrim($path, '/') . '.html';
if (is_file($html)) {
    header('Content-Type: text/html; charset=utf-8');
    readfile($html);
    return true;
}

http_response_code(404);
header('Content-Type: text/html; charset=utf-8');
readfile($root . '/404.html');
return true;
