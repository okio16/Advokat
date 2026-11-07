import type { Group } from "@/lib/types";

// Шестте карти „Правни услуги“ – структурата е по документа на клиента.
export const GROUPS: Group[] = [
  {
    title: "Административно и административнонаказателно право",
    icon: "fa fa-landmark",
    href: "/uslugi/administrativno-pravo",
    text: "Ако сте получили наказателно постановление, електронен фиш или заповед от държавен или общински орган, можете да ги оспорите. Срокът е кратък, обикновено 14 дни.",
    buttons: [
      { label: "Административно право", href: "/uslugi/administrativno-pravo/obzhalvane-na-administrativni-aktove" },
      { label: "Административнонаказателно право", href: "/uslugi/administrativno-pravo/obzhalvane-na-nakazatelni-postanovleniya" },
    ],
    pages: [
      "/uslugi/administrativno-pravo/obzhalvane-na-administrativni-aktove",
      "/uslugi/administrativno-pravo/obzhalvane-na-nakazatelni-postanovleniya",
      "/uslugi/administrativno-pravo/danachni-sporove-i-revizii",
      "/uslugi/administrativno-pravo/dela-po-zodov",
    ],
  },
  {
    title: "Наказателно право",
    icon: "fa fa-balance-scale",
    href: "/uslugi/nakazatelno-pravo",
    text: "Ако Вие или близък човек сте задържани, привлечени като обвиняем или пострадали от престъпление. Потърсете адвокат, преди да давате обяснения или да подписвате документи.",
    buttons: [
      { label: "Мерки за процесуална принуда", href: "/uslugi/nakazatelno-pravo/merki-za-protsesualna-prinuda" },
      { label: "Защита на обвиняеми и подсъдими", href: "/uslugi/nakazatelno-pravo" },
    ],
    pages: [
      "/uslugi/nakazatelno-pravo/merki-za-protsesualna-prinuda",
      "/uslugi/nakazatelno-pravo/narkotitsi",
      "/uslugi/nakazatelno-pravo/krazhba-i-grabezh",
      "/uslugi/nakazatelno-pravo/shofirane-v-netrezvo-sastoyanie",
      "/uslugi/nakazatelno-pravo/advokat-na-postradal",
      "/uslugi/nakazatelno-pravo/reabilitatsiya",
    ],
  },
  {
    title: "Семейно и наследствено право",
    icon: "fa fa-users",
    href: "/uslugi/semeyno-pravo",
    text: "При развод, спор за издръжка или за децата и при защита от домашно насилие. Също когато трябва да приемете, разделите или откажете наследство.",
    buttons: [
      { label: "Семейно право", href: "/uslugi/semeyno-pravo" },
      { label: "Наследствено право", href: "/uslugi/nasledstveno-pravo" },
    ],
    pages: [
      "/uslugi/semeyno-pravo/razvod",
      "/uslugi/semeyno-pravo/izdrazhka-i-roditelski-prava",
      "/uslugi/semeyno-pravo/domashno-nasilie",
      "/uslugi/nasledstveno-pravo/zaveshtanie",
      "/uslugi/nasledstveno-pravo/otkaz-ot-nasledstvo",
      "/uslugi/nasledstveno-pravo/delba",
    ],
  },
  {
    title: "Потребителско право",
    icon: "fa fa-file-contract",
    href: "/uslugi/potrebitelsko-pravo",
    text: "Ако търговец отказва да поправи или да смени стоката, или ако по бърз кредит Ви търсят суми, които не разбирате.",
    buttons: [
      { label: "Защита на потребители и търговци", href: "/uslugi/potrebitelsko-pravo" },
      { label: "Бързи кредити и ЗПК", href: "/uslugi/potrebitelsko-pravo/kreditni-dogovori-zpk" },
    ],
    pages: ["/uslugi/potrebitelsko-pravo/kreditni-dogovori-zpk"],
  },
  {
    title: "Трудово право",
    icon: "fa fa-briefcase",
    href: "/uslugi/trudovo-pravo",
    text: "Ако сте уволнени, не Ви плащат заплатата или сте пострадали на работа. Уволнението се оспорва в двумесечен срок.",
    buttons: [
      { label: "Незаконно уволнение", href: "/uslugi/trudovo-pravo/nezakonno-uvolnenie" },
      { label: "Трудова злополука", href: "/uslugi/trudovo-pravo/neizplateni-zaplati-i-trudova-zlopoluka" },
    ],
    pages: ["/uslugi/trudovo-pravo/nezakonno-uvolnenie", "/uslugi/trudovo-pravo/neizplateni-zaplati-i-trudova-zlopoluka"],
  },
  {
    title: "Договорно и търговско право",
    icon: "fa fa-building",
    href: "/uslugi/grazhdansko-pravo",
    text: "Когато подписвате договор, някой не Ви плаща, купувате или наемате имот, искате обезщетение след ПТП или регистрирате фирма.",
    buttons: [
      { label: "Договорно право", href: "/uslugi/grazhdansko-pravo" },
      { label: "Търговско право", href: "/uslugi/targovsko-pravo" },
    ],
    pages: [
      "/uslugi/grazhdansko-pravo/dogovorni-sporove",
      "/uslugi/grazhdansko-pravo/sabirane-na-vzemaniya",
      "/uslugi/grazhdansko-pravo/obezshteteniya-pri-ptp",
      "/uslugi/imotni-dela",
      "/uslugi/imotni-dela/pokupka-na-imot",
      "/uslugi/imotni-dela/naemni-sporove",
      "/uslugi/targovsko-pravo/registratsiya-i-promeni-na-firmi",
    ],
  },
];
