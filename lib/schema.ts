import { absUrl, SITE } from "./site";
import { getDict, HREFLANG, lp, type Locale } from "./i18n";
import type { Faq } from "./types";

// [текст](/линк) и **удебеляване** → само текстът (за JSON-LD).
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
const plain = (t: string) => t.replace(TOKEN, (_, a, _h, b) => a ?? b);

export const BUSINESS_ID = `${SITE.url}/#business`;
export const PERSON_ID = `${SITE.url}/#person`;

const url = (lang: Locale, path: string) => absUrl(lp(lang, path));

export function businessSchema(lang: Locale, services: { name: string; path: string }[], areas: string[]) {
  const t = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@type": ["Attorney", "LegalService"],
    "@id": BUSINESS_ID,
    name: t.siteName,
    alternateName: ["Адвокат Ангел Димитров София", "Lawyer Angel Dimitrov Sofia", "Адвокатска кантора Ангел Димитров"],
    description: t.footer.text,
    url: url(lang, "/"),
    logo: absUrl("/images/logo.png"),
    image: [absUrl("/images/law-office-1-1920.jpg"), absUrl("/images/law-office-4-1920.jpg")],
    telephone: SITE.phoneIntl,
    email: SITE.email,
    // Адресът в schema е винаги на български – така е в Google Business профила (NAP).
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.district}, ${SITE.address.street}`,
      addressLocality: SITE.address.locality,
      postalCode: SITE.address.postalCode,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.googleMapsUrl,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "15:00" },
    ],
    areaServed: [
      { "@type": "City", name: "София" },
      ...areas.map((name) => ({ "@type": "Place", name })),
      { "@type": "Country", name: "България" },
    ],
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    inLanguage: HREFLANG[lang],
    sameAs: [SITE.facebook, SITE.instagram, SITE.tiktok, SITE.barRegisterUrl, SITE.googleMapsUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.services,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: url(lang, s.path) },
      })),
    },
  };
}

export function personSchema(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: lang === "en" ? "Angel Todorov Dimitrov" : "Ангел Тодоров Димитров",
    alternateName: ["Адвокат Ангел Димитров", "Angel Dimitrov"],
    jobTitle: lang === "en" ? "Lawyer" : "Адвокат",
    url: `${url(lang, "/")}#forMe`,
    image: absUrl("/images/law-office-2-1920.jpg"),
    telephone: SITE.phoneIntl,
    email: SITE.email,
    worksFor: { "@id": BUSINESS_ID },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Варненски свободен университет „Черноризец Храбър“" },
    memberOf: { "@type": "Organization", name: "Софийска адвокатска колегия" },
    sameAs: [SITE.barRegisterUrl],
  };
}

export function breadcrumbSchema(lang: Locale, crumbs: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: url(lang, c.href),
    })),
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  };
}

export function serviceSchema(
  lang: Locale,
  opts: { name: string; description: string; path: string; areaServed?: string[] },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: url(lang, opts.path),
    inLanguage: HREFLANG[lang],
    provider: { "@id": BUSINESS_ID },
    areaServed: (opts.areaServed ?? ["София"]).map((name) => ({ "@type": "Place", name })),
  };
}
