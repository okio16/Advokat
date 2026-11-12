// Генерира статичния сайт (само HTML, CSS и малко JS) в папка site/ от съдържанието в content/ и lib/.
// Стартиране: node --import ./scripts/static/register.mjs scripts/build-static.mjs
//
// Заглавия на всяка страница: един H1; H2 = правните области (начало, услуги) или разделите на статията;
// H3 = конкретните услуги. Имената на секциите („За мен“, „Контакти“, футър, странична колона) не са заглавия –
// изглеждат по същия начин, но са <p>.
// data-reveal / data-stagger маркират елементите, които js/main.js показва с анимация при скрол (Motion).
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const OUT = path.join(ROOT, "site");

const { SITE, absUrl } = await import("../lib/site.ts");
const { LOCALES, DEFAULT_LOCALE, HREFLANG, OG_LOCALE, getDict, lp } = await import("../lib/i18n.ts");
const { COPY } = await import("../lib/copy.ts");
const C = await import("../lib/content.ts");
const S = await import("../lib/schema.ts");

const YEAR = new Date().getFullYear();
// Формата се изпраща към site/kontakt.php (PHP на хостинга), който праща писмото с mail()
// и пренасочва към /blagodarya на езика на страницата. „Език“ и „Страница“ му казват накъде да върне.
const FORM_ACTION = "/kontakt.php";
const HERO = [1, 2, 3, 4, 5];

// ---------- помощни ----------
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const icon = (cls) => `<i class="${cls}" aria-hidden="true"></i>`;
const phoneText = (lang) => (lang === "bg" ? SITE.phone : SITE.phoneDisplayIntl);
const href = (lang, p) => esc(lp(lang, p));
const ucfirst = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/** „[ДОПЪЛНИ: …]“ се вижда ясно на страницата, докато не бъде попълнено. */
const todo = (text) => esc(text).replace(/\[ДОПЪЛНИ:[^\]]*\]/g, (m) => `<mark class="todo">${m}</mark>`);

const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
/** [текст](/линк) и **удебеляване** → HTML; удебелен телефонен номер става линк за обаждане. */
function rich(text, lang) {
  let out = "";
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    out += esc(text.slice(last, m.index));
    if (m[1]) {
      out += m[2].startsWith("/")
        ? `<a href="${href(lang, m[2])}">${esc(m[1])}</a>`
        : `<a href="${esc(m[2])}" target="_blank" rel="noopener noreferrer">${esc(m[1])}</a>`;
    } else if (/^\+?[\d ]{9,}$/.test(m[3])) {
      out += `<a href="tel:${SITE.phoneIntl}"><strong>${esc(m[3])}</strong></a>`;
    } else out += `<strong>${esc(m[3])}</strong>`;
    last = m.index + m[0].length;
  }
  return out + esc(text.slice(last));
}

// „административнонаказателно“ е по-широко от картата на телефон – мек дефис позволява пренасяне.
// Неразделим интервал преди тире – тирето не започва нов ред.
const softHyphens = (html) =>
  html.replace(
    />([^<]+)</g,
    (_, text) => `>${text.replace(/(административно)(наказателн)/gi, "$1&shy;$2").replace(/ – /g, "&nbsp;– ")}<`,
  );

const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

function flag(l) {
  const a = `width="24" height="16" aria-hidden="true" focusable="false" class="flag"`;
  if (l === "bg")
    return `<svg ${a} viewBox="0 0 24 16"><rect width="24" height="5.34" fill="#fff"/><rect width="24" height="5.33" y="5.33" fill="#00966e"/><rect width="24" height="5.34" y="10.66" fill="#d62612"/></svg>`;
  if (l === "ru")
    return `<svg ${a} viewBox="0 0 24 16"><rect width="24" height="5.34" fill="#fff"/><rect width="24" height="5.33" y="5.33" fill="#0039a6"/><rect width="24" height="5.34" y="10.66" fill="#d52b1e"/></svg>`;
  return `<svg ${a} viewBox="0 0 60 30" preserveAspectRatio="none"><clipPath id="uk-clip"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#uk-clip)" stroke="#c8102e" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#c8102e" stroke-width="6"/></svg>`;
}

