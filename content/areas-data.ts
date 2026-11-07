import type { Locale } from "@/lib/i18n";

type L = Record<Locale, string>;

export interface AreaData {
  slug: string;
  /** Името на района (за карти, линкове, breadcrumbs) */
  name: L;
  /** „от Люлин“ / „from Lyulin“ / „из Люлина“ */
  from: L;
  h1: L;
  /** Квартали в района – за title, description и текста */
  places: L;
  lead: L;
  intro: L;
  reach: L;
  /** Пътища до услугите, които се показват като карти */
  services: string[];
}

const N = "/uslugi/nakazatelno-pravo";
const A = "/uslugi/administrativno-pravo";
const G = "/uslugi/grazhdansko-pravo";
const S = "/uslugi/semeyno-pravo";
const H = "/uslugi/nasledstveno-pravo";
const T = "/uslugi/trudovo-pravo";
const I = "/uslugi/imotni-dela";
const P = "/uslugi/potrebitelsko-pravo";
const K = "/uslugi/targovsko-pravo";

export const AREA_DATA: AreaData[] = [
  {
    slug: "nadezhda",
    name: { bg: "Надежда", en: "Nadezhda", ru: "Надежда" },
    from: { bg: "от Надежда", en: "from Nadezhda", ru: "из Надежды" },
    h1: { bg: "Адвокат в Надежда, София", en: "Lawyer in Nadezhda, Sofia", ru: "Адвокат в районе Надежда, София" },
    places: { bg: "Надежда 1, 2, 3 и 4, Свобода", en: "Nadezhda 1, 2, 3 and 4, Svoboda", ru: "Надежда 1, 2, 3 и 4, Свобода" },
    lead: {
      bg: "Кантората е в ж.к. Надежда 2, на ул. „Стражица“ 7 – удобна локация за всеки, който живее или работи в северната част на София.",
      en: "The office is in Nadezhda 2, at 7 Strazhitsa St. – a convenient location for anyone who lives or works in northern Sofia.",
      ru: "Контора находится в ж.к. Надежда 2, на ул. «Стражица» 7 – удобное место для всех, кто живёт или работает в северной части Софии.",
    },
    intro: {
      bg: "Ако живеете в Надежда или в Свобода, до кантората се стига пеша или с няколко спирки градски транспорт. Часът за среща се уговаря по телефона, а документите можете да донесете, когато Ви е удобно.",
      en: "If you live in Nadezhda or Svoboda, the office is within walking distance or a few stops by public transport. Appointments are arranged by phone, and you can bring your documents whenever it suits you.",
      ru: "Если вы живёте в Надежде или Свободе, до конторы можно дойти пешком или доехать за несколько остановок. Время встречи согласуется по телефону, а документы можно принести в удобное для вас время.",
    },
    reach: {
      bg: "Районът се обслужва от линия М2 на метрото и от много линии на градския транспорт.",
      en: "The area is served by metro line M2 and many public transport lines.",
      ru: "Район обслуживается линией метро М2 и многими маршрутами городского транспорта.",
    },
    services: [N, `${A}/obzhalvane-na-nakazatelni-postanovleniya`, `${S}/razvod`, `${H}/otkaz-ot-nasledstvo`, `${I}/naemni-sporove`, `${T}/nezakonno-uvolnenie`],
  },
  {
    slug: "tsentar",
    name: { bg: "Център", en: "City Centre", ru: "Центр" },
    from: { bg: "от центъра", en: "from the city centre", ru: "из центра" },
    h1: { bg: "Адвокат за центъра на София", en: "Lawyer for Central Sofia", ru: "Адвокат для центра Софии" },
    places: { bg: "Средец, Възраждане, Оборище, Триадица", en: "Sredets, Vazrazhdane, Oborishte, Triaditsa", ru: "Средец, Возрождение, Оборище, Триадица" },
    lead: {
      bg: "Голяма част от делата се гледат в центъра – в Съдебната палата и в Административния съд. Кантората е на една линия метро от тях.",
      en: "Many cases are heard in the centre – at the Palace of Justice and the Administrative Court. The office is one metro line away.",
      ru: "Многие дела рассматриваются в центре – во Дворце правосудия и в Административном суде. Контора – на одной линии метро от них.",
    },
    intro: {
      bg: "В Съдебната палата на бул. „Витоша“ 2 се помещават Софийският градски съд, Софийският апелативен съд и Върховният касационен съд, а Административен съд София-град е на ул. „Георг Вашингтон“ 17. Срещи с клиенти от центъра могат да се проведат в кантората, преди заседание в съда или онлайн.",
      en: "The Palace of Justice at 2 Vitosha Blvd. houses the Sofia City Court, the Sofia Court of Appeal and the Supreme Court of Cassation, and the Administrative Court Sofia City is at 17 Georg Washington St. Meetings with clients from the centre can take place at the office, before a court hearing or online.",
      ru: "Во Дворце правосудия на бул. «Витоша» 2 находятся Софийский городской суд, Софийский апелляционный суд и Верховный кассационный суд, а Административный суд София-град – на ул. «Георг Вашингтон» 17. Встречи с клиентами из центра можно провести в конторе, перед заседанием в суде или онлайн.",
    },
    reach: {
      bg: "От центъра до кантората се стига директно с линия М2 на метрото, без прекачване.",
      en: "From the centre the office is reached directly by metro line M2, without changing.",
      ru: "Из центра до конторы можно доехать напрямую по линии метро М2, без пересадок.",
    },
    services: [N, `${N}/merki-za-protsesualna-prinuda`, A, `${A}/dela-po-zodov`, K, `${G}/dogovorni-sporove`],
  },
  {
    slug: "lyulin",
    name: { bg: "Люлин", en: "Lyulin", ru: "Люлин" },
    from: { bg: "от Люлин", en: "from Lyulin", ru: "из Люлина" },
    h1: { bg: "Адвокат за Люлин, София", en: "Lawyer for Lyulin, Sofia", ru: "Адвокат для района Люлин, София" },
    places: { bg: "Люлин 1–10", en: "Lyulin 1–10", ru: "Люлин 1–10" },
    lead: {
      bg: "Правна помощ за жителите на Люлин – с консултация по телефона, среща в кантората или онлайн.",
      en: "Legal help for Lyulin residents – by phone, at the office or online.",
      ru: "Юридическая помощь жителям Люлина – по телефону, в конторе или онлайн.",
    },
    intro: {
      bg: "С клиентите от Люлин обикновено започваме с кратък разговор по телефона. След това е достатъчна една среща в кантората – за документите и пълномощното, а останалото може да стане дистанционно.",
      en: "With clients from Lyulin we usually start with a short phone call. After that one meeting at the office is enough – for the documents and the power of attorney – and the rest can be done remotely.",
      ru: "С клиентами из Люлина мы обычно начинаем с короткого телефонного разговора. После этого достаточно одной встречи в конторе – для документов и доверенности, а остальное можно сделать дистанционно.",
    },
    reach: {
      bg: "С метрото пътят е по линия М1 с прекачване на М2, а с автомобил – около 20 минути извън пиковите часове.",
      en: "By metro you take line M1 and change to M2; by car it is about 20 minutes outside rush hour.",
      ru: "На метро – по линии М1 с пересадкой на М2, на автомобиле – около 20 минут вне часа пик.",
    },
    services: [N, `${N}/shofirane-v-netrezvo-sastoyanie`, `${S}/izdrazhka-i-roditelski-prava`, `${P}/kreditni-dogovori-zpk`, `${I}/naemni-sporove`, `${T}/nezakonno-uvolnenie`],
  },
  {
    slug: "vrabnitsa",
    name: { bg: "Връбница и Обеля", en: "Vrabnitsa and Obelya", ru: "Врыбница и Обеля" },
    from: { bg: "от Връбница и Обеля", en: "from Vrabnitsa and Obelya", ru: "из Врыбницы и Обели" },
    h1: { bg: "Адвокат за Обеля и Връбница", en: "Lawyer for Obelya and Vrabnitsa", ru: "Адвокат для Обели и Врыбницы" },
    places: { bg: "Обеля 1 и 2, Връбница 1 и 2, Модерно предградие", en: "Obelya 1 and 2, Vrabnitsa 1 and 2, Moderno Predgradie", ru: "Обеля 1 и 2, Врыбница 1 и 2, Модерно предградие" },
    lead: {
      bg: "Район Връбница граничи с Надежда – кантората е съвсем наблизо.",
      en: "The Vrabnitsa district borders Nadezhda – the office is very close.",
      ru: "Район Врыбница граничит с Надеждой – контора совсем рядом.",
    },
    intro: {
      bg: "За жителите на Обеля, Връбница и Модерно предградие кантората е на няколко минути с кола или с градски транспорт. Това е удобно, когато трябва бързо да се подпише пълномощно или да се донесат документи.",
      en: "For residents of Obelya, Vrabnitsa and Moderno Predgradie the office is a few minutes away by car or public transport – convenient when a power of attorney needs to be signed or documents brought in quickly.",
      ru: "Для жителей Обели, Врыбницы и Модерно предградие контора в нескольких минутах на машине или общественном транспорте – удобно, когда нужно быстро подписать доверенность или принести документы.",
    },
    reach: {
      bg: "Метростанция „Обеля“ е на линиите М1 и М2.",
      en: "Obelya metro station is on lines M1 and M2.",
      ru: "Станция метро «Обеля» находится на линиях М1 и М2.",
    },
    services: [N, `${N}/krazhba-i-grabezh`, `${T}/neizplateni-zaplati-i-trudova-zlopoluka`, `${H}/otkaz-ot-nasledstvo`, `${S}/domashno-nasilie`, `${G}/obezshteteniya-pri-ptp`],
  },
  {
    slug: "serdika",
    name: { bg: "Сердика", en: "Serdika", ru: "Сердика" },
    from: { bg: "от Сердика", en: "from Serdika", ru: "из Сердики" },
    h1: { bg: "Адвокат за район Сердика", en: "Lawyer for Serdika District", ru: "Адвокат для района Сердика" },
    places: { bg: "Банишора, Орландовци, Малашевци", en: "Banishora, Orlandovtsi, Malashevtsi", ru: "Банишора, Орландовци, Малашевци" },
    lead: {
      bg: "Сердика е между Надежда и центъра – до кантората се стига за няколко минути.",
      en: "Serdika lies between Nadezhda and the centre – the office is a few minutes away.",
      ru: "Сердика находится между Надеждой и центром – до конторы несколько минут.",
    },
    intro: {
      bg: "В по-старите части на района много имоти са наследствени, затова чести теми са делби, завещания и уреждане на документи за собственост. Помагам и по наказателни, трудови и потребителски въпроси.",
      en: "In the older parts of the district many properties are inherited, so division, wills and sorting out title documents are common topics. I also help with criminal, employment and consumer matters.",
      ru: "В старых частях района много наследственной недвижимости, поэтому частые темы – раздел, завещания и оформление документов о собственности. Я помогаю и по уголовным, трудовым и потребительским вопросам.",
    },
    reach: {
      bg: "Линия М2 минава през района (станции „Княгиня Мария Луиза“ и „Централна гара“).",
      en: "Metro line M2 runs through the district (Knyaginya Maria Luiza and Central Railway Station).",
      ru: "Через район проходит линия метро М2 (станции «Княгиня Мария Луиза» и «Центральный вокзал»).",
    },
    services: [`${H}/delba`, `${H}/zaveshtanie`, `${I}/pokupka-na-imot`, `${N}/advokat-na-postradal`, `${G}/sabirane-na-vzemaniya`, `${P}/kreditni-dogovori-zpk`],
  },
  {
    slug: "krasna-polyana",
    name: { bg: "Красна поляна", en: "Krasna Polyana", ru: "Красна поляна" },
    from: { bg: "от Красна поляна", en: "from Krasna Polyana", ru: "из Красной поляны" },
    h1: { bg: "Адвокат за Красна поляна", en: "Lawyer for Krasna Polyana", ru: "Адвокат для района Красна поляна" },
    places: { bg: "Красна поляна 1–3, Разсадника, Факултета", en: "Krasna Polyana 1–3, Razsadnika, Fakulteta", ru: "Красна поляна 1–3, Разсадника, Факултета" },
    lead: {
      bg: "Имоти, наследство, семейни и граждански дела за клиенти от западната част на София.",
      en: "Property, inheritance, family and civil cases for clients from western Sofia.",
      ru: "Недвижимость, наследство, семейные и гражданские дела для клиентов из западной части Софии.",
    },
    intro: {
      bg: "В района има много наследствени имоти и ново строителство. Затова чести теми са делбите, покупката на жилище и споровете със строители, както и семейните дела.",
      en: "The district has many inherited properties and a lot of new construction. Common topics are division, buying a home and disputes with builders, as well as family cases.",
      ru: "В районе много наследственной недвижимости и нового строительства. Поэтому частые темы – раздел, покупка жилья и споры со строителями, а также семейные дела.",
    },
    reach: {
      bg: "С автомобил до кантората се стига за 15–20 минути извън пиковите часове.",
      en: "By car the office is 15–20 minutes away outside rush hour.",
      ru: "На автомобиле до конторы 15–20 минут вне часа пик.",
    },
    services: [S, `${S}/razvod`, `${H}/delba`, `${I}/pokupka-na-imot`, `${G}/dogovorni-sporove`, `${A}/obzhalvane-na-administrativni-aktove`],
  },
  {
    slug: "mladost",
    name: { bg: "Младост", en: "Mladost", ru: "Младост" },
    from: { bg: "от Младост", en: "from Mladost", ru: "из Младоста" },
    h1: { bg: "Адвокат за Младост, София", en: "Lawyer for Mladost, Sofia", ru: "Адвокат для района Младост, София" },
    places: { bg: "Младост 1–4, Бизнес Парк София", en: "Mladost 1–4, Business Park Sofia", ru: "Младост 1–4, Бизнес Парк София" },
    lead: {
      bg: "Трудови спорове, договори, имоти и фирми – за жители и компании от Младост, предимно онлайн.",
      en: "Employment disputes, contracts, property and companies – for residents and businesses in Mladost, mostly online.",
      ru: "Трудовые споры, договоры, недвижимость и компании – для жителей и фирм Младоста, в основном онлайн.",
    },
    intro: {
      bg: "Младост е на другия край на града, затова с клиентите от района работим основно онлайн – консултация по телефона или видео, документи по имейл, а среща на място само когато наистина е нужна.",
      en: "Mladost is on the other side of the city, so with clients from the district we work mainly online – consultations by phone or video, documents by email, and a meeting in person only when really needed.",
      ru: "Младост находится на другом конце города, поэтому с клиентами из района мы работаем в основном онлайн – консультации по телефону или видео, документы по электронной почте, а личная встреча – только когда она действительно нужна.",
    },
    reach: {
      bg: "Пълномощното може да се подпише и с електронен подпис.",
      en: "The power of attorney can also be signed with an electronic signature.",
      ru: "Доверенность можно подписать и электронной подписью.",
    },
    services: [T, `${T}/nezakonno-uvolnenie`, K, `${I}/pokupka-na-imot`, `${I}/naemni-sporove`, `${A}/obzhalvane-na-nakazatelni-postanovleniya`],
  },
  {
    slug: "ilinden",
    name: { bg: "Илинден", en: "Ilinden", ru: "Илинден" },
    from: { bg: "от Илинден", en: "from Ilinden", ru: "из Илиндена" },
    h1: { bg: "Адвокат за район Илинден", en: "Lawyer for Ilinden District", ru: "Адвокат для района Илинден" },
    places: { bg: "ж.к. Илинден, Захарна фабрика", en: "Ilinden, Zaharna Fabrika", ru: "ж.к. Илинден, Захарна фабрика" },
    lead: {
      bg: "Район Илинден е на кратко разстояние от кантората – удобно за лична среща.",
      en: "The Ilinden district is a short distance from the office – convenient for a meeting in person.",
      ru: "Район Илинден недалеко от конторы – удобно для личной встречи.",
    },
    intro: {
      bg: "Клиентите от Илинден и Захарна фабрика ме търсят най-често за наказателни дела, обжалване на глоби, наемни спорове и семейни въпроси.",
      en: "Clients from Ilinden and Zaharna Fabrika most often come to me for criminal cases, appeals against fines, tenancy disputes and family matters.",
      ru: "Клиенты из Илиндена и Захарна фабрика чаще всего обращаются ко мне по уголовным делам, обжалованию штрафов, спорам по аренде и семейным вопросам.",
    },
    reach: {
      bg: "С автомобил или градски транспорт до кантората се стига бързо през Сердика.",
      en: "By car or public transport the office is reached quickly via Serdika.",
      ru: "На автомобиле или общественном транспорте до конторы быстро добраться через Сердику.",
    },
    services: [N, `${A}/obzhalvane-na-nakazatelni-postanovleniya`, `${I}/naemni-sporove`, `${S}/razvod`, `${H}/delba`, `${P}/kreditni-dogovori-zpk`],
  },
  {
    slug: "krasno-selo",
    name: { bg: "Красно село", en: "Krasno Selo", ru: "Красно село" },
    from: { bg: "от Красно село", en: "from Krasno Selo", ru: "из района Красно село" },
    h1: { bg: "Адвокат за район Красно село", en: "Lawyer for Krasno Selo District", ru: "Адвокат для района Красно село" },
    places: { bg: "Борово, Хиподрума, Бели брези, Лагера", en: "Borovo, Hipodruma, Beli Brezi, Lagera", ru: "Борово, Хиподрума, Бели брези, Лагера" },
    lead: {
      bg: "Имоти, наеми, наследство и трудови спорове за клиенти от Красно село.",
      en: "Property, tenancies, inheritance and employment disputes for clients from Krasno Selo.",
      ru: "Недвижимость, аренда, наследство и трудовые споры для клиентов из района Красно село.",
    },
    intro: {
      bg: "Чести теми за клиентите от Борово, Хиподрума, Бели брези и Лагера са покупката и наемът на жилище, наследствените апартаменти и споровете с работодатели.",
      en: "Common topics for clients from Borovo, Hipodruma, Beli Brezi and Lagera are buying and renting a home, inherited flats and disputes with employers.",
      ru: "Частые темы для клиентов из Борово, Хиподрума, Бели брези и Лагера – покупка и аренда жилья, наследственные квартиры и споры с работодателями.",
    },
    reach: {
      bg: "Районът се обслужва от линия М3 на метрото. Консултацията може да стане и онлайн.",
      en: "The district is served by metro line M3. The consultation can also take place online.",
      ru: "Район обслуживается линией метро М3. Консультация возможна и онлайн.",
    },
    services: [`${I}/pokupka-na-imot`, `${I}/naemni-sporove`, `${H}/otkaz-ot-nasledstvo`, `${T}/nezakonno-uvolnenie`, `${S}/izdrazhka-i-roditelski-prava`, N],
  },
  {
    slug: "lozenets",
    name: { bg: "Лозенец", en: "Lozenets", ru: "Лозенец" },
    from: { bg: "от Лозенец", en: "from Lozenets", ru: "из Лозенца" },
    h1: { bg: "Адвокат за Лозенец, София", en: "Lawyer for Lozenets, Sofia", ru: "Адвокат для района Лозенец, София" },
    places: { bg: "кв. Лозенец, около Южния парк", en: "Lozenets, around South Park", ru: "кв. Лозенец, у Южного парка" },
    lead: {
      bg: "Договори, имоти, фирми и семейни дела за клиенти от Лозенец.",
      en: "Contracts, property, companies and family cases for clients from Lozenets.",
      ru: "Договоры, недвижимость, компании и семейные дела для клиентов из Лозенца.",
    },
    intro: {
      bg: "Лозенец е жилищен квартал с много фирми и офиси. Клиентите от района най-често търсят помощ при договори, сделки с имоти, регистрация и промени на фирми и семейни въпроси.",
      en: "Lozenets is a residential area with many companies and offices. Clients from the district most often need help with contracts, property transactions, company registration and changes, and family matters.",
      ru: "Лозенец – жилой квартал с множеством фирм и офисов. Клиенты из района чаще всего обращаются за помощью по договорам, сделкам с недвижимостью, регистрации и изменениям фирм и семейным вопросам.",
    },
    reach: {
      bg: "Срещата може да бъде в кантората, във Вашия офис или онлайн.",
      en: "We can meet at the office, at your premises or online.",
      ru: "Встреча возможна в конторе, в вашем офисе или онлайн.",
    },
    services: [`${G}/dogovorni-sporove`, `${I}/pokupka-na-imot`, `${K}/registratsiya-i-promeni-na-firmi`, `${S}/razvod`, `${A}/danachni-sporove-i-revizii`, `${N}/shofirane-v-netrezvo-sastoyanie`],
  },
  {
    slug: "studentski",
    name: { bg: "Студентски град", en: "Studentski Grad", ru: "Студентски град" },
    from: { bg: "от Студентски град", en: "from Studentski Grad", ru: "из Студентского городка" },
    h1: { bg: "Адвокат за Студентски град, София", en: "Lawyer for Studentski Grad, Sofia", ru: "Адвокат для Студентского городка, София" },
    places: { bg: "Студентски град, Дървеница, Малинова долина", en: "Studentski Grad, Darvenitsa, Malinova Dolina", ru: "Студентски град, Дырвеница, Малинова долина" },
    lead: {
      bg: "Наеми, депозити, глоби и бързи кредити – най-честите въпроси на клиентите от Студентски град.",
      en: "Leases, deposits, fines and payday loans – the most common questions from Studentski Grad.",
      ru: "Аренда, депозиты, штрафы и быстрые кредиты – самые частые вопросы клиентов из Студентского городка.",
    },
    intro: {
      bg: "В Студентски град много хора живеят под наем, затова чести въпроси са наемните договори и невърнатите депозити. Помагам и при глоби, бързи кредити и наказателни дела – дискретно и с ясна цена предварително.",
      en: "Many people in Studentski Grad rent, so leases and unreturned deposits are common questions. I also help with fines, payday loans and criminal cases – discreetly and with a clear price up front.",
      ru: "В Студентском городке многие живут в аренду, поэтому частые вопросы – договоры аренды и невозвращённые депозиты. Я помогаю и со штрафами, быстрыми кредитами и уголовными делами – конфиденциально и с понятной ценой заранее.",
    },
    reach: {
      bg: "Повечето въпроси се решават с консултация по телефона или онлайн.",
      en: "Most questions are resolved with a phone or online consultation.",
      ru: "Большинство вопросов решается консультацией по телефону или онлайн.",
    },
    services: [`${I}/naemni-sporove`, `${P}/kreditni-dogovori-zpk`, `${A}/obzhalvane-na-nakazatelni-postanovleniya`, `${N}/narkotitsi`, `${N}/shofirane-v-netrezvo-sastoyanie`, P],
  },
  {
    slug: "ovcha-kupel",
    name: { bg: "Овча купел", en: "Ovcha Kupel", ru: "Овча купел" },
    from: { bg: "от Овча купел", en: "from Ovcha Kupel", ru: "из Овча купел" },
    h1: { bg: "Адвокат за Овча купел, София", en: "Lawyer for Ovcha Kupel, Sofia", ru: "Адвокат для района Овча купел, София" },
    places: { bg: "Овча купел 1 и 2, Горна баня, Суходол", en: "Ovcha Kupel 1 and 2, Gorna Banya, Suhodol", ru: "Овча купел 1 и 2, Горна баня, Суходол" },
    lead: {
      bg: "Имоти, наследство, ПТП и трудови дела за клиенти от Овча купел, Горна баня и Суходол.",
      en: "Property, inheritance, road accidents and employment cases for clients from Ovcha Kupel, Gorna Banya and Suhodol.",
      ru: "Недвижимость, наследство, ДТП и трудовые дела для клиентов из Овча купел, Горна баня и Суходола.",
    },
    intro: {
      bg: "В района има както жилищни комплекси, така и къщи и парцели. Затова освен граждански и трудови дела често помагам при имотни спорове, делби и строителство.",
      en: "The district has both housing estates and houses with plots. So besides civil and employment cases, I often help with property disputes, division and construction.",
      ru: "В районе есть и жилые комплексы, и дома с участками. Поэтому помимо гражданских и трудовых дел я часто помогаю в спорах о недвижимости, разделе и строительстве.",
    },
    reach: {
      bg: "Линия М3 на метрото стига до Овча купел и Горна баня. Консултацията може да стане и онлайн.",
      en: "Metro line M3 reaches Ovcha Kupel and Gorna Banya. The consultation can also take place online.",
      ru: "Линия метро М3 доходит до Овча купел и Горна баня. Консультация возможна и онлайн.",
    },
    services: [I, `${H}/delba`, `${G}/obezshteteniya-pri-ptp`, `${T}/neizplateni-zaplati-i-trudova-zlopoluka`, `${A}/obzhalvane-na-administrativni-aktove`, `${S}/razvod`],
  },
  {
    slug: "slatina",
    name: { bg: "Слатина", en: "Slatina", ru: "Слатина" },
    from: { bg: "от Слатина", en: "from Slatina", ru: "из Слатины" },
    h1: { bg: "Адвокат за район Слатина", en: "Lawyer for Slatina District", ru: "Адвокат для района Слатина" },
    places: { bg: "Гео Милев, Редута, Слатина", en: "Geo Milev, Reduta, Slatina", ru: "Гео Милев, Редута, Слатина" },
    lead: {
      bg: "Семейни, наследствени, наказателни и потребителски дела за клиенти от Гео Милев, Редута и Слатина.",
      en: "Family, inheritance, criminal and consumer cases for clients from Geo Milev, Reduta and Slatina.",
      ru: "Семейные, наследственные, уголовные и потребительские дела для клиентов из Гео Милев, Редута и Слатины.",
    },
    intro: {
      bg: "Клиентите от района ме търсят най-често за развод и издръжка, наследствени апартаменти, обжалване на глоби и спорове с търговци и кредитори.",
      en: "Clients from the district most often come to me for divorce and child support, inherited flats, appeals against fines and disputes with traders and lenders.",
      ru: "Клиенты из района чаще всего обращаются ко мне по вопросам развода и алиментов, наследственных квартир, обжалования штрафов и споров с торговцами и кредиторами.",
    },
    reach: {
      bg: "Срещата може да бъде в кантората или онлайн – както Ви е по-удобно.",
      en: "We can meet at the office or online – whichever suits you.",
      ru: "Встреча возможна в конторе или онлайн – как вам удобнее.",
    },
    services: [`${S}/razvod`, `${S}/izdrazhka-i-roditelski-prava`, `${H}/otkaz-ot-nasledstvo`, `${A}/obzhalvane-na-nakazatelni-postanovleniya`, P, N],
  },
  {
    slug: "poduyane",
    name: { bg: "Подуяне", en: "Poduyane", ru: "Подуяне" },
    from: { bg: "от Подуяне", en: "from Poduyane", ru: "из Подуяне" },
    h1: { bg: "Адвокат за район Подуяне", en: "Lawyer for Poduyane District", ru: "Адвокат для района Подуяне" },
    places: { bg: "Хаджи Димитър, Сухата река, Подуяне", en: "Hadzhi Dimitar, Suhata Reka, Poduyane", ru: "Хаджи Димитр, Сухата река, Подуяне" },
    lead: {
      bg: "Район Подуяне е в северната част на града, недалеч от кантората в Надежда.",
      en: "The Poduyane district is in the northern part of the city, not far from the office in Nadezhda.",
      ru: "Район Подуяне находится в северной части города, недалеко от конторы в Надежде.",
    },
    intro: {
      bg: "За клиентите от Хаджи Димитър и Сухата река поемам наказателни и трудови дела, обжалване на глоби, наемни и наследствени въпроси.",
      en: "For clients from Hadzhi Dimitar and Suhata Reka I handle criminal and employment cases, appeals against fines, tenancy and inheritance matters.",
      ru: "Для клиентов из Хаджи Димитр и Сухата река я веду уголовные и трудовые дела, обжалование штрафов, вопросы аренды и наследства.",
    },
    reach: {
      bg: "Линия М3 на метрото започва от Хаджи Димитър, а с автомобил кантората е на кратко разстояние.",
      en: "Metro line M3 starts at Hadzhi Dimitar, and by car the office is a short drive away.",
      ru: "Линия метро М3 начинается от Хаджи Димитр, а на автомобиле до конторы недалеко.",
    },
    services: [N, `${T}/nezakonno-uvolnenie`, `${A}/obzhalvane-na-nakazatelni-postanovleniya`, `${I}/naemni-sporove`, `${H}/zaveshtanie`, `${G}/sabirane-na-vzemaniya`],
  },
  {
    slug: "vitosha",
    name: { bg: "Витоша", en: "Vitosha", ru: "Витоша" },
    from: { bg: "от район Витоша", en: "from the Vitosha district", ru: "из района Витоша" },
    h1: { bg: "Адвокат за район Витоша – Бояна, Драгалевци, Симеоново", en: "Lawyer for Vitosha District – Boyana, Dragalevtsi, Simeonovo", ru: "Адвокат для района Витоша – Бояна, Драгалевци, Симеоново" },
    places: { bg: "Бояна, Драгалевци, Симеоново, Княжево", en: "Boyana, Dragalevtsi, Simeonovo, Knyazhevo", ru: "Бояна, Драгалевци, Симеоново, Княжево" },
    lead: {
      bg: "Имоти, наследство, договори и фирми за клиенти от кварталите под Витоша.",
      en: "Property, inheritance, contracts and companies for clients from the districts below Vitosha.",
      ru: "Недвижимость, наследство, договоры и компании для клиентов из кварталов у подножия Витоши.",
    },
    intro: {
      bg: "В Бояна, Драгалевци, Симеоново и Княжево много от казусите са свързани с имоти – покупки, делби, граници между парцели и строителство. Помагам и при договори, фирми и наследство.",
      en: "In Boyana, Dragalevtsi, Simeonovo and Knyazhevo many cases concern property – purchases, division, plot boundaries and construction. I also help with contracts, companies and inheritance.",
      ru: "В Бояне, Драгалевцах, Симеоново и Княжево многие дела связаны с недвижимостью – покупка, раздел, границы участков и строительство. Я помогаю и с договорами, компаниями и наследством.",
    },
    reach: {
      bg: "Повечето работа може да стане онлайн, а среща се уговаря, когато е нужна.",
      en: "Most of the work can be done online, and a meeting is arranged when needed.",
      ru: "Большую часть работы можно сделать онлайн, а встреча назначается, когда она нужна.",
    },
    services: [I, `${I}/pokupka-na-imot`, `${H}/delba`, `${A}/obzhalvane-na-administrativni-aktove`, `${K}/registratsiya-i-promeni-na-firmi`, `${G}/dogovorni-sporove`],
  },
];
