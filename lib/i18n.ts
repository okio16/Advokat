export const LOCALES = ["bg", "en", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "bg";

export const isLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v);

/** Път с езиков префикс. Българският е без префикс: /uslugi, /en/uslugi, /ru/uslugi. */
export const lp = (lang: Locale, path: string) =>
  lang === DEFAULT_LOCALE ? path : `/${lang}${path === "/" ? "" : path}`;

/** Маха езиковия префикс от пътя. Включва /bg, защото след rewrite в middleware usePathname връща вътрешния път. */
export const stripLocale = (pathname: string) => {
  const m = pathname.match(/^\/(bg|en|ru)(\/.*)?$/);
  return m ? m[2] || "/" : pathname;
};

export const HREFLANG: Record<Locale, string> = { bg: "bg-BG", en: "en", ru: "ru" };
export const OG_LOCALE: Record<Locale, string> = { bg: "bg_BG", en: "en_US", ru: "ru_RU" };

/** canonical + hreflang за една и съща страница на трите езика. */
export const alternates = (lang: Locale, path: string) => ({
  canonical: lp(lang, path),
  languages: {
    ...Object.fromEntries(LOCALES.map((l) => [HREFLANG[l], lp(l, path)])),
    "x-default": lp(DEFAULT_LOCALE, path),
  },
});