const mapIframe = (title) =>
  `<iframe src="${esc(SITE.mapEmbed)}" title="${esc(title)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

// ---------- услугите в една правна област ----------
/** Името на услугата: без „Адвокат за“ и без повторение на областта („Административно право – …“). */
function serviceLabel(lang, name) {
  let n = name.includes(" – ") ? name.split(" – ").slice(1).join(" – ") : name;
  if (lang === "bg") n = n.replace(/^Адвокат за /, "").replace(/^Адвокат на пострадал$/, "Защита на пострадали от престъпление");
  if (lang === "en") n = n.replace(/ lawyer$/, "").replace(/^Lawyer for victims of crime$/, "Representing victims of crime");
  if (lang === "ru") n = n.replace(/^Адвокат по делам о /, "Дела о ").replace(/^Адвокат потерпевшего$/, "Защита потерпевших");
  return ucfirst(n);
}

const isCategoryPath = (p) => p.split("/").length === 3;

/**
 * Карта на правна област – както преди: заглавие с икона, текст и червени бутони (H3) към основните услуги.
 */
function areaCard(lang, g) {
  const main = g.buttons.map((b) => {
    const page = C.pageByPath(lang, b.href);
    const isCat = isCategoryPath(b.href);
    return { path: b.href, name: isCat ? b.label : serviceLabel(lang, page?.name ?? b.label) };
  });
  return `<div class="service" data-stagger>
      <h2>${icon(g.icon)}<span>${esc(g.title)}</span></h2>
      <p>${esc(g.text)}</p>
      <div class="service-buttons">${main.map((s) => `<h3><a href="${href(lang, s.path)}" class="service-btn">${esc(s.name)}</a></h3>`).join("")}</div>
    </div>`;
}

// ---------- общи части ----------
function header(lang, base) {
  const t = getDict(lang);
  const items = [
    { href: "/#forMe", label: t.nav.about },
    { href: "/uslugi", label: t.nav.services },
    { href: "/kontakti", label: t.nav.contact },
  ];
  const active = (h) => !h.includes("#") && (base === h || base.startsWith(`${h}/`));
  const langs = LOCALES.map((l) => {
    const name = getDict(l).langName;
    const cur = l === lang ? ` aria-current="true" class="current"` : "";
    return `<a href="${href(l, base)}" hreflang="${l}" lang="${l}" title="${esc(name)}" aria-label="${esc(name)}"${cur}>${flag(l)}<span class="lang-code">${l.toUpperCase()}</span></a>`;
  }).join("");
  return `<header class="site-header">
  <a href="${href(lang, "/")}" class="brand">${esc(t.siteName)}</a>
  <button class="menu-toggle" type="button" aria-label="${esc(t.menuOpen)}" data-open-label="${esc(t.menuOpen)}" data-close-label="${esc(t.menuClose)}" aria-expanded="false" aria-controls="main-nav">${icon("fas fa-bars")}</button>
  <nav id="main-nav" class="main-nav" aria-label="${esc(lang === "bg" ? "Основно меню" : lang === "en" ? "Main menu" : "Главное меню")}">
    ${items.map((i) => `<a href="${href(lang, i.href)}"${active(i.href) ? ` class="active" aria-current="page"` : ""}>${esc(i.label)}</a>`).join("\n    ")}
    <a href="tel:${SITE.phoneIntl}" class="nav-phone">${icon("fa fa-phone")} ${esc(phoneText(lang))}</a>
    <div class="lang-switch" role="group" aria-label="${esc(t.language)}">${langs}</div>
  </nav>
  <div class="nav-backdrop" aria-hidden="true"></div>
</header>`;
}

function footer(lang) {
  const t = getDict(lang);
  const phone = phoneText(lang);
  return `<footer class="footer-grid">
  <div class="footer-top">
    <div class="footer-col" data-stagger>
      <p class="footer-title">${esc(t.siteName)}</p>
      <p>${esc(t.footer.text)}</p>
      <p class="footer-bar"><a href="${esc(SITE.barRegisterUrl)}" target="_blank" rel="noopener noreferrer">${esc(t.footer.bar)}</a></p>
    </div>
    <div class="footer-col" data-stagger>
      <p class="footer-head">${esc(t.footer.pages)}</p>
      <a href="${href(lang, "/")}#forMe">${esc(t.nav.about)}</a>
      <a href="${href(lang, "/uslugi")}">${esc(t.services)}</a>
      <a href="${href(lang, "/rayoni")}">${esc(t.areas)}</a>
      <a href="${href(lang, "/kontakti")}">${esc(t.contacts)}</a>
    </div>
    <div class="footer-col" data-stagger>
      <p class="footer-head">${esc(t.footer.social)}</p>
      <a href="${esc(SITE.facebook)}" target="_blank" rel="noopener noreferrer">${icon("fab fa-facebook-f")} Facebook</a>
      <a href="${esc(SITE.instagram)}" target="_blank" rel="noopener noreferrer">${icon("fab fa-instagram")} Instagram</a>
      <a href="${esc(SITE.tiktok)}" target="_blank" rel="noopener noreferrer">${icon("fab fa-tiktok")} TikTok</a>
    </div>
    <div class="footer-col" data-stagger>
      <p class="footer-head">${esc(t.footer.contact)}</p>
      <address>
        <p>${icon("fa fa-phone")} <a href="tel:${SITE.phoneIntl}">${esc(phone)}</a></p>
        <p>${icon("fa fa-envelope")} <a href="mailto:${SITE.email}">${esc(SITE.email)}</a></p>
        <p>${icon("fa fa-map-marker-alt")} ${esc(t.address)}</p>
        <p>${icon("fa fa-clock")} ${todo(COPY[lang].hours)}</p>
      </address>
    </div>
  </div>
  <div class="footer-map">${mapIframe(`${t.siteName} ${t.footer.onMap}`)}</div>
  <div class="footer-bottom">© <span data-year>${YEAR}</span> ${esc(t.footer.rights)}</div>
  <a href="tel:${SITE.phoneIntl}" class="call-fab" aria-label="${esc(`${t.call}: ${phone}`)}">${icon("fa fa-phone")}</a>
