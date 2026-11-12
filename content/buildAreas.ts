import type { Locale } from "@/lib/i18n";
import type { Area } from "@/lib/types";
import { AREA_DATA, type AreaData } from "./areas-data";

// Общ шаблон за районните страници – кратък и еднакъв по тон на трите езика.
// Уникалното за всеки район (въведение, транспорт, квартали, услуги) е в areas-data.ts.
const TPL: Record<Locale, (a: AreaData) => Omit<Area, "slug" | "name" | "areas" | "services">> = {
  bg: (a) => ({
    title: `${a.h1.bg} – ${a.places.bg} | Адвокат Ангел Димитров`,
    description: `${a.h1.bg}: ${a.places.bg}. Наказателни, административни, граждански, семейни и трудови дела. Кантора в ж.к. Надежда 2. ☎ +359 88 399 6666`,
    h1: a.h1.bg,
    lead: a.lead.bg,
    sections: [
      {
        h2: "Кантората и как да стигнете",
        blocks: [
          a.intro.bg,
          `Адресът е ж.к. Надежда 2, ул. „Стражица“ 7, ет. 2, офис 10. ${a.reach.bg}`,
          "Обадете се предварително на **+359 88 399 6666**, за да уговорим удобен час.",
        ],
      },
      {
        h2: "С какво мога да помогна",
        blocks: [
          "Поемам наказателни, административни, граждански, семейни, наследствени, трудови и търговски дела – от първата консултация до решението на съда. Всички услуги са описани на страницата [Правни услуги](/uslugi).",
          "Хонорарът се договаря писмено предварително, съобразно Наредба № 1 за възнаграждения за адвокатска работа.",
        ],
      },
      {
        h2: "София и цялата страна",
        blocks: [
          "Работя с клиенти от всички квартали на София и от цялата страна. Ако не можете да дойдете в кантората, консултацията може да стане по телефона или онлайн, а документите – по имейл. Вижте и [всички райони](/rayoni).",
        ],
      },
    ],
    faq: [
      { q: "Къде се намира кантората?", a: "На адрес ж.к. Надежда 2, ул. „Стражица“ 7, ет. 2, офис 10, 1220 София. Можете да я видите на картата по-долу." },
      { q: `Работите ли само с клиенти ${a.from.bg}?`, a: "Не. Работя с клиенти от всички квартали на София и от цялата страна." },
      { q: "Може ли консултация по телефона или онлайн?", a: "Да. След кратък разговор ще Ви кажа какви документи са нужни и дали е необходима среща." },
      { q: "Как се определя хонорарът?", a: "Според сложността на казуса и съобразно Наредба № 1 за възнаграждения за адвокатска работа. Цената се договаря предварително." },
    ],
  }),
  en: (a) => ({
    title: `${a.h1.en} – ${a.places.en} | Lawyer Angel Dimitrov`,
    description: `${a.h1.en}: ${a.places.en}. Criminal, administrative, civil, family and employment cases. Office in Nadezhda 2, Sofia. ☎ +359 88 399 6666`,
    h1: a.h1.en,
    lead: a.lead.en,
    sections: [
      {
        h2: "The office and how to get there",
        blocks: [
          a.intro.en,
          `The address is 7 Strazhitsa St., floor 2, office 10, Nadezhda 2. ${a.reach.en}`,
          "Please call **+359 88 399 6666** in advance to arrange a convenient time.",
        ],
      },
      {
        h2: "How I can help",
        blocks: [
          "I handle criminal, administrative, civil, family, inheritance, employment and commercial cases – from the first consultation to the court's decision. All services are described on the [Legal services](/uslugi) page.",
          "The fee is agreed in writing in advance, in line with Ordinance No. 1 on lawyers' fees.",
        ],
      },
      {
        h2: "All of Sofia and the whole country",
        blocks: [
          "I work with clients from every district of Sofia and from all over Bulgaria. If you cannot come to the office, the consultation can take place by phone or online, and documents can be sent by email. See also [all areas](/rayoni).",
        ],
      },
    ],
    faq: [
      { q: "Where is the office?", a: "At 7 Strazhitsa St., floor 2, office 10, Nadezhda 2, 1220 Sofia. You can see it on the map below." },
      { q: `Do you work only with clients ${a.from.en}?`, a: "No. I work with clients from every district of Sofia and from all over Bulgaria." },
      { q: "Is a consultation by phone or online possible?", a: "Yes. After a short conversation I will tell you which documents are needed and whether a meeting is necessary." },
      { q: "How is the fee determined?", a: "According to the complexity of the case and in line with Ordinance No. 1 on lawyers' fees. The price is agreed in advance." },
    ],
  }),
  ru: (a) => ({
    title: `${a.h1.ru} – ${a.places.ru} | Адвокат Ангел Димитров`,
    description: `${a.h1.ru}: ${a.places.ru}. Уголовные, административные, гражданские, семейные и трудовые дела. Контора в ж.к. Надежда 2, София. ☎ +359 88 399 6666`,
    h1: a.h1.ru,
    lead: a.lead.ru,
    sections: [
      {
        h2: "Контора и как добраться",
        blocks: [
          a.intro.ru,
          `Адрес: ж.к. Надежда 2, ул. «Стражица» 7, эт. 2, офис 10. ${a.reach.ru}`,
          "Позвоните заранее по номеру **+359 88 399 6666**, чтобы договориться об удобном времени.",
        ],
      },
      {
        h2: "Чем я могу помочь",
        blocks: [
          "Я веду уголовные, административные, гражданские, семейные, наследственные, трудовые и торговые дела – от первой консультации до решения суда. Все услуги описаны на странице [Юридические услуги](/uslugi).",
          "Гонорар согласуется письменно заранее, в соответствии с Наредбой № 1 о вознаграждениях за адвокатскую работу.",
        ],
      },
      {
        h2: "Вся София и вся страна",
        blocks: [
          "Я работаю с клиентами из всех районов Софии и со всей Болгарии. Если вы не можете прийти в контору, консультация возможна по телефону или онлайн, а документы можно отправить по электронной почте. Смотрите также [все районы](/rayoni).",
        ],
      },
    ],
    faq: [
      { q: "Где находится контора?", a: "По адресу ж.к. Надежда 2, ул. «Стражица» 7, эт. 2, офис 10, 1220 София. Её можно увидеть на карте ниже." },
      { q: `Вы работаете только с клиентами ${a.from.ru}?`, a: "Нет. Я работаю с клиентами из всех районов Софии и со всей Болгарии." },
      { q: "Возможна ли консультация по телефону или онлайн?", a: "Да. После короткого разговора я скажу, какие документы нужны и требуется ли встреча." },
      { q: "Как определяется гонорар?", a: "В зависимости от сложности дела и в соответствии с Наредбой № 1 о вознаграждениях за адвокатскую работу. Цена согласуется заранее." },
    ],
  }),
};

export const buildAreas = (lang: Locale): Area[] =>
  AREA_DATA.map((a) => ({
    slug: a.slug,
    name: a.name[lang],
    areas: [],
    services: a.services,
    ...TPL[lang](a),
  }));