const bg = {
  langName: "Български",
  siteName: "Адвокат Ангел Димитров София",
  address: "ж.к. Надежда 2, ул. „Стражица“ 7, ет. 2, офис 10, 1220 София",
  nav: { about: "За мен", services: "Услуги", contact: "Контакти" },
  menuOpen: "Отвори менюто",
  menuClose: "Затвори менюто",
  language: "Език",
  home: "Начало",
  services: "Услуги",
  areas: "Райони",
  contacts: "Контакти",
  learnMore: "Научете повече",
  sendInquiry: "Изпратете запитване",
  call: "Обадете се",
  breadcrumbs: "Път до страницата",
  faq: "Често задавани въпроси",
  hero: {
    h1: "Адвокат в София",
    subtitle: "Наказателни, административни, граждански и семейни дела. Кантора в ж.к. Надежда 2.",
    cta: "Изпратете запитване",
    slides: [
      "Адвокат Ангел Димитров в адвокатската кантора в София",
      "Адвокат Ангел Димитров пред съда в София",
      "Съдебната палата в София",
      "Адвокат Ангел Димитров пред офиса в ж.к. Надежда 2",
      "Адвокат Ангел Димитров посреща клиент в кантората",
    ],
    slide: "Снимка",
  },
  homeMeta: {
    title:
      "Адвокат в София – Ангел Димитров | Наказателни, административни, граждански, семейни и трудови дела",
    description:
      "Адвокат в София – Ангел Димитров. Защита по наказателни дела, обжалване на глоби и актове, развод, наследство, трудови и граждански спорове. Кантора в ж.к. Надежда 2. ☎ 088 399 6666",
  },
  about: {
    heading: "За мен",
    cardTitle: "Адвокат Ангел Димитров София",
    text: [
      "Адвокат Ангел Тодоров Димитров е с опит в административното, административнонаказателното, наказателното и гражданското право. Завършил е през 2013 г. специалност „Право“ във Варненския свободен университет и е придобил юридическа правоспособност през 2014 г.",
      "Работил е като юрисконсулт в Комисията за защита на потребителите в периода от 2018 г. до 2024 г. и е осъществявал процесуално представителство на Комисията пред съдебните органи. Открива собствена кантора през 2024 г. и е вписан под номер 1100815010 в Регистъра на адвокатите към Софийската адвокатска колегия. Поема дела в София и в цялата страна.",
    ],
  },
  servicesSection: {
    heading: "Правни услуги – адвокат по наказателни дела и гражданско право в София",
  },
  areasLine: "Кантората обслужва клиенти от всички райони на София, сред които",
  areasEnd: "както и на територията на цяла България.",
  contactSection: {
    heading: "Свържете се с мен",
    intro:
      "Опишете накратко какво се е случило и оставете телефон. Ще се свържа с Вас, за да уточним подробностите. Ако е спешно – обадете се.",
  },
  form: {
    name: "Име и фамилия",
    email: "Имейл",
    phone: "Телефон",
    message: "Накратко за случая",
    messageHint: "Какво се е случило, кога, има ли срок или документ, който сте получили.",
    submit: "Изпратете запитването",
    sending: "Изпращане...",
    ok: "Запитването е изпратено. Ще се свържа с Вас по телефона или по имейл.",
    err: "Грешка при изпращане. Опитайте отново или се обадете по телефона.",
    net: "Мрежова грешка. Опитайте отново.",
    privacy: "Данните от формата се използват само за отговор на запитването Ви.",
    fee: "Хонорарът зависи от сложността на делото и се договаря предварително, съобразно Наредба № 1 от 9 юли 2004 г. за възнаграждения за адвокатска работа.",
  },
  cta: {
    title: "Нуждаете се от адвокат в София?",
    text: "Обадете се или опишете случая в няколко изречения. Ще Ви кажа какви са възможностите и какво следва.",
    online: "Пишете ми",
  },
  footer: {
    text: "Професионална правна защита по административно, наказателно, гражданско, семейно, трудово и търговско право.",
    pages: "Страници",
    social: "Социални мрежи",
    contact: "Контакти",
    rights: "Ангел Димитров — Всички права запазени.",
    onMap: "на картата",
    bar: "Вписан в Софийската адвокатска колегия под № 1100815010",
  },
  service: {
    inArea: (name: string) => `Услуги в областта „${name}“`,
    areasServed: "Обслужвани райони",
    consult: "Консултация с адвокат",
    office: "Кантора",
    overview: "Общ преглед",
    all: "Всички правни услуги →",
  },
  servicesPage: {
    title:
      "Правни услуги – адвокат в София по наказателни, административни, граждански, семейни и трудови дела | Адвокат Ангел Димитров",
    description:
      "Всички правни услуги на адвокат Ангел Димитров в София: наказателна защита, обжалване на глоби и актове, договори и вземания, развод, наследство, трудови спорове, имоти и фирми.",
    h1: "Правни услуги – адвокат в София",
    lead: "Защита и представителство по административни, наказателни, семейни, наследствени, потребителски, трудови, договорни и търговски дела.",
    cta: "Не знаете към коя област спада казусът Ви?",
  },
  areasPage: {
    title:
      "Райони, които обслужвам – адвокат в София за Надежда, Център, Люлин, Обеля, Сердика, Младост | Адвокат Ангел Димитров",
    description:
      "Адвокат Ангел Димитров обслужва клиенти от цяла София – Надежда, Център, Люлин, Обеля и Връбница, Сердика, Красна поляна, Младост. Кантора в ж.к. Надежда 2.",
    h1: "Райони, които обслужвам – адвокат в София",
    lead: "Кантората е в ж.к. Надежда 2, но работя с клиенти от всички квартали на София и от цялата страна.",
    bulgaria: "Освен в София поемам дела и на територията на цяла България – при нужда пътувам до съдилищата в страната, а голяма част от работата може да се свърши дистанционно.",
    lawyerFor: (name: string) => `Адвокат за ${name}`,
  },
  areaPage: {
    servicesFor: "Правни услуги за клиенти от района",
    map: "Кантората на картата",
    directions: "Упътване в Google Maps",
    others: "Други райони",
    cta: "Нуждаете се от адвокат?",
    howToReach: (name: string) => `как да стигнете от ${name}`,
  },
  contactPage: {
    title: "Контакти – Адвокат Ангел Димитров, адвокат в София, ж.к. Надежда 2 | ☎ 088 399 6666",
    description:
      "Свържете се с адвокат Ангел Димитров: ж.к. Надежда 2, ул. „Стражица“ 7, ет. 2, офис 10, 1220 София. Телефон 088 399 6666, имейл adv.angeldimitrov@abv.bg.",
    h1: "Контакти – Адвокат Ангел Димитров, София",
    lead: "Най-бързо е по телефона. Можете да пишете и по имейл или през формата по-долу. Срещите в кантората са с уговорен час.",
    phone: "Телефон",
    email: "Имейл",
    address: "Адрес",
    find: "Как да намерите кантората",
    findText:
      "Кантората е на втория етаж, офис 10, на ул. „Стражица“ 7 в ж.к. Надежда 2. Препоръчително е да уговорите час предварително по телефона.",
    mainServices: "Основни услуги",
    areas: "Райони, които обслужвам",
  },
  notFound: {
    title: "Страницата не е намерена",
    text: "Възможно е адресът да е променен. Разгледайте услугите или се обадете.",
  },
};