</footer>`;
}

function layout(lang, base, { title, description, schema = [], body, noindex = false }) {
  const t = getDict(lang);
  const canonical = absUrl(lp(lang, base));
  const alternates = noindex
    ? ""
    : [
        ...LOCALES.map((l) => `<link rel="alternate" hreflang="${HREFLANG[l]}" href="${esc(absUrl(lp(l, base)))}">`),
        `<link rel="alternate" hreflang="x-default" href="${esc(absUrl(lp(DEFAULT_LOCALE, base)))}">`,
      ].join("\n");
  const site = [
    S.businessSchema(
      lang,
      C.getCategories(lang).map((c) => ({ name: c.name, path: C.categoryPath(c) })),
      C.getAreas(lang).map((a) => a.name),
    ),
    S.personSchema(lang),
  ];
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${noindex ? "noindex, follow" : "index, follow"}">
<meta name="theme-color" content="#7a0d0d">
<meta name="author" content="Ангел Димитров">
${noindex ? "" : `<link rel="canonical" href="${esc(canonical)}">`}
${alternates}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(t.siteName)}">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
${LOCALES.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`).join("\n")}
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${esc(absUrl("/images/law-office-1-1920.jpg"))}">
<link rel="icon" href="/logase.png">
<link rel="apple-touch-icon" href="/logase.png">
<script>/* Анимациите при скрол се включват само ако JS работи и посетителят не е избрал намалено движение */if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("motion");</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&amp;family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&amp;display=swap">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/fontawesome.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/solid.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/brands.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
<link rel="stylesheet" href="/css/style.css">
<script src="/js/motion.js" defer></script>
<script src="/js/main.js" defer></script>
${[...site, ...schema].map(jsonLd).join("\n")}
</head>
<body>
<a class="skip-link" href="#main">${esc(lang === "bg" ? "Към съдържанието" : lang === "en" ? "Skip to content" : "К содержанию")}</a>
${header(lang, base)}
<main id="main">
${softHyphens(body)}
</main>
${footer(lang)}
</body>
</html>
`;
}

function pageHero(lang, h1, lead, crumbs) {
  const t = getDict(lang);
  const ol = crumbs
    .map((c, i) =>
      i < crumbs.length - 1
        ? `<li><a href="${href(lang, c.href)}">${esc(c.name)}</a></li>`
        : `<li><span aria-current="page">${esc(c.name)}</span></li>`,
    )
    .join("");
  return `<section class="page-hero">
  <div class="page-hero-inner">
    <nav class="breadcrumbs" aria-label="${esc(t.breadcrumbs)}" data-hero><ol>${ol}</ol></nav>
    <h1 data-hero>${esc(h1)}</h1>
    ${lead ? `<p class="lead" data-hero>${esc(lead)}</p>` : ""}
    <div class="hero-actions" data-hero>
      <a href="tel:${SITE.phoneIntl}" class="btn">${icon("fa fa-phone")} ${esc(phoneText(lang))}</a>
      <a href="#zapitvane" class="btn btn-outline">${esc(t.sendInquiry)}</a>
    </div>
  </div>
</section>`;
}

function contactBox(lang, base) {
  const t = getDict(lang);
  const f = t.form;
  const c = COPY[lang];
  const id = (n) => `f-${n}`;
  return `<div class="contact-combined" id="zapitvane" data-reveal>
  <div class="contact-header">
    ${icon("fas fa-envelope-open-text")}
    <p class="contact-title">${esc(t.sendInquiry)}</p>
  </div>
  <form class="contact-form" action="${esc(FORM_ACTION)}" method="POST" data-sending="${esc(f.sending)}">
    <input type="hidden" name="_subject" value="${esc(`Запитване от сайта (${lang.toUpperCase()})`)}">
    <input type="hidden" name="Език" value="${lang.toUpperCase()}">
    <input type="hidden" name="Страница" value="${esc(absUrl(lp(lang, base)))}">
    <div class="field">
      <label for="${id("name")}">${esc(f.name)}</label>
      <input id="${id("name")}" type="text" name="name" autocomplete="name" maxlength="120" required>
    </div>
    <div class="field-row">
      <div class="field">
        <label for="${id("phone")}">${esc(f.phone)}</label>
        <input id="${id("phone")}" type="tel" name="phone" autocomplete="tel" inputmode="tel" maxlength="40" required>
      </div>
      <div class="field">
        <label for="${id("email")}">${esc(c.emailOptional)}</label>
        <input id="${id("email")}" type="email" name="email" autocomplete="email" maxlength="200">
      </div>
    </div>
    <div class="field">
      <label for="${id("message")}">${esc(f.message)}</label>
      <p class="field-hint" id="${id("message-hint")}">${esc(f.messageHint)}</p>
      <textarea id="${id("message")}" rows="5" name="message" maxlength="5000" aria-describedby="${id("message-hint")}" required></textarea>
    </div>
    <input type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" class="hp-field">
    <button type="submit">${icon("fas fa-paper-plane")} <span>${esc(f.submit)}</span></button>
    <p class="form-privacy">${esc(f.privacy)}</p>
  </form>
  <div class="contact-note">
    ${icon("fas fa-scale-balanced")}
    <p>${esc(f.fee)}</p>
  </div>
