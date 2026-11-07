import type { Category } from "@/lib/types";

const C = "/uslugi/targovsko-pravo";

export const targovsko: Category = {
  slug: "targovsko-pravo",
  name: "Commercial law and companies",
  icon: "fa fa-handshake",
  title: "Commercial Lawyer in Sofia – company registration, corporate changes, NGOs | Lawyer Angel Dimitrov",
  description:
    "Commercial lawyer in Sofia, Bulgaria: registration of Ltd and sole-owner Ltd companies, corporate changes, transfer of shares, branches, transformation, NGO registration. ☎ +359 88 399 6666",
  h1: "Commercial Lawyer in Sofia",
  lead: "Registration of companies and NGOs, changes in the Commercial Register, contracts and disputes. I prepare and file the documents myself.",
  excerpt: "Registration of legal entities and changes in their circumstances, commercial contracts, advice and litigation.",
  areas: ["tsentar", "mladost", "nadezhda", "krasna-polyana"],
  sections: [
    {
      h2: "Legal support for small and medium-sized businesses",
      blocks: [
        "Most entrepreneurs want to focus on their business, not on paperwork. I take care of the legal side – from incorporating the company to day-to-day contracts and disputes with counterparties – and tell you in good time if something in the documents is a problem.",
      ],
    },
    {
      h2: "Commercial law services",
      blocks: [
        { table: {
          head: ["Service", "What it includes"],
          rows: [
            ["[Company registration](" + C + "/registratsiya-i-promeni-na-firmi)", "EOOD, OOD, AD, sole trader, associations – incorporation documents, entry in the Commercial Register"],
            ["[Corporate changes](" + C + "/registratsiya-i-promeni-na-firmi)", "Change of manager, address, scope of activity, transfer of shares, capital increase"],
            ["Branch of a foreign trader", "Registration of a branch in Bulgaria and representation"],
            ["Company transformation", "Merger by acquisition, merger, spin-off, division, change of legal form"],
            ["NGO registration", "Associations and foundations under the Non-Profit Legal Entities Act"],
            ["Commercial contracts", "Supply, service, distribution and cooperation contracts – see [contract disputes](/uslugi/grazhdansko-pravo/dogovorni-sporove)"],
          ],
        } },
      ],
    },
    {
      h2: "Capital changes and redenomination into euro",
      blocks: [
        "I assist with changes in capital, exclusion or admission of partners, change of manager, change of name and address and all other changes in circumstances. After the introduction of the euro in Bulgaria, companies must **redenominate their capital** into euro – I prepare the resolutions and applications for the Commercial Register.",
        "I also carry out searches in the Commercial Register and the Property Register and assist in commercial disputes.",
      ],
    },
    {
      h2: "Protecting your business before the state",
      blocks: [
        "Companies are subject to inspections by the National Revenue Agency, the Consumer Protection Commission, the Labour Inspectorate, municipalities and regulators. I defend businesses in [appeals against sanctions](/uslugi/administrativno-pravo/obzhalvane-na-nakazatelni-postanovleniya), [tax audits](/uslugi/administrativno-pravo/danachni-sporove-i-revizii) and inspections under [consumer legislation](/uslugi/potrebitelsko-pravo).",
        "The criminal liability of managers – for tax, document and other offences – requires a combination of commercial and [criminal law](/uslugi/nakazatelno-pravo).",
      ],
    },
    {
      h2: "Retainer services",
      blocks: [
        "For companies with an ongoing need for legal assistance, I offer retainer services for a monthly fee. They include advice, review and drafting of contracts, and correspondence with counterparties and institutions. This way you always have a lawyer at hand without paying for each separate task.",
        "I work with companies from [central Sofia](/rayoni/tsentar), the business districts of [Mladost](/rayoni/mladost) and the northern industrial zones around [Nadezhda](/rayoni/nadezhda).",
      ],
    },
  ],
  faq: [
    { q: "How long does it take to register an EOOD (sole-owner Ltd)?", a: "Once the documents are filed, the Commercial Register usually registers the company within a few working days. The whole procedure, including opening a capital account, may take about a week." },
    { q: "Can registration be done online?", a: "Yes, with a qualified electronic signature. As a lawyer I can file the applications electronically on your behalf." },
    { q: "Who is liable for the debts of an OOD (Ltd)?", a: "The company is liable with its assets. As a rule, partners are not personally liable, except in certain cases – for example tax liabilities or abuse." },
  ],
  children: [
    {
      slug: "registratsiya-i-promeni-na-firmi",
      name: "Registration and changes of companies and NGOs",
      title: "Company Registration and Corporate Changes in Sofia – EOOD, OOD, branch, NGO | Lawyer Angel Dimitrov",
      description:
        "Lawyer for company registration in Sofia: EOOD, OOD, branch of a foreign company, NGO, change of manager, transfer of shares, transformation. ☎ +359 88 399 6666",
      h1: "Company Registration and Corporate Changes in Sofia",
      lead: "Incorporating a company, registering an NGO or a branch, changes in circumstances – I prepare the documents and file them with the Commercial Register.",
      excerpt: "EOOD, OOD, branch, NGO, change of manager, transfer of shares, transformation.",
      areas: ["tsentar", "mladost", "nadezhda"],
      sections: [
        {
          h2: "Which legal form to choose",
          blocks: [
            { table: {
              head: ["Form", "Suitable for", "Liability"],
              rows: [
                ["ET (sole trader)", "Independent activity with a small turnover", "Unlimited – with all personal assets"],
                ["EOOD (sole-owner Ltd)", "A single owner who wants limited liability", "Limited to the company's assets"],
                ["OOD (Ltd)", "Two or more partners", "Limited to the company's assets"],
                ["AD / EAD (joint-stock company)", "Larger projects, attracting investors", "Limited; more complex management"],
              ],
            } },
            "For most entrepreneurs an EOOD or OOD is a suitable choice – limited liability, flexible management and low costs.",
          ],
        },
        {
          h2: "How registration works",
          blocks: [
            { ol: [
              "Checking and reserving the company name.",
              "Drafting the articles of association, the decision appointing the manager and declarations.",
              "Paying in the capital to a capital-raising account.",
              "Filing the application with the Commercial Register at the Registry Agency – on paper or electronically.",
              "Registering the beneficial owners.",
              "VAT and other registrations, if required.",
            ] },
          ],
        },
        {
          h2: "Corporate changes",
          blocks: [
            "Every change in circumstances must be filed with the Commercial Register. The most common changes I assist with:",
            { ul: [
              "Change of manager or adding a second manager",
              "Change of registered office and management address",
              "Change of the scope of activity",
              "**Transfer of company shares** – by a contract with notarisation of the signatures and content",
              "Admission and exclusion of partners",
              "Capital increase or reduction",
              "Conversion of a sole trader into an EOOD",
              "Liquidation of a company",
            ] },
          ],
        },
        {
          h2: "Branches, transformation and NGOs",
          blocks: [
            { h3: "Branch of a foreign trader" },
            "Foreign companies can do business in Bulgaria through a branch entered in the Commercial Register. A branch is not a separate legal entity, but it has a manager and keeps separate accounts.",
            { h3: "Company transformation" },
            "Transformation – merger by acquisition, merger, spin-off, division or change of legal form – requires a transformation agreement or plan, an auditor's review in certain cases, and protection of creditors. The procedure is complex and the deadlines must be strictly observed.",
            { h3: "NGO registration" },
            "Associations and foundations are registered in the Register of Non-Profit Legal Entities at the Registry Agency. I draft the statutes, founding minutes and applications, and for public-benefit activities – the documents for registration in that status.",
          ],
        },
        {
          h2: "Corporate services in Sofia",
          blocks: [
            "I serve entrepreneurs and NGOs from [central Sofia](/rayoni/tsentar), [Mladost](/rayoni/mladost), [Nadezhda](/rayoni/nadezhda) and the whole country – with electronic filing of documents. See also the general page on [commercial law](/uslugi/targovsko-pravo).",
          ],
        },
      ],
      faq: [
        { q: "Do I have to go to the Registry Agency in person?", a: "No. With a power of attorney or an electronic signature the lawyer files all documents on your behalf." },
        { q: "How are shares in an OOD transferred?", a: "By a written contract with notarisation of the signatures and content, after a resolution of the general meeting admitting the new partner, and entry in the Commercial Register." },
        { q: "Can I register a company if I am a foreigner?", a: "Yes. Foreign nationals and companies can incorporate companies in Bulgaria, provided the requirements for the documents and their translation are met." },
      ],
    },
  ],
};
