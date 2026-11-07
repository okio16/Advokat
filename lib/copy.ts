import type { Locale } from "./i18n";

// Текстове на новия дизайн: началната страница, етикетите на секциите и местата за допълване.
const N = "/uslugi/nakazatelno-pravo/merki-za-protsesualna-prinuda";
const F = "/uslugi/administrativno-pravo/obzhalvane-na-nakazatelni-postanovleniya";
const D = "/uslugi/semeyno-pravo/razvod";
const U = "/uslugi/trudovo-pravo/nezakonno-uvolnenie";

export const COPY = {
  bg: {
    brand: "Адвокат Ангел Димитров",
    h1Name: "Адвокат Ангел Димитров",
    h1Rest: "Наказателни, административни, административно­наказателни и граждански дела в София",
    heroLead: "Кантора в ж.к. Надежда 2. Поемам дела и в цялата страна.",
    situationsLabel: "Започнете оттук, ако:",
    situations: [
      { label: "близък човек е задържан", href: N },
      { label: "сте получили фиш или наказателно постановление", href: F },
      { label: "предстои развод или спор за децата", href: D },
      { label: "сте уволнени", href: U },
    ],
    labels: { about: "За мен", areas: "Правни области", contact: "Контакти", faq: "Често задавани въпроси", map: "На картата" },
    about: [
      "Завърших „Право“ във Варненския свободен университет през 2013 г. Юридическа правоспособност имам от 2014 г.",
      "От 2018 до 2024 г. бях юрисконсулт в Комисията за защита на потребителите и я представлявах пред съда. През 2024 г. открих собствена кантора. Вписан съм в Софийската адвокатска колегия под № 1100815010.",
      "Работя по административни, административнонаказателни, наказателни и граждански дела в София и в цялата страна.",
    ],
    contactIntro: "Обадете се или опишете накратко какво се е случило. Ще Ви се обадя, за да уточним подробностите.",
    areasIntro: "Изберете областта, в която попада случаят Ви. Ако не сте сигурни, обадете се.",
    hours: "Работно време: пон.–пет. 10:00–19:00 ч., съб. 11:00–15:00 ч., нед. – почивен ден",
    footerText: "Адвокатска кантора в ж.к. Надежда 2, София.",
    emailOptional: "Имейл (по желание)",
    seeOnMap: "Вижте кантората в Google Maps",
    areasSentence: "Работя с клиенти от целия град, включително от",
    allServices: "Всички правни услуги",
  },
  en: {
    brand: "Lawyer Angel Dimitrov",
    h1Name: "Lawyer Angel Dimitrov",
    h1Rest: "Criminal, administrative, family and civil cases in Sofia",
    heroLead: "Office in Nadezhda 2, Sofia. I also take cases throughout Bulgaria.",
    situationsLabel: "Start here if:",
    situations: [
      { label: "someone close to you has been detained", href: N },
      { label: "you have received a fine or a penalty decree", href: F },
      { label: "you are facing divorce or a dispute over children", href: D },
      { label: "you have been dismissed", href: U },
    ],
    labels: { about: "About me", areas: "Areas of law", contact: "Contact", faq: "Frequently asked questions", map: "On the map" },
    about: [
      "I graduated in Law from Varna Free University in 2013 and was admitted to legal practice in 2014.",
      "From 2018 to 2024 I was a legal adviser at the Commission for Consumer Protection and represented it in court. In 2024 I opened my own law office. I am registered with the Sofia Bar Association under No. 1100815010.",
      "I handle administrative, administrative penalty, criminal and civil cases in Sofia and throughout Bulgaria.",
    ],
    contactIntro: "Call, or briefly describe what happened. I will call you back to go through the details.",
    areasIntro: "Choose the area your case falls into. If you are not sure, call.",
    hours: "Office hours: Mon–Fri 10:00–19:00, Sat 11:00–15:00, Sun closed",
    footerText: "Law office in Nadezhda 2, Sofia.",
    emailOptional: "Email (optional)",
    seeOnMap: "See the office on Google Maps",
    areasSentence: "I work with clients from all over the city, including",
    allServices: "All legal services",
  },
  ru: {
    brand: "Адвокат Ангел Димитров",
    h1Name: "Адвокат Ангел Димитров",
    h1Rest: "Уголовные, административные, семейные и гражданские дела в Софии",
    heroLead: "Контора в ж.к. Надежда 2, София. Веду дела и по всей Болгарии.",
    situationsLabel: "Начните отсюда, если:",
    situations: [
      { label: "задержан близкий человек", href: N },
      { label: "вы получили штраф или наказательное постановление", href: F },
      { label: "предстоит развод или спор о детях", href: D },
      { label: "вас уволили", href: U },
    ],
    labels: { about: "Обо мне", areas: "Области права", contact: "Контакты", faq: "Часто задаваемые вопросы", map: "На карте" },
    about: [
      "В 2013 году я окончил юридический факультет Варненского свободного университета, а в 2014 году получил право заниматься юридической практикой.",
      "С 2018 по 2024 год работал юрисконсультом в Комиссии по защите прав потребителей и представлял её в суде. В 2024 году открыл собственную контору. Внесён в Софийскую адвокатскую коллегию под № 1100815010.",
      "Веду административные, административно-наказательные, уголовные и гражданские дела в Софии и по всей Болгарии.",
    ],
    contactIntro: "Позвоните или кратко опишите, что произошло. Я перезвоню, чтобы уточнить детали.",
    areasIntro: "Выберите область, к которой относится ваше дело. Если не уверены – позвоните.",
    hours: "Часы работы: пн–пт 10:00–19:00, сб 11:00–15:00, вс – выходной",
    footerText: "Адвокатская контора в ж.к. Надежда 2, София.",
    emailOptional: "Электронная почта (по желанию)",
    seeOnMap: "Контора в Google Maps",
    areasSentence: "Работаю с клиентами со всего города, в том числе из районов",
    allServices: "Все юридические услуги",
  },
} satisfies Record<Locale, unknown>;
