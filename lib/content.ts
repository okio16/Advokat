import type { Area, Category, Group, ServicePage } from "./types";
import type { Locale } from "./i18n";
import * as bg from "@/content/bg";
import * as en from "@/content/en";
import * as ru from "@/content/ru";

interface LocaleContent {
  CATEGORIES: Category[];
  AREAS: Area[];
  GROUPS: Group[];
}

const DATA: Record<Locale, LocaleContent> = { bg, en, ru };

export const getCategories = (lang: Locale) => DATA[lang].CATEGORIES;
export const getAreas = (lang: Locale) => DATA[lang].AREAS;
export const getGroups = (lang: Locale) => DATA[lang].GROUPS;

// Пътищата са без езиков префикс – той се добавя при рендиране с lp().
export const categoryPath = (c: Category) => `/uslugi/${c.slug}`;
export const servicePath = (c: Category, s: ServicePage) => `/uslugi/${c.slug}/${s.slug}`;
export const areaPath = (a: Area) => `/rayoni/${a.slug}`;

export const getCategory = (lang: Locale, slug: string) => getCategories(lang).find((c) => c.slug === slug);
export const getArea = (lang: Locale, slug: string) => getAreas(lang).find((a) => a.slug === slug);

export function getService(lang: Locale, catSlug: string, slug: string) {
  const category = getCategory(lang, catSlug);
  const service = category?.children.find((s) => s.slug === slug);
  return category && service ? { category, service } : undefined;
}

/** Категория или услуга по пълен път – за линкове от районите и /uslugi. */
export function pageByPath(lang: Locale, path: string): { name: string; excerpt: string; icon: string } | undefined {
  for (const c of getCategories(lang)) {
    if (categoryPath(c) === path) return { name: c.name, excerpt: c.excerpt, icon: c.icon };
    for (const s of c.children)
      if (servicePath(c, s) === path) return { name: s.name, excerpt: s.excerpt, icon: c.icon };
  }
  return undefined;
}

export const areasFor = (lang: Locale, slugs: string[]) =>
  slugs.map((s) => getArea(lang, s)).filter((a): a is Area => Boolean(a));
