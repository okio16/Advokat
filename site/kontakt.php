<?php
/**
 * Контактната форма на сайта (заменя FormSubmit).
 *
 * Приема POST от <form class="contact-form" action="/kontakt.php">, праща писмо с mail()
 * и пренасочва (303) към „Благодаря“ на езика на страницата.
 * При грешка връща посетителя обратно към формата на същата страница.
 *
 * DEV: под вградения PHP сървър (php -S) на localhost / 127.0.0.1 писмото НЕ се праща,
 * а се записва във ../mail-log/ (извън site/).
 *
 * Работи на PHP 7.4 и по-нов, без допълнителни модули.
 */

const MAIL_TO      = 'adv.angeldimitrov@abv.bg';
const MAIL_FROM    = 'forma@advokat-angeldimitrov.com';
const MAIL_SUBJECT = 'Ново запитване от сайта';

const THANKS = ['BG' => '/blagodarya', 'EN' => '/en/blagodarya', 'RU' => '/ru/blagodarya'];
const HOME   = ['BG' => '/', 'EN' => '/en', 'RU' => '/ru'];

// ---------- помощни ----------

function go(string $path): void
{
    header('Location: ' . $path, true, 303);
    header('Cache-Control: no-store');
    exit;
}

/** Текстово поле от POST: само низ, валиден UTF-8, без водещи/крайни интервали. */
function field(string $name): string
{
    $v = $_POST[$name] ?? '';
    if (!is_string($v) || preg_match('//u', $v) !== 1) {
        return '';
    }
    return trim($v);
}

function len(string $s): int
{
    return function_exists('mb_strlen') ? mb_strlen($s, 'UTF-8') : preg_match_all('/./su', $s);
}

/** За хедъри: без нови редове и управляващи символи (защита от header injection). */
function oneLine(string $s): string
{
    return trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $s) ?? '');
}

function mimeWord(string $s): string
{
    return '=?UTF-8?B?' . base64_encode($s) . '?=';
}

function isDev(): bool
{
    if (PHP_SAPI !== 'cli-server') {
        return false; // на хостинга (Apache) никога не е DEV, дори ако някой подаде Host: localhost
    }
    $host = strtolower(preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
    return in_array($host, ['localhost', '127.0.0.1', '[::1]'], true);
}

// ---------- само POST ----------

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST', true, 405);
    header('Content-Type: text/plain; charset=utf-8');
    echo "405 – само POST.\n";
    exit;
}

// ---------- език и страница, от която идва запитването ----------

$page = field('Страница');
$pagePath = (string) (parse_url($page, PHP_URL_PATH) ?? '');
if ($pagePath === '' || preg_match('~^/[a-z0-9/-]*$~', $pagePath) !== 1 || strpos($pagePath, '//') !== false) {
    $pagePath = '';
}

$lang = strtoupper(field('Език'));
if (!isset(THANKS[$lang])) {
    $lang = preg_match('~^/(en|ru)(/|$)~', $pagePath, $m) === 1 ? strtoupper($m[1]) : 'BG';
}

$back = ($pagePath !== '' ? $pagePath : HOME[$lang]) . '?greshka=1#zapitvane';

// ---------- honeypot: ботовете попълват скритото поле → тихо „Благодаря“ без писмо ----------

if (field('_honey') !== '') {
    go(THANKS[$lang]);
}

// ---------- валидиране (същите полета и ограничения като във формата) ----------

$name    = field('name');
$phone   = field('phone');
$email   = field('email');
$message = field('message');

$ok = $name !== '' && len($name) <= 120
    && $phone !== '' && len($phone) <= 40 && preg_match_all('/\d/', $phone) >= 6
    && len($email) <= 200
    && $message !== '' && len($message) <= 5000;

if (!$ok) {
    go($back);
}

$emailValid = $email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) !== false && oneLine($email) === $email;

// ---------- писмото ----------

// Тема: от скритото поле _subject (бутонът „Запитване за абонамент“ я сменя), иначе по подразбиране.
// Един ред, най-много 150 символа – oneLine() маха \r, \n и другите управляващи символи.
$subjectText = oneLine(field('_subject'));
if ($subjectText === '' || len($subjectText) > 150) {
    $subjectText = MAIL_SUBJECT;
}

date_default_timezone_set('Europe/Sofia');
$body = implode("\n", [
    $subjectText,
    '',
    'Име: ' . oneLine($name),
    'Телефон: ' . oneLine($phone),
    'Имейл: ' . ($email === '' ? '—' : oneLine($email) . ($emailValid ? '' : ' (невалиден адрес)')),
    'Език: ' . $lang,
    'Страница: ' . ($page === '' ? '—' : oneLine($page)),
    '',
    'Съобщение:',
    str_replace(["\r\n", "\r"], "\n", $message),
    '',
    '--',
    'Изпратено: ' . date('d.m.Y H:i'),
    'IP: ' . oneLine($_SERVER['REMOTE_ADDR'] ?? ''),
]);

$headers = [
    'From: ' . mimeWord('Сайт – Адвокат Ангел Димитров') . ' <' . MAIL_FROM . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
];
if ($emailValid) {
    $headers[] = 'Reply-To: ' . $email;
}

$subject = mimeWord($subjectText);
$encoded = chunk_split(base64_encode($body), 76, "\r\n");

if (isDev()) {
    $dir = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'mail-log';
    if (!is_dir($dir) && !mkdir($dir, 0775, true) && !is_dir($dir)) {
        go($back);
    }
    $file = $dir . DIRECTORY_SEPARATOR . date('Ymd-His') . '-' . bin2hex(random_bytes(3)) . '.eml';
    $raw = 'To: ' . MAIL_TO . "\r\n" . 'Subject: ' . $subject . "\r\n" . implode("\r\n", $headers) . "\r\n\r\n" . $encoded
        . "\r\n# --- разкодирано тяло (само в DEV) ---\r\n" . str_replace("\n", "\r\n", $body) . "\r\n";
    $sent = file_put_contents($file, $raw) !== false;
} else {
    $sent = mail(MAIL_TO, $subject, $encoded, implode("\r\n", $headers), '-f' . MAIL_FROM);
}

go($sent ? THANKS[$lang] : $back);
