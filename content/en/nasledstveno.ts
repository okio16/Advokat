import type { Category } from "@/lib/types";

const C = "/uslugi/nasledstveno-pravo";

export const nasledstveno: Category = {
  slug: "nasledstveno-pravo",
  name: "Inheritance law",
  icon: "fa fa-scroll",
  title: "Inheritance Lawyer in Sofia – wills, renouncing an inheritance, division | Lawyer Angel Dimitrov",
  description:
    "Inheritance lawyer in Sofia, Bulgaria: drafting wills, acceptance under inventory and renunciation of inheritance, reserved share, division of inherited property. ☎ +359 88 399 6666",
  h1: "Inheritance Lawyer in Sofia",
  lead: "Accepting, dividing or renouncing an inheritance – with the right documents and within the legal deadlines.",
  excerpt: "Wills, acceptance under inventory and renunciation of inheritance, calculation of inheritance shares and division.",
  areas: ["nadezhda", "tsentar", "serdika", "krasna-polyana", "lyulin"],
  sections: [
    {
      h2: "What you need to know when an inheritance opens",
      blocks: [
        "An inheritance opens at the moment of death, at the deceased's last place of residence. From that moment the heirs may accept or renounce it. The inheritance includes not only property and money but also **debts** – loans, taxes, unpaid bills. That is why decisions must be informed.",
        { ol: [
          "Obtaining a certificate of heirs from the municipality",
          "Checking the deceased's assets and liabilities",
          "Checking for a will – notarial or handwritten",
          "Decision: acceptance, acceptance under inventory or renunciation",
          "Division – by agreement or through the court",
        ] },
      ],
    },
    {
      h2: "Calculating inheritance shares",
      blocks: [
        "The first step with any inheritance is to establish who inherits and what share. I calculate inheritance shares according to the law, wills and lifetime gifts, and assist with [renunciation and acceptance under inventory](" + C + "/otkaz-ot-nasledstvo) and with [division by court or by agreement](" + C + "/delba).",
      ],
    },
    {
      h2: "Who inherits by law",
      blocks: [
        { table: {
          head: ["Heirs", "How they inherit"],
          rows: [
            ["Children (and their descendants)", "Equally; if a child has died, their share passes to their children"],
            ["Surviving spouse", "A share equal to that of each child; a larger share when inheriting with parents or siblings"],
            ["Parents", "When there are no children"],
            ["Brothers and sisters", "When there are no children or parents"],
            ["More distant relatives", "Up to the sixth degree, when there are no closer heirs"],
          ],
        } },
      ],
    },
    {
      h2: "Reserved share",
      blocks: [
        "The law protects the closest heirs – children, spouse and parents – through the so-called **reserved share**. If the deceased reduced their share through gifts or a will, they can claim its restoration in court. For example, with one child the reserved share is half of the estate, and with two or more children – two thirds, divided equally.",
        "This is one of the most common disputes concerning [wills](" + C + "/zaveshtanie) and lifetime gifts.",
      ],
    },
    {
      h2: "Inheritance law services",
      blocks: [
        { table: {
          head: ["Service", "When you need it"],
          rows: [
            ["[Will](" + C + "/zaveshtanie)", "You want to decide who inherits what and avoid disputes"],
            ["[Renunciation and acceptance under inventory](" + C + "/otkaz-ot-nasledstvo)", "The deceased had debts or you are not sure what exactly you inherit"],
            ["[Division](" + C + "/delba)", "The heirs cannot agree how to divide the property"],
            ["Restoration of the reserved share", "A will or gifts that disadvantage the legal heirs"],
            ["Challenging a will", "Doubts about authenticity, form or the testator's capacity"],
          ],
        } },
      ],
    },
    {
      h2: "Inherited property in Sofia",
      blocks: [
        "Many inheritance disputes in Sofia concern flats and houses in the older districts – [Serdika](/rayoni/serdika), [Krasna Polyana](/rayoni/krasna-polyana), [Nadezhda](/rayoni/nadezhda) – where property often belongs to several generations of heirs and documents are incomplete. I help with obtaining title documents, correcting the cadastre and [division](" + C + "/delba). See also [property cases](/uslugi/imotni-dela).",
      ],
    },
  ],
  faq: [
    { q: "Is there a deadline for accepting an inheritance?", a: "There is no general deadline, but any interested party can ask the court to set you a deadline to declare whether you accept. Acceptance under inventory must be made within three months of learning that the inheritance has opened." },
    { q: "Do I inherit the deceased's debts?", a: "Yes, if you accept the inheritance unconditionally. Under inventory you are liable only up to the value of the inherited property, and if you renounce – not at all." },
    { q: "Can I renounce only the debts and keep the property?", a: "No. Renunciation covers the whole inheritance – it cannot be partial or conditional." },
    { q: "What is a certificate of heirs?", a: "A document from the municipality of the deceased's last address listing all legal heirs. It is needed for almost every action concerning the inheritance." },
  ],
  children: [
    {
      slug: "zaveshtanie",
      name: "Drafting a will",
      title: "Will Lawyer in Sofia – notarial and handwritten wills | Lawyer Angel Dimitrov",
      description:
        "Drafting a will in Sofia: handwritten and notarial wills, reserved share, challenging a will. Consultation with a lawyer ☎ +359 88 399 6666",
      h1: "Drafting a Will in Sofia",
      lead: "A clear and valid will spares your loved ones disputes, costs and years in court.",
      excerpt: "Handwritten and notarial wills, reserved share, challenging a will.",
      areas: ["nadezhda", "tsentar", "serdika", "mladost"],
      sections: [
        {
          h2: "Types of will",
          blocks: [
            { table: {
              head: ["", "Handwritten will", "Notarial will"],
              rows: [
                ["Form", "Written entirely by hand by the testator, dated and signed", "Drawn up by a notary in the presence of two witnesses"],
                ["Costs", "Minimal", "Notary fees"],
                ["Risk of challenge", "Higher – challenges to handwriting, loss", "Low"],
                ["Safekeeping", "By the testator or deposited with a notary", "With the notary"],
              ],
            } },
            "A handwritten will typed on a computer or merely signed by the testator is **void**. It also cannot be made jointly by two people – for example spouses in one document.",
          ],
        },
        {
          h2: "What a will can provide for",
          blocks: [
            { ul: [
              "All or part of the estate to certain persons (universal bequest)",
              "Specific items or properties to specific persons (legacy)",
              "Obligations of the heirs – for example caring for a person or an animal",
              "Revocation of a previous will",
              "Appointment of an executor",
            ] },
            "A will can be revoked or changed at any time until death. The last valid will prevails.",
          ],
        },
        {
          h2: "The reserved share limits the testator's freedom",
          blocks: [
            "If you have children, a spouse or parents, you cannot freely dispose of all your property. They are entitled to a reserved share, which can be restored in court if the will infringes it. That is why, when drafting the will, we first calculate the disposable portion – the part you can freely dispose of.",
            "This check prevents future disputes between the heirs, including [division](/uslugi/nasledstveno-pravo/delba).",
          ],
        },
        {
          h2: "Challenging a will",
          blocks: [
            "A will can be challenged if it does not meet the formal requirements, if the testator was unable to understand or control their actions, if it was made under threat or mistake, or if it infringes the reserved share. I represent both heirs who challenge a will and those who defend it.",
            "I advise clients from [Nadezhda](/rayoni/nadezhda), the [city centre](/rayoni/tsentar), [Serdika](/rayoni/serdika), [Mladost](/rayoni/mladost), all of Sofia and the rest of Bulgaria. See also the general page on [inheritance law](/uslugi/nasledstveno-pravo).",
          ],
        },
      ],
      faq: [
        { q: "Can a handwritten will be typed on a computer?", a: "No. It must be written entirely by hand by the testator, dated and signed. Otherwise it is void." },
        { q: "Can I disinherit a child?", a: "Not completely. The child is entitled to a reserved share, which can be restored in court." },
        { q: "Where should I keep a handwritten will?", a: "The safest option is to deposit it with a notary in a sealed envelope, so there is no risk of it being lost or destroyed." },
      ],
    },
    {
      slug: "otkaz-ot-nasledstvo",
      name: "Renunciation and acceptance under inventory",
      title: "Renouncing an Inheritance in Sofia – acceptance under inventory, debts of the deceased | Lawyer Angel Dimitrov",
      description:
        "Lawyer for renunciation of inheritance and acceptance under inventory in Sofia: debts of the deceased, deadlines, application to the district court, children as heirs. ☎ +359 88 399 6666",
      h1: "Renouncing an Inheritance and Acceptance Under Inventory in Sofia",
      lead: "Did the deceased leave debts? Renunciation or acceptance under inventory protects you from liability with your own property.",
      excerpt: "Renunciation of inheritance, acceptance under inventory, debts of the deceased, children as heirs.",
      areas: ["nadezhda", "lyulin", "serdika", "vrabnitsa"],
      sections: [
        {
          h2: "Three options for the heir",
          blocks: [
            { table: {
              head: ["Decision", "Consequence"],
              rows: [
                ["Unconditional acceptance", "You inherit the property and are liable for all debts, including with your own property"],
                ["Acceptance under inventory", "You are liable for the debts only up to the value of the inheritance"],
                ["Renunciation", "You inherit nothing and are not liable for the debts"],
              ],
            } },
            "Important: an inheritance can also be accepted **tacitly** – by actions showing an intention to accept it, for example selling an item from the estate or using the deceased's bank account. After that, renunciation is no longer possible.",
          ],
        },
        {
          h2: "How to renounce an inheritance",
          blocks: [
            { ol: [
              "A written application is filed with the district court of the deceased's last address.",
              "The signature is notarised or the application is filed in person at the court.",
              "A certificate of heirs and an extract of the death certificate are attached.",
              "The renunciation is entered in a special register of the court and takes effect from that moment.",
            ] },
            "Renunciation affects the next heirs. When a parent renounces, their share may pass to their children – who then also need to renounce. That is why the renunciation of the whole family must be planned.",
          ],
        },
        {
          h2: "Acceptance under inventory",
          blocks: [
            "Acceptance under inventory is appropriate when you do not know whether the assets exceed the liabilities. The application is filed within three months of learning that the inheritance has opened, and the court may extend the period. After the application an inventory of the estate is drawn up.",
            "Minors and persons placed under legal incapacity may accept an inheritance only under inventory. This is a statutory protection for children.",
          ],
        },
        {
          h2: "Creditors and debt collectors",
          blocks: [
            "After a debtor's death, creditors often turn to the heirs. If you have renounced, present the certificate of the registered renunciation. If you have already received an enforcement order – act quickly, see [debt recovery](/uslugi/grazhdansko-pravo/sabirane-na-vzemaniya).",
            "I help heirs from [Nadezhda](/rayoni/nadezhda), [Lyulin](/rayoni/lyulin), [Serdika](/rayoni/serdika), [Obelya](/rayoni/vrabnitsa), all of Sofia and the rest of Bulgaria. See also [inheritance law](/uslugi/nasledstveno-pravo).",
          ],
        },
      ],
      faq: [
        { q: "Is there a deadline for renouncing an inheritance?", a: "The law sets no general deadline, but if someone asks the court to set you a deadline to declare your position, you lose the right to accept once it expires. The main rule: do not take actions with the estate if you plan to renounce." },
        { q: "Can I renounce if I have already used the flat?", a: "It depends. Use alone does not always mean acceptance, but any disposal – sale, letting – most likely means tacit acceptance." },
        { q: "If I renounce, will my children inherit the debts?", a: "The share may pass to them. That is why renunciation should be planned for all heirs at once." },
      ],
    },
    {
      slug: "delba",
      name: "Division of property and inheritance",
      title: "Division of Property and Inheritance Lawyer in Sofia – by agreement or by court | Lawyer Angel Dimitrov",
      description:
        "Lawyer for division in Sofia: division of inheritance, division of property after divorce, co-ownership, allocation, public sale, compensation for use. ☎ +359 88 399 6666",
      h1: "Division of Property and Inheritance in Sofia",
      lead: "Co-ownership is rarely peaceful. Division ends the dispute – by agreement when possible, and through the court when necessary.",
      excerpt: "Division of inheritance, division of real estate and assets, co-ownership, allocation.",
      areas: ["serdika", "krasna-polyana", "nadezhda", "lyulin", "tsentar"],
      sections: [
        {
          h2: "When division is needed",
          blocks: [
            "Division is carried out when property belongs to several people – heirs, former spouses, co-owners by purchase. Every co-owner may request division at any time, except in the cases excluded by law. The most common cases:",
            { ul: [
              "An inherited flat or house belonging to several heirs",
              "Property acquired during the marriage, after a [divorce](/uslugi/semeyno-pravo/razvod)",
              "Agricultural land and plots inherited over generations",
              "Co-owned property where one co-owner lives and the others receive nothing",
            ] },
          ],
        },
        {
          h2: "Division by agreement or by court",
          blocks: [
            { table: {
              head: ["", "By agreement", "By court"],
              rows: [
                ["Condition", "Consent of all co-owners", "No agreement"],
                ["Form", "Contract – notarised for real estate", "Statement of claim to the district court"],
                ["Duration", "Days or weeks", "Usually over a year"],
                ["Costs", "Lower", "State fees, expert reports, lawyer"],
              ],
            } },
          ],
        },
        {
          h2: "Court division has two phases",
          blocks: [
            { h3: "First phase – admission of the division" },
            "The court establishes between which persons, for which properties and with what shares the division will take place. Disputes about ownership, inheritance rights, gifts and wills are decided here.",
            { h3: "Second phase – carrying out the division" },
            "The court decides how the property will be divided. The options are:",
            { ul: [
              "Allocation of actual shares – if the property can be divided",
              "Drawing lots – for equal shares",
              "**Allocation to one co-owner** – the property is allocated to one co-owner who pays out the others (for example to the spouse with whom the children live, or to an heir who lived in the property)",
              "Public sale – when the property is indivisible and cannot be allocated",
            ] },
            "In the second phase, accounts between the co-owners can also be settled – for improvements, expenses incurred and compensation for use of the property by one co-owner.",
          ],
        },
        {
          h2: "Preparing for the division",
          blocks: [
            "A successful division starts with the documents: notarial deeds, certificate of heirs, cadastral sketches, tax valuations. In older districts such as [Serdika](/rayoni/serdika) and [Krasna Polyana](/rayoni/krasna-polyana) there are often discrepancies in the cadastre that must be corrected – see [property cases](/uslugi/imotni-dela).",
            "If it is a division of an inheritance, first check whether there is a [will](/uslugi/nasledstveno-pravo/zaveshtanie) that changes the shares. I represent clients from [Nadezhda](/rayoni/nadezhda), [Lyulin](/rayoni/lyulin), all of Sofia and the rest of Bulgaria.",
          ],
        },
      ],
      faq: [
        { q: "Can a co-owner sell their share?", a: "Yes, as a rule every co-owner may freely sell their undivided share. The exception is agricultural land – there the other co-owners have a right of pre-emption and the share must first be offered to them." },
        { q: "Does a co-owner who lives alone in the property owe compensation?", a: "Yes, if the other co-owners have requested in writing to use the property and he obstructs them. He then owes compensation for their share." },
        { q: "How much does a court division cost?", a: "The state fee is a percentage of the value of each co-owner's share. Expert reports and lawyer's fees are added." },
      ],
    },
  ],
};