</div>`;
}

function ctaBand(lang, title) {
  const t = getDict(lang);
  return `<div class="cta-band" data-reveal>
  <div>
    <p class="cta-title">${esc(title ?? t.cta.title)}</p>
    <p>${esc(t.cta.text)}</p>
  </div>
  <div class="hero-actions">
    <a href="tel:${SITE.phoneIntl}" class="btn">${icon("fa fa-phone")} ${esc(phoneText(lang))}</a>
    <a href="#zapitvane" class="btn btn-outline">${esc(t.cta.online)}</a>
  </div>
</div>`;
}

// Карта „Абонаментно правно обслужване“ – само на началната страница и на страниците, свързани с бизнеса.
// На подстраниците е светла (biz-light), защото под нея идва червената лента „Нуждаете се от адвокат?“.
const BIZ_PAGES = new Set([
  "/uslugi",
  "/rayoni",
  "/uslugi/targovsko-pravo",
  "/uslugi/targovsko-pravo/registratsiya-i-promeni-na-firmi",
  "/uslugi/grazhdansko-pravo",
  "/uslugi/grazhdansko-pravo/dogovorni-sporove",
  "/uslugi/grazhdansko-pravo/sabirane-na-vzemaniya",
  "/uslugi/trudovo-pravo",
  "/uslugi/administrativno-pravo/danachni-sporove-i-revizii",
  "/uslugi/potrebitelsko-pravo",
  "/rayoni/tsentar",
  "/rayoni/mladost",
  "/rayoni/nadezhda",
]);
const BIZ = {
  bg: {
    eyebrow: "За фирми",
    title: "Абонаментно правно обслужване",
    text: "Предоставя адвокатски услуги на фирми срещу индивидуално уговорен месечен абонамент.",
    btn: "Запитване за абонамент",
    prefill: "Интересувам се от абонаментно правно обслужване за фирма.",
    subject: "Запитване за абонамент (фирма)",
  },
  en: {
    eyebrow: "For businesses",
    title: "Legal services on a monthly retainer",
    text: "Provides legal services to companies for an individually agreed monthly retainer.",
    btn: "Ask about a retainer",
    prefill: "I am interested in a monthly legal retainer for my company.",
    subject: "Запитване за абонамент (фирма, EN)",
  },
  ru: {
    eyebrow: "Для компаний",
    title: "Абонентское юридическое обслуживание",
    text: "Предоставляет адвокатские услуги компаниям за индивидуально согласованную ежемесячную абонентскую плату.",
    btn: "Запрос об абонементе",
    prefill: "Меня интересует абонентское юридическое обслуживание для компании.",
    subject: "Запитване за абонамент (фирма, RU)",
  },
};

/** Връща картата + нов ред или празен низ, ако страницата не е в BIZ_PAGES. */
function bizCard(lang, base) {
  const home = base === "/";
  if (!home && !BIZ_PAGES.has(base)) return "";
  const x = BIZ[lang];
  return `<section id="firmi" class="biz-section${home ? "" : " biz-light"}" aria-labelledby="firmi-title">
  <div class="biz-card" data-reveal>
    <span class="biz-icon" aria-hidden="true"><i class="fas fa-handshake"></i></span>
    <div class="biz-body">
      <p class="biz-eyebrow">${esc(x.eyebrow)}</p>
      <h2 id="firmi-title" class="biz-title">${esc(x.title)}</h2>
      <p class="biz-text">${esc(x.text)}</p>
    </div>
    <div class="biz-actions">
      <a href="#zapitvane" class="service-btn biz-btn" data-prefill="${esc(x.prefill)}" data-subject="${esc(x.subject)}">${esc(x.btn)} ${icon("fas fa-arrow-right")}</a>
      <a href="tel:${SITE.phoneIntl}" class="biz-phone">${icon("fas fa-phone")}<span>${esc(phoneText(lang))}</span></a>
    </div>
  </div>
</section>
`;
}

const faqBlock = (items, lang) =>
  `<section aria-label="${esc(COPY[lang].labels.faq)}">
  <p class="center section-title" data-reveal>${esc(COPY[lang].labels.faq)}</p>
  <div class="faq">
${items.map((f) => `    <details data-stagger>\n      <summary>${esc(f.q)}</summary>\n      <div class="faq-body"><p>${rich(f.a, lang)}</p></div>\n    </details>`).join("\n")}
  </div>
