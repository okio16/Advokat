// Блокове на съдържанието. Низовете са параграфи и поддържат [текст](/линк) и **удебеляване**.
export type Block =
  | string
  | { h3: string }
  | { ul: string[] }
  | { ol: string[] }
  | { note: string }
  | { table: { head: string[]; rows: string[][] } };

export interface Section {
  h2: string;
  blocks: Block[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface ContentPage {
  slug: string;
  /** Кратко име за карти, линкове и breadcrumbs */
  name: string;
  /** <title> */
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: Section[];
  faq: Faq[];
  /** slug-ове на райони за блока „Обслужвани райони“ */
  areas: string[];
}

export interface ServicePage extends ContentPage {
  /** Кратко описание за картата на услугата */
  excerpt: string;
}

export interface Category extends ServicePage {
  icon: string;
  children: ServicePage[];
}

export interface Area extends ContentPage {
  /** Пълни пътища до услугите, свързани с района */
  services: string[];
}

/** Карта „Правни услуги“ на началната страница – по документа на клиента. */
export interface Group {
  title: string;
  icon: string;
  /** Страницата, към която води заглавието на картата */
  href: string;
  text: string;
  /** Бутоните в картата */
  buttons: { label: string; href: string }[];
  /** Всички страници от групата – за /uslugi */
  pages: string[];
}