export type Dict = typeof bg;

const en: Dict = {
  langName: "English",
  siteName: "Lawyer Angel Dimitrov Sofia",
  address: "Nadezhda 2 district, 7 Strazhitsa St., floor 2, office 10, 1220 Sofia, Bulgaria",
  nav: { about: "About", services: "Services", contact: "Contact" },
  menuOpen: "Open menu",
  menuClose: "Close menu",
  language: "Language",
  home: "Home",
  services: "Services",
  areas: "Areas",
  contacts: "Contact",
  learnMore: "Learn more",
  sendInquiry: "Send an inquiry",
  call: "Call",
  breadcrumbs: "You are here",
  faq: "Frequently asked questions",
  hero: {
    h1: "Lawyer in Sofia",
    subtitle: "Criminal, administrative, civil and family cases. Office in Nadezhda 2, Sofia.",
    cta: "Send an inquiry",
    slides: [
      "Lawyer Angel Dimitrov in his law office in Sofia",
      "Lawyer Angel Dimitrov in front of the court in Sofia",
      "The Palace of Justice in Sofia",
      "Lawyer Angel Dimitrov in front of the office in Nadezhda 2",
      "Lawyer Angel Dimitrov meeting a client in the office",
    ],
    slide: "Photo",
  },
  homeMeta: {
    title:
      "Lawyer in Sofia – Angel Dimitrov | Criminal, administrative, civil, family and employment cases",
    description:
      "Lawyer in Sofia, Bulgaria – Angel Dimitrov. Criminal defence, appeals against fines and administrative acts, divorce, inheritance, employment and civil disputes. ☎ +359 88 399 6666",
  },
  about: {
    heading: "About me",
    cardTitle: "Lawyer Angel Dimitrov Sofia",
    text: [
      "Lawyer Angel Todorov Dimitrov has experience in administrative law, administrative penalty law, criminal law and civil law. He graduated in Law from Varna Free University in 2013 and was admitted to legal practice in 2014.",
      "From 2018 to 2024 he worked as a legal adviser at the Bulgarian Commission for Consumer Protection, representing the Commission before the courts. In 2024 he opened his own law office and is entered under No. 1100815010 in the Register of Lawyers of the Sofia Bar Association. He takes cases in Sofia and throughout Bulgaria.",
    ],
  },
  servicesSection: {
    heading: "Legal services – criminal defence and civil law lawyer in Sofia",
  },
  areasLine: "The office serves clients from every district of Sofia, including",
  areasEnd: "as well as throughout Bulgaria.",
  contactSection: {
    heading: "Get in touch",
    intro:
      "Briefly describe what happened and leave a phone number. I will contact you to go through the details. If it is urgent, please call.",
  },
  form: {
    name: "Full name",
    email: "Email",
    phone: "Phone",
    message: "Your case in brief",
    messageHint: "What happened, when, and whether there is a deadline or a document you have received.",
    submit: "Send the inquiry",
    sending: "Sending...",
    ok: "Your inquiry has been sent. I will contact you by phone or email.",
    err: "Sending failed. Please try again or call.",
    net: "Network error. Please try again.",
    privacy: "The details you enter are used only to reply to your inquiry.",
    fee: "The fee depends on the complexity of the case and is agreed in advance, in line with Ordinance No. 1 of 9 July 2004 on lawyers' fees.",
  },
  cta: {
    title: "Need a lawyer in Sofia?",
    text: "Call or describe the case in a few sentences. I will tell you what your options are and what comes next.",
    online: "Write to me",
  },
  footer: {
    text: "Professional legal defence in administrative, criminal, civil, family, employment and commercial law.",
    pages: "Pages",
    social: "Social media",
    contact: "Contact",
    rights: "Angel Dimitrov — All rights reserved.",
    onMap: "on the map",
    bar: "Registered with the Sofia Bar Association under No. 1100815010",
  },
  service: {
    inArea: (name: string) => `Services in “${name}”`,
    areasServed: "Areas served",
    consult: "Consultation with a lawyer",
    office: "Office",
    overview: "Overview",
    all: "All legal services →",
  },
  servicesPage: {
    title:
      "Legal services – lawyer in Sofia for criminal, administrative, civil, family and employment cases | Lawyer Angel Dimitrov",
    description:
      "All legal services of lawyer Angel Dimitrov in Sofia: criminal defence, appeals against fines and acts, contracts and debt recovery, divorce, inheritance, employment, property and companies.",
    h1: "Legal services – lawyer in Sofia",
    lead: "Defence and representation in administrative, criminal, family, inheritance, consumer, employment, contract and commercial matters.",
    cta: "Not sure which area your case falls into?",
  },
  areasPage: {
    title: "Areas served – lawyer in Sofia for Nadezhda, City Centre, Lyulin, Obelya, Serdika, Mladost | Lawyer Angel Dimitrov",
    description:
      "Lawyer Angel Dimitrov serves clients from all over Sofia – Nadezhda, City Centre, Lyulin, Obelya and Vrabnitsa, Serdika, Krasna Polyana, Mladost. Office in Nadezhda 2.",
    h1: "Areas I serve – lawyer in Sofia",
    lead: "The office is in Nadezhda 2, but I work with clients from every district of Sofia and the whole country.",
    bulgaria: "Besides Sofia, I take cases throughout Bulgaria – I travel to courts across the country when needed, and much of the work can be done remotely.",
    lawyerFor: (name: string) => `Lawyer for ${name}`,
  },
  areaPage: {
    servicesFor: "Legal services for clients from the area",
    map: "The office on the map",
    directions: "Directions in Google Maps",
    others: "Other areas",
    cta: "Need a lawyer?",
    howToReach: (name: string) => `how to get there from ${name}`,
  },
  contactPage: {
    title: "Contact – Lawyer Angel Dimitrov, lawyer in Sofia, Nadezhda 2 | ☎ +359 88 399 6666",
    description:
      "Contact lawyer Angel Dimitrov: 7 Strazhitsa St., floor 2, office 10, Nadezhda 2, 1220 Sofia. Phone +359 88 399 6666, email adv.angeldimitrov@abv.bg.",
    h1: "Contact – Lawyer Angel Dimitrov, Sofia",
    lead: "Calling is the fastest way. You can also write by email or through the form below. Office meetings are by appointment.",
    phone: "Phone",
    email: "Email",
    address: "Address",
    find: "How to find the office",
    findText:
      "The office is on the second floor, office 10, at 7 Strazhitsa St. in the Nadezhda 2 district. Please book an appointment by phone in advance.",
    mainServices: "Main services",
    areas: "Areas I serve",
  },
  notFound: {
    title: "Page not found",
    text: "The address may have changed. Browse the services or call.",
  },
};