</section>`;

function block(b, lang) {
  if (typeof b === "string") return `<p>${rich(b, lang)}</p>`;
  if ("h3" in b) return `<h3>${esc(b.h3)}</h3>`;
  if ("note" in b) return `<p class="callout">${rich(b.note, lang)}</p>`;
  if ("ul" in b || "ol" in b) {
    const tag = "ul" in b ? "ul" : "ol";
    return `<${tag}>${(b.ul ?? b.ol).map((li) => `<li>${rich(li, lang)}</li>`).join("")}</${tag}>`;
  }
  // На телефон редовете на таблицата се показват като блокове с етикети (data-label).
  const head = b.table.head;
  return `<div class="table-wrap"><table><thead><tr>${head.map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${b.table.rows
    .map((r) => `<tr>${r.map((c, i) => `<td data-label="${esc(head[i] ?? "")}">${rich(c, lang)}</td>`).join("")}</tr>`)
    .join("")}</tbody></table></div>`;
}

/** Разделът с практическите стъпки („Какво да направите…“) е най-нужен на притеснения човек – показва се първи. */
const URGENT = /^(Какво да направите|What to do|Что делать)/;
const sections = (list, lang) =>
  [...list.filter((s) => URGENT.test(s.h2)), ...list.filter((s) => !URGENT.test(s.h2))]
    .map((s) => `<h2>${esc(s.h2)}</h2>\n${s.blocks.map((b) => block(b, lang)).join("\n")}`)
    .join("\n");

function areasLine(lang) {
  const t = getDict(lang);
  const areas = C.getAreas(lang);
  const links = areas
    .map((a, i) => `<a href="${href(lang, C.areaPath(a))}">${esc(a.name)}</a>${i < areas.length - 1 ? ", " : " – "}`)
    .join("");
  return `<section class="areas-bottom"><p class="areas-line">${esc(t.areasLine)} ${links}${esc(t.areasEnd)}</p></section>`;
}

/** Районите като едно изречение – вместо отделни бутони „Услуга – район“. */
function areasSentence(lang, areas) {
  const links = areas.map((a) => `<a href="${href(lang, C.areaPath(a))}">${esc(a.name)}</a>`);
  const list = links.length > 1 ? `${links.slice(0, -1).join(", ")} ${lang === "en" ? "and" : "и"} ${links.at(-1)}` : links[0];
  return `${esc(COPY[lang].areasSentence)} ${list}.`;
}

function consultCard(lang, withOffice) {
  const t = getDict(lang);
  return `<div class="side-card" data-stagger>
  <p class="side-title">${esc(t.service.consult)}</p>
  <p>${withOffice ? `${esc(t.service.office)}: ` : ""}${esc(t.address)}</p>
  <p class="side-hours">${todo(COPY[lang].hours)}</p>
  <a href="tel:${SITE.phoneIntl}" class="btn btn-primary">${icon("fa fa-phone")} ${esc(phoneText(lang))}</a>
  <a href="#zapitvane" class="btn btn-quiet">${icon("fas fa-paper-plane")} ${esc(t.sendInquiry)}</a>
</div>`;
}

// ---------- страници ----------
const pages = [];
const add = (lang, p, html) => pages.push({ lang, path: p, html });

function home(lang) {
  const t = getDict(lang);
  const c = COPY[lang];
  const slides = HERO.map((n, i) => {
    const attrs = i === 0 ? `fetchpriority="high"` : `loading="lazy"`;
    return `<div class="slide${i === 0 ? " active" : ""}"${i === 0 ? "" : ` aria-hidden="true"`}><img src="/images/law-office-${n}-1920.jpg" srcset="/images/law-office-${n}-960.jpg 960w, /images/law-office-${n}-1920.jpg 1920w" sizes="100vw" alt="${esc(t.hero.slides[i])}" decoding="async" ${attrs}></div>`;
  }).join("\n  ");
  const dots = HERO.map(
    (_, i) =>
      `<button type="button" class="indicator${i === 0 ? " active" : ""}" aria-label="${esc(`${t.hero.slide} ${i + 1}`)}"${i === 0 ? ` aria-current="true"` : ""}></button>`,
  ).join("");
  const pauseLabel = { bg: ["Спри снимките", "Пусни снимките"], en: ["Pause photos", "Play photos"], ru: ["Остановить фото", "Запустить фото"] }[lang];

  const body = `<section class="hero" data-slider>
  ${slides}
  <div class="overlay"></div>
  <div class="content"><div>
    <h1><span class="h1-name" data-hero>${esc(c.h1Name)}</span> <span class="h1-rest" data-hero>${esc(c.h1Rest)}</span></h1>
    <p class="hero-subtitle" data-hero>${esc(c.heroLead)}</p>
    <div class="hero-actions" data-hero>
      <a href="tel:${SITE.phoneIntl}" class="btn">${icon("fa fa-phone")} ${esc(phoneText(lang))}</a>
      <a href="#zapitvane" class="btn btn-outline">${esc(t.hero.cta)}</a>
    </div>
  </div></div>
  <div class="indicators">
    <button type="button" class="slider-pause" aria-label="${esc(pauseLabel[0])}" data-pause-label="${esc(pauseLabel[0])}" data-play-label="${esc(pauseLabel[1])}">${icon("fas fa-pause")}</button>
    ${dots}
  </div>
</section>

<section id="forMe">
  <p class="center section-title" data-reveal>${esc(c.labels.about)}</p>
  <div class="about-grid">
    <div data-reveal>
      <p class="card-title">${esc(t.about.cardTitle)}</p>
      ${c.about.map((p) => `<p>${esc(p)}</p>`).join("\n      ")}
    </div>
  </div>
</section>

<div class="services-band">
<section id="whatIDo" class="services-section">
  <p class="center section-title" data-reveal>${esc(c.labels.areas)}</p>
  <p class="section-text" data-reveal>${esc(c.areasIntro)}</p>
  <div class="services">
    ${C.getGroups(lang).map((g) => areaCard(lang, g)).join("\n    ")}
  </div>
</section>
</div>

${bizCard(lang, "/")}<section id="contact">
  <p class="center section-title" data-reveal>${esc(c.labels.contact)}</p>
  <p class="section-text" data-reveal>${esc(c.contactIntro)}</p>
  ${contactBox(lang, "/")}
</section>

${areasLine(lang)}`;
  add(lang, "/", layout(lang, "/", { title: t.homeMeta.title, description: t.homeMeta.description, body }));
}

function servicesPage(lang) {
  const t = getDict(lang);
  const crumbs = [
    { name: t.home, href: "/" },
    { name: t.services, href: "/uslugi" },
  ];
  const body = `${pageHero(lang, t.servicesPage.h1, COPY[lang].areasIntro, crumbs)}
<section>
  <div class="services services-flush">
    ${C.getGroups(lang).map((g) => areaCard(lang, g)).join("\n    ")}
  </div>
</section>
${bizCard(lang, "/uslugi")}<section>
  ${ctaBand(lang, t.servicesPage.cta)}
  ${contactBox(lang, "/uslugi")}
</section>`;
  add(
    lang,
    "/uslugi",
    layout(lang, "/uslugi", {
      title: t.servicesPage.title,
      description: t.servicesPage.description,
      schema: [S.breadcrumbSchema(lang, crumbs)],
      body,
    }),
  );
}

function serviceView(lang, category, service) {
  const t = getDict(lang);
  const page = service ?? category;
  const p = service ? C.servicePath(category, service) : C.categoryPath(category);
  const crumbs = [
    { name: t.home, href: "/" },
    { name: t.services, href: "/uslugi" },
    { name: category.name, href: C.categoryPath(category) },
    ...(service ? [{ name: service.name, href: p }] : []),
  ];
  const areas = C.areasFor(lang, page.areas);
  const children =
    !service && category.children.length
      ? `<div class="related-block">
        <h2>${esc(t.service.inArea(category.name))}</h2>
        <div class="service-buttons">${category.children.map((s) => `<h3><a href="${href(lang, C.servicePath(category, s))}" class="service-btn">${esc(serviceLabel(lang, s.name))}</a></h3>`).join("")}</div>
      </div>`
      : "";
  const areaText = areas.length ? `<p class="areas-served">${icon("fa fa-location-dot")} ${areasSentence(lang, areas)}</p>` : "";
  const cur = (yes) => (yes ? ` aria-current="page"` : "");
  const body = `${pageHero(lang, page.h1, page.lead, crumbs)}
<section>
  <div class="content-layout">
    <article class="article">
      ${sections(page.sections, lang)}
      ${children}
      ${areaText}
    </article>
    <aside class="sidebar" aria-label="${esc(t.service.consult)}">
      ${consultCard(lang, true)}
      <nav class="side-card" aria-label="${esc(`${t.services}: ${category.name}`)}" data-stagger>
        <p class="side-title">${esc(category.name)}</p>
        <ul>
          <li><a href="${href(lang, C.categoryPath(category))}"${cur(!service)}>${esc(t.service.overview)}</a></li>
          ${category.children.map((s) => `<li><a href="${href(lang, C.servicePath(category, s))}"${cur(service?.slug === s.slug)}>${esc(serviceLabel(lang, s.name))}</a></li>`).join("\n          ")}
          <li><a href="${href(lang, "/uslugi")}">${esc(COPY[lang].allServices)}</a></li>
        </ul>
      </nav>
    </aside>
  </div>
</section>
${page.faq.length ? faqBlock(page.faq, lang) : ""}
${bizCard(lang, p)}<section>
  ${ctaBand(lang)}
  ${contactBox(lang, p)}
</section>`;
  add(
    lang,
    p,
    layout(lang, p, {
      title: page.title,
      description: page.description,
      schema: [
        S.breadcrumbSchema(lang, crumbs),
        S.serviceSchema(lang, { name: page.h1, description: page.description, path: p, areaServed: ["София", ...areas.map((a) => a.name)] }),
        ...(page.faq.length ? [S.faqSchema(page.faq)] : []),
      ],
      body,
    }),
  );
}

function areasPage(lang) {
  const t = getDict(lang);
  const crumbs = [
    { name: t.home, href: "/" },
    { name: t.areas, href: "/rayoni" },
  ];
  const cards = C.getAreas(lang)
    .map(
      (a) => `<div class="service" data-stagger>
      <p class="service-name">${icon("fa fa-location-dot")}<a href="${href(lang, C.areaPath(a))}">${esc(a.name)}</a></p>
      <p>${esc(a.lead)}</p>
      <div class="service-buttons"><a href="${href(lang, C.areaPath(a))}" class="service-btn">${esc(t.learnMore)}<span class="sr-only">: ${esc(a.name)}</span></a></div>
    </div>`,
    )
    .join("\n    ");
  const body = `${pageHero(lang, t.areasPage.h1, t.areasPage.lead, crumbs)}
<section>
  <div class="services services-flush">
    ${cards}
  </div>
  <p class="areas-bulgaria" data-reveal>${icon("fa fa-flag")} ${esc(t.areasPage.bulgaria)}</p>
</section>
<section>
  <div class="map-embed" data-reveal>${mapIframe(`${t.siteName} ${t.footer.onMap}`)}</div>
</section>
${bizCard(lang, "/rayoni")}<section>
  ${ctaBand(lang)}
  ${contactBox(lang, "/rayoni")}
</section>`;
  add(
    lang,
    "/rayoni",
    layout(lang, "/rayoni", {
      title: t.areasPage.title,
      description: t.areasPage.description,
      schema: [S.breadcrumbSchema(lang, crumbs)],
      body,
    }),
  );
}

function areaPage(lang, area) {
  const t = getDict(lang);
  const p = C.areaPath(area);
  const crumbs = [
    { name: t.home, href: "/" },
    { name: t.areas, href: "/rayoni" },
    { name: area.name, href: p },
  ];
  const services = area.services.flatMap((sp) => {
    const pg = C.pageByPath(lang, sp);
    return pg ? [{ sp, pg }] : [];
  });
  const others = C.getAreas(lang).filter((a) => a.slug !== area.slug);
  const body = `${pageHero(lang, area.h1, area.lead, crumbs)}
<section>
  <div class="content-layout">
    <article class="article">
      ${sections(area.sections, lang)}
      <div class="related-block">
        <h2>${esc(t.areaPage.servicesFor)}</h2>
        <div class="services services-flush">
          ${services.map(({ sp, pg }) => `<div class="service"><h3>${icon(pg.icon)}<a href="${href(lang, sp)}">${esc(serviceLabel(lang, pg.name))}</a></h3><p>${esc(pg.excerpt)}</p></div>`).join("\n          ")}
        </div>
      </div>
      <div class="related-block">
        <p class="related-title">${esc(t.areaPage.map)}</p>
        <div class="map-embed">${mapIframe(`${t.siteName} – ${t.areaPage.howToReach(area.name)}`)}</div>
        <p class="map-link"><a href="${esc(SITE.googleMapsUrl)}" target="_blank" rel="noopener noreferrer" class="text-link">${icon("fa fa-diamond-turn-right")} ${esc(t.areaPage.directions)}</a></p>
      </div>
    </article>
    <aside class="sidebar" aria-label="${esc(t.service.consult)}">
      ${consultCard(lang, false)}
      <nav class="side-card" aria-label="${esc(t.areaPage.others)}" data-stagger>
        <p class="side-title">${esc(t.areaPage.others)}</p>
        <ul>${others.map((a) => `<li><a href="${href(lang, C.areaPath(a))}">${esc(a.name)}</a></li>`).join("")}</ul>
      </nav>
    </aside>
  </div>
</section>
${faqBlock(area.faq, lang)}
${bizCard(lang, p)}<section>
  ${ctaBand(lang, t.areaPage.cta)}
  ${contactBox(lang, p)}
</section>`;
  add(
    lang,
    p,
    layout(lang, p, {
      title: area.title,
      description: area.description,
      schema: [
        S.breadcrumbSchema(lang, crumbs),
        S.serviceSchema(lang, { name: area.h1, description: area.description, path: p, areaServed: [area.name] }),
        S.faqSchema(area.faq),
      ],
      body,
    }),
  );
}

function contactPage(lang) {
  const t = getDict(lang);
  const c = t.contactPage;
  const crumbs = [
    { name: t.home, href: "/" },
    { name: t.contacts, href: "/kontakti" },
  ];
  const body = `${pageHero(lang, c.h1, c.lead, crumbs)}
<section>
  <div class="nap-grid">
    <div class="nap-card" data-stagger>${icon("fa fa-phone")}<p class="nap-title">${esc(c.phone)}</p><a href="tel:${SITE.phoneIntl}">${esc(phoneText(lang))}</a></div>
    <div class="nap-card" data-stagger>${icon("fa fa-envelope")}<p class="nap-title">${esc(c.email)}</p><a href="mailto:${SITE.email}">${esc(SITE.email)}</a></div>
    <div class="nap-card" data-stagger>${icon("fa fa-map-marker-alt")}<p class="nap-title">${esc(c.address)}</p><a href="${esc(SITE.googleMapsUrl)}" target="_blank" rel="noopener noreferrer">${esc(t.address)}</a></div>
  </div>
  <p class="nap-hours" data-reveal>${icon("fa fa-clock")} ${todo(COPY[lang].hours)}</p>
</section>
<section class="flush-top">
  ${contactBox(lang, "/kontakti")}
</section>
<section class="flush-top">
  <p class="center section-title" data-reveal>${esc(c.find)}</p>
  <p class="section-intro" data-reveal>${esc(c.findText)}</p>
  <div class="map-embed" data-reveal>${mapIframe(`${t.siteName} ${t.footer.onMap}`)}</div>
</section>
<section>
  <p class="center section-title" data-reveal>${esc(c.mainServices)}</p>
  <div class="chips">${C.getCategories(lang).map((cat) => `<a href="${href(lang, C.categoryPath(cat))}" class="chip" data-stagger>${icon(cat.icon)} ${esc(cat.name)}</a>`).join("")}</div>
</section>
${areasLine(lang)}`;
  add(
    lang,
    "/kontakti",
    layout(lang, "/kontakti", { title: c.title, description: c.description, schema: [S.breadcrumbSchema(lang, crumbs)], body }),
  );
}

const THANKS = {
  bg: { h1: "Благодаря, запитването е изпратено", text: "Ще се свържа с Вас по телефона. Ако въпросът е спешен, обадете се на", back: "Към началната страница" },
  en: { h1: "Thank you, your inquiry has been sent", text: "I will call you back. If the matter is urgent, please call", back: "Back to the home page" },
  ru: { h1: "Спасибо, запрос отправлен", text: "Я вам перезвоню. Если вопрос срочный, позвоните по номеру", back: "На главную" },
};

function thanksPage(lang) {
  const t = getDict(lang);
  const x = THANKS[lang];
  const body = `<section class="message-page">
  <span data-hero>${icon("fas fa-circle-check")}</span>
  <h1 data-hero>${esc(x.h1)}</h1>
  <p data-hero>${esc(x.text)} <a href="tel:${SITE.phoneIntl}">${esc(phoneText(lang))}</a>.</p>
  <div class="hero-actions" data-hero><a href="${href(lang, "/")}" class="btn btn-primary">${esc(x.back)}</a><a href="${href(lang, "/uslugi")}" class="btn btn-quiet">${esc(t.services)}</a></div>
</section>`;
  add(lang, "/blagodarya", layout(lang, "/blagodarya", { title: `${x.h1} | ${t.siteName}`, description: x.h1, body, noindex: true }));
}

function notFound() {
  const bg = getDict("bg");
  const en = getDict("en");
  const body = `<section class="message-page">
  <h1 data-hero>${esc(bg.notFound.title)}</h1>
  <p data-hero>${esc(bg.notFound.text)}</p>
  <p class="muted" lang="en" data-hero>${esc(en.notFound.title)}. ${esc(en.notFound.text)}</p>
  <div class="hero-actions" data-hero>
    <a href="/" class="btn btn-primary">${esc(bg.home)}</a>
    <a href="/uslugi" class="btn btn-quiet">${esc(bg.services)}</a>
    <a href="/kontakti" class="btn btn-quiet">${esc(bg.contacts)}</a>
  </div>
</section>`;
  return layout("bg", "/", { title: `${bg.notFound.title} | ${bg.siteName}`, description: bg.notFound.text, body, noindex: true });
}

// ---------- сглобяване ----------
for (const lang of LOCALES) {
  home(lang);
  servicesPage(lang);
  contactPage(lang);
  areasPage(lang);
  thanksPage(lang);
  for (const cat of C.getCategories(lang)) {
    serviceView(lang, cat);
    for (const s of cat.children) serviceView(lang, cat, s);
  }
  for (const a of C.getAreas(lang)) areaPage(lang, a);
}

/** /uslugi → uslugi.html, /en → en.html, / → index.html */
const fileFor = (lang, p) => {
  const full = lp(lang, p);
  return full === "/" ? "index.html" : `${full.slice(1)}.html`;
};

for (const pg of pages) {
  const file = path.join(OUT, fileFor(pg.lang, pg.path));
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, pg.html);
}
writeFileSync(path.join(OUT, "404.html"), notFound());

// sitemap.xml с hreflang
const cats = C.getCategories(DEFAULT_LOCALE);
const SM = [
  ["/", 1],
  ["/uslugi", 0.9],
  ["/kontakti", 0.8],
  ["/rayoni", 0.7],
  ...cats.map((c) => [C.categoryPath(c), 0.9]),
  ...cats.flatMap((c) => c.children.map((s) => [C.servicePath(c, s), 0.8])),
  ...C.getAreas(DEFAULT_LOCALE).map((a) => [C.areaPath(a), 0.7]),
];
const today = new Date().toISOString().slice(0, 10);
const urls = LOCALES.flatMap((lang) =>
  SM.map(([p, pr]) => {
    const prio = lang === DEFAULT_LOCALE ? pr : Math.round(pr * 0.8 * 10) / 10;
    const alts = LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${esc(absUrl(lp(l, p)))}"/>`).join("\n");
    return `  <url>\n    <loc>${esc(absUrl(lp(lang, p)))}</loc>\n${alts}\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${prio}</priority>\n  </url>`;
  }),
);
writeFileSync(
  path.join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`,
);
writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${absUrl("/sitemap.xml")}\n`);

console.log(`${pages.length + 1} страници → ${path.relative(ROOT, OUT)}`);