const ru: Dict = {
  langName: "Русский",
  siteName: "Адвокат Ангел Димитров, София",
  address: "ж.к. Надежда 2, ул. «Стражица» 7, эт. 2, офис 10, 1220 София, Болгария",
  nav: { about: "Обо мне", services: "Услуги", contact: "Контакты" },
  menuOpen: "Открыть меню",
  menuClose: "Закрыть меню",
  language: "Язык",
  home: "Главная",
  services: "Услуги",
  areas: "Районы",
  contacts: "Контакты",
  learnMore: "Подробнее",
  sendInquiry: "Отправить запрос",
  call: "Позвонить",
  breadcrumbs: "Путь к странице",
  faq: "Часто задаваемые вопросы",
  hero: {
    h1: "Адвокат в Софии",
    subtitle: "Уголовные, административные, гражданские и семейные дела. Контора в ж.к. Надежда 2, София.",
    cta: "Отправить запрос",
    slides: [
      "Адвокат Ангел Димитров в адвокатской конторе в Софии",
      "Адвокат Ангел Димитров у здания суда в Софии",
      "Дворец правосудия в Софии",
      "Адвокат Ангел Димитров у офиса в ж.к. Надежда 2",
      "Адвокат Ангел Димитров встречает клиента в конторе",
    ],
    slide: "Фото",
  },
  homeMeta: {
    title:
      "Адвокат в Софии – Ангел Димитров | Уголовные, административные, гражданские, семейные и трудовые дела",
    description:
      "Адвокат в Софии, Болгария – Ангел Димитров. Уголовная защита, обжалование штрафов и административных актов, развод, наследство, трудовые и гражданские споры. ☎ +359 88 399 6666",
  },
  about: {
    heading: "Обо мне",
    cardTitle: "Адвокат Ангел Димитров, София",
    text: [
      "Адвокат Ангел Тодоров Димитров имеет опыт в административном, административно-наказательном, уголовном и гражданском праве. В 2013 году окончил юридический факультет Варненского свободного университета, а в 2014 году получил право заниматься юридической практикой.",
      "С 2018 по 2024 год работал юрисконсультом в Комиссии по защите прав потребителей Болгарии и представлял Комиссию в судах. В 2024 году открыл собственную адвокатскую контору и внесён под № 1100815010 в Реестр адвокатов при Софийской адвокатской коллегии. Ведёт дела в Софии и по всей Болгарии.",
    ],
  },
  servicesSection: {
    heading: "Юридические услуги – адвокат по уголовным делам и гражданскому праву в Софии",
  },
  areasLine: "Контора обслуживает клиентов из всех районов Софии, в том числе",
  areasEnd: "а также по всей Болгарии.",
  contactSection: {
    heading: "Свяжитесь со мной",
    intro:
      "Кратко опишите, что произошло, и оставьте телефон. Я свяжусь с вами, чтобы уточнить детали. Если дело срочное – позвоните.",
  },
  form: {
    name: "Имя и фамилия",
    email: "Электронная почта",
    phone: "Телефон",
    message: "Коротко о деле",
    messageHint: "Что произошло, когда, есть ли срок или документ, который вы получили.",
    submit: "Отправить запрос",
    sending: "Отправка...",
    ok: "Запрос отправлен. Я свяжусь с вами по телефону или по электронной почте.",
    err: "Ошибка при отправке. Попробуйте ещё раз или позвоните.",
    net: "Ошибка сети. Попробуйте ещё раз.",
    privacy: "Данные из формы используются только для ответа на ваш запрос.",
    fee: "Гонорар зависит от сложности дела и согласуется заранее, в соответствии с Наредбой № 1 от 9 июля 2004 г. о вознаграждениях за адвокатскую работу.",
  },
  cta: {
    title: "Нужен адвокат в Софии?",
    text: "Позвоните или опишите дело в нескольких предложениях. Я скажу, какие есть варианты и что делать дальше.",
    online: "Написать",
  },
  footer: {
    text: "Профессиональная правовая защита в области административного, уголовного, гражданского, семейного, трудового и торгового права.",
    pages: "Страницы",
    social: "Социальные сети",
    contact: "Контакты",
    rights: "Ангел Димитров — Все права защищены.",
    onMap: "на карте",
    bar: "Внесён в Софийскую адвокатскую коллегию под № 1100815010",
  },
  service: {
    inArea: (name: string) => `Услуги в области «${name}»`,
    areasServed: "Районы обслуживания",
    consult: "Консультация адвоката",
    office: "Контора",
    overview: "Обзор",
    all: "Все юридические услуги →",
  },
  servicesPage: {
    title:
      "Юридические услуги – адвокат в Софии по уголовным, административным, гражданским, семейным и трудовым делам | Адвокат Ангел Димитров",
    description:
      "Все юридические услуги адвоката Ангела Димитрова в Софии: уголовная защита, обжалование штрафов и актов, договоры и взыскание долгов, развод, наследство, трудовые споры, недвижимость и фирмы.",
    h1: "Юридические услуги – адвокат в Софии",
    lead: "Защита и представительство по административным, уголовным, семейным, наследственным, потребительским, трудовым, договорным и торговым делам.",
    cta: "Не знаете, к какой области относится ваше дело?",
  },
  areasPage: {
    title: "Районы обслуживания – адвокат в Софии: Надежда, Центр, Люлин, Обеля, Сердика, Младост | Адвокат Ангел Димитров",
    description:
      "Адвокат Ангел Димитров обслуживает клиентов со всей Софии – Надежда, Центр, Люлин, Обеля и Врыбница, Сердика, Красна поляна, Младост. Контора в ж.к. Надежда 2.",
    h1: "Районы обслуживания – адвокат в Софии",
    lead: "Контора находится в ж.к. Надежда 2, но я работаю с клиентами из всех районов Софии и со всей страны.",
    bulgaria: "Помимо Софии я веду дела по всей Болгарии – при необходимости выезжаю в суды страны, а большую часть работы можно выполнить дистанционно.",
    lawyerFor: (name: string) => `Адвокат: ${name}`,
  },
  areaPage: {
    servicesFor: "Юридические услуги для клиентов из района",
    map: "Контора на карте",
    directions: "Маршрут в Google Maps",
    others: "Другие районы",
    cta: "Нужен адвокат?",
    howToReach: (name: string) => `как добраться из района ${name}`,
  },
  contactPage: {
    title: "Контакты – адвокат Ангел Димитров, адвокат в Софии, ж.к. Надежда 2 | ☎ +359 88 399 6666",
    description:
      "Свяжитесь с адвокатом Ангелом Димитровым: ж.к. Надежда 2, ул. «Стражица» 7, эт. 2, офис 10, 1220 София. Телефон +359 88 399 6666, e-mail adv.angeldimitrov@abv.bg.",
    h1: "Контакты – адвокат Ангел Димитров, София",
    lead: "Быстрее всего – по телефону. Можно написать по электронной почте или через форму ниже. Встречи в конторе – по предварительной договорённости.",
    phone: "Телефон",
    email: "Электронная почта",
    address: "Адрес",
    find: "Как найти контору",
    findText:
      "Контора находится на втором этаже, офис 10, ул. «Стражица» 7, ж.к. Надежда 2. Рекомендуем заранее договориться о встрече по телефону.",
    mainServices: "Основные услуги",
    areas: "Районы обслуживания",
  },
  notFound: {
    title: "Страница не найдена",
    text: "Возможно, адрес изменился. Посмотрите услуги или позвоните.",
  },
};

const DICTS: Record<Locale, Dict> = { bg, en, ru };
export const getDict = (lang: Locale) => DICTS[lang];
