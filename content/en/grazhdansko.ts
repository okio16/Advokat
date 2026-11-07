import type { Category } from "@/lib/types";

const C = "/uslugi/grazhdansko-pravo";

export const grazhdansko: Category = {
  slug: "grazhdansko-pravo",
  name: "Civil and contract law",
  icon: "fa fa-building",
  title: "Civil Law Lawyer in Sofia – contracts, debt recovery, compensation | Lawyer Angel Dimitrov",
  description:
    "Civil law lawyer in Sofia, Bulgaria: contract disputes, termination of contracts, debt recovery, road accident compensation, drafting contracts and powers of attorney. ☎ +359 88 399 6666",
  h1: "Civil Law Lawyer in Sofia",
  lead: "Drafting and reviewing contracts, debt recovery, compensation claims and representation in civil cases at all court instances.",
  excerpt: "Drafting contracts and powers of attorney, contract disputes, debt recovery and compensation. Advice and court representation.",
  areas: ["nadezhda", "tsentar", "mladost", "krasna-polyana", "serdika"],
  sections: [
    {
      h2: "Civil cases – the most common reason to need a lawyer",
      blocks: [
        "Civil law governs relations between people and companies – contracts, property, obligations, compensation. Most people need a civil lawyer when someone does not pay them, when they have signed a contract that is not being performed, or when they have suffered damage and want compensation.",
        "My work does not necessarily start with a lawsuit. Often the most effective solution is a well-written demand letter, negotiations or a settlement. But when it comes to court, you will be prepared – with clear evidence and a realistic assessment of your chances.",
      ],
    },
    {
      h2: "What my civil practice covers",
      blocks: [
        { table: {
          head: ["Area", "Typical cases"],
          rows: [
            ["[Contract disputes](" + C + "/dogovorni-sporove)", "Non-performance, termination of contracts, penalties, defective work, service and work contracts"],
            ["[Debt recovery](" + C + "/sabirane-na-vzemaniya)", "Order-for-payment procedure, lawsuits, unpaid invoices, loans between individuals"],
            ["[Road accident compensation](" + C + "/obezshteteniya-pri-ptp)", "Claims against insurers under third-party liability and comprehensive insurance, Guarantee Fund"],
            ["[Property cases](/uslugi/imotni-dela)", "Sale and purchase, notarial deeds, tenancy disputes, ownership"],
            ["Drafting documents", "Contracts, powers of attorney, settlements, demand letters, notarial notices"],
          ],
        } },
      ],
    },
    {
      h2: "How a civil case proceeds",
      blocks: [
        { ol: [
          "**Consultation and documents.** I review the contracts, correspondence, invoices and evidence.",
          "**Demand letter / attempt at out-of-court settlement.** Many disputes end here.",
          "**Statement of claim or application for an enforcement order.** I choose the fastest and cheapest route.",
          "**Exchange of pleadings.** The defendant has a deadline to respond, and the claimant – to reply.",
          "**Open hearing.** Witnesses, expert reports, closing arguments.",
          "**Judgment and appeal.** Appeal and, where there are grounds, cassation.",
          "**Enforcement.** Writ of execution and assistance before a bailiff.",
        ] },
        "Civil cases in Sofia are heard by the Sofia District Court at 54 Tsar Boris III Blvd. and by the Sofia City Court in the Palace of Justice – depending on the value of the claim and the type of dispute.",
      ],
    },
    {
      h2: "Contract law – drafting contracts",
      blocks: [
        "I draft and review contracts for:",
        { ul: [
          "sale and purchase, lease and loan",
          "leasing, contract for work and services",
          "assignment of receivables and promissory notes",
          "commission, freight forwarding and carriage contracts",
        ] },
        "I defend clients in and out of court when a contract is not performed, draft [wills](/uslugi/nasledstveno-pravo/zaveshtanie) and gift contracts, and assist in concluding settlements between disputing parties.",
      ],
    },
    {
      h2: "Deadlines you must not miss",
      blocks: [
        { table: {
          head: ["Deadline", "For what"],
          rows: [
            ["5 years", "General limitation period for claims, including compensation for tort"],
            ["3 years", "Rent, interest, periodic payments, compensation and penalties for breach of contract"],
            ["2 weeks", "Objection against an enforcement order"],
            ["1 month", "Declaratory claim after an objection against the order"],
            ["2 weeks", "Appeal against a first-instance judgment"],
          ],
        } },
        "The court does not apply limitation of its own motion – but if the debtor invokes it, the claim becomes unenforceable in court. So do not delay bringing your claim.",
      ],
    },
    {
      h2: "Consumers and traders",
      blocks: [
        "Some civil disputes are consumer disputes – defective goods, refused warranty repairs, loans with unfair terms. Special rules of the Consumer Protection Act and the Consumer Credit Act apply – see [consumer law](/uslugi/potrebitelsko-pravo).",
      ],
    },
    {
      h2: "A civil lawyer near you",
      blocks: [
        "The office is in [Nadezhda 2](/rayoni/nadezhda), convenient for clients from [Serdika](/rayoni/serdika), [Vrabnitsa](/rayoni/vrabnitsa) and the northern part of the city. I also work with clients from [Mladost](/rayoni/mladost), [Krasna Polyana](/rayoni/krasna-polyana), all of Sofia and the rest of Bulgaria, and many documents can be prepared remotely.",
      ],
    },
  ],
  faq: [
    { q: "How much does a civil case cost?", a: "The costs include the state fee (usually 4% of the value of the claim), the lawyer's fee and possibly expert reports. If you win, the court orders the losing party to pay the costs." },
    { q: "How long does a civil case in Sofia take?", a: "Usually from a few months to a year at first instance, depending on complexity and the court's workload." },
    { q: "Must every dispute go to court?", a: "No. Many disputes are resolved with a demand letter, negotiations or mediation. Court is the last step, not the first." },
    { q: "Can you represent me if I live outside Sofia or abroad?", a: "Yes. Documents can be prepared remotely, and court representation is carried out under a power of attorney." },
  ],
  children: [
    {
      slug: "dogovorni-sporove",
      name: "Contract disputes and termination of contracts",
      title: "Contract Dispute Lawyer in Sofia – breach and termination of contract | Lawyer Angel Dimitrov",
      description:
        "Lawyer for contract disputes in Sofia: non-performance, termination of contracts, penalties, compensation, drafting and reviewing contracts. ☎ +359 88 399 6666",
      h1: "Contract Dispute Lawyer in Sofia",
      lead: "A breached contract, unfulfilled commitments or a contract you want to get out of – the outcome depends on how you act in the first steps.",
      excerpt: "Non-performance, termination of contracts, penalties, drafting and reviewing contracts.",
      areas: ["tsentar", "mladost", "nadezhda", "krasna-polyana"],
      sections: [
        {
          h2: "When the other party does not perform",
          blocks: [
            "A contract is law for the parties who concluded it. When one party fails to perform – does not pay, does not deliver, performs poorly or is late – the other party has several options, which can be combined:",
            { ul: [
              "To demand actual performance of the contract",
              "To terminate the contract and recover what was given",
              "To claim compensation for damage suffered and lost profits",
              "To claim the agreed penalty",
              "To withhold its own performance until the other party performs",
            ] },
          ],
        },
        {
          h2: "Terminating a contract – how to do it correctly",
          blocks: [
            "In bilateral contracts, if one party fails to perform, the other may terminate the contract by giving it a reasonable time to perform with a warning that, after the deadline, the contract will be considered terminated. The warning must be **in writing** when the contract was concluded in writing. Without a warning a contract can be terminated only in expressly provided cases – for example when performance has become impossible or useless to the creditor.",
            "Contracts transferring or creating rights in rem over real estate can be terminated only through the court. This also applies to preliminary contracts for property – more on the [buying property and off-plan purchases](/uslugi/imotni-dela/pokupka-na-imot) page.",
            { note: "An incorrectly terminated contract can reverse the roles – and you may end up being the party in breach. Seek advice before sending a notice." },
          ],
        },
        {
          h2: "Penalties and compensation",
          blocks: [
            "A contractual penalty secures performance and serves as compensation without the need to prove damage. When it is excessive compared to the damage suffered, the court may reduce it. Penalties that go beyond their inherent functions may be declared void as contrary to good morals – an issue of particular importance in consumer contracts.",
            { table: {
              head: ["Type of claim", "What must be proven"],
              rows: [
                ["Penalty", "A valid clause and non-performance"],
                ["Compensation for damage", "Non-performance, damage, causation and amount"],
                ["Default interest", "A due monetary obligation and delay"],
              ],
            } },
          ],
        },
        {
          h2: "Prevention: a well-drafted contract",
          blocks: [
            "The cheapest dispute is the one that never arises. I draft and review contracts for services, work, lease, loans, sale and purchase, cooperation and powers of attorney, providing clear deadlines, acceptance mechanisms, penalties and termination procedures.",
            "When a consumer is involved, the protective rules of [consumer law](/uslugi/potrebitelsko-pravo) also apply. If the obligation is monetary and unpaid, see [debt recovery](/uslugi/grazhdansko-pravo/sabirane-na-vzemaniya). I serve companies and individuals from the [city centre](/rayoni/tsentar), [Mladost](/rayoni/mladost) and [Nadezhda](/rayoni/nadezhda).",
          ],
        },
      ],
      faq: [
        { q: "Can I terminate a contract by email?", a: "If the contract was concluded in writing, the warning must also be in writing. The safe option is a notarial notice or a letter with acknowledgement of receipt." },
        { q: "What is a reasonable time for performance?", a: "A time sufficient for performance under ordinary circumstances – it depends on the type of obligation. Too short a deadline may make the termination invalid." },
        { q: "Can the court reduce a penalty?", a: "Yes, if it is excessive compared to the damage suffered. Between traders this is harder but possible." },
      ],
    },
    {
      slug: "sabirane-na-vzemaniya",
      name: "Debt recovery",
      title: "Debt Recovery Lawyer in Sofia – order for payment, collection of receivables | Lawyer Angel Dimitrov",
      description:
        "Debt recovery in Sofia: demand letters, order-for-payment procedure, lawsuits, unpaid invoices and loans, bailiffs. Lawyer Angel Dimitrov ☎ +359 88 399 6666",
      h1: "Debt Recovery in Sofia",
      lead: "Someone owes you money – unpaid invoices, a loan, rent or compensation? The law provides fast-track procedures for debt recovery.",
      excerpt: "Demand letters, enforcement orders, lawsuits, bailiffs, defending debtors.",
      areas: ["nadezhda", "mladost", "serdika", "lyulin"],
      sections: [
        {
          h2: "From the unpaid amount to money in your account",
          blocks: [
            { ol: [
              "**Analysis of the claim** – is there written evidence, when did it fall due, is limitation running.",
              "**Demand letter** – often enough, especially when sent by a lawyer.",
              "**Order-for-payment procedure** – a fast and inexpensive procedure before the district court.",
              "**Statement of claim** – when the debtor objects or the claim is disputed.",
              "**Enforcement** – garnishment of accounts and salaries, attachment of property through a bailiff.",
            ] },
          ],
        },
        {
          h2: "Enforcement order – the fastest route",
          blocks: [
            "For monetary claims an application for an enforcement order can be filed with the district court at the debtor's address. The state fee is low and the court rules without summoning the parties. The debtor has two weeks to object. If no objection is filed, the order becomes final and a writ of execution is issued.",
            "On the basis of certain documents – for example a promissory note or a notarial deed – **immediate enforcement** can also be requested, allowing enforcement even before the order becomes final.",
            "If the debtor objects, the creditor has one month to bring a declaratory claim. Missing the deadline results in the order being set aside.",
          ],
        },
        {
          h2: "Limitation – do not wait",
          blocks: [
            { table: {
              head: ["Type of claim", "Limitation period"],
              rows: [
                ["Most claims under contracts and loans", "5 years"],
                ["Rent, interest and other periodic payments", "3 years"],
                ["Compensation and penalties for breach of contract", "3 years"],
                ["Salaries", "3 years – see [unpaid wages](/uslugi/trudovo-pravo/neizplateni-zaplati-i-trudova-zlopoluka)"],
              ],
            } },
            "Limitation is interrupted by acknowledgement of the debt, by bringing a claim or an application in the order-for-payment procedure, and by enforcement actions.",
          ],
        },
        {
          h2: "Defending debtors",
          blocks: [
            "I also represent debtors – against unfounded claims by collection agencies, time-barred claims, wrongly calculated interest and unfair terms in loan contracts. With consumer loans it may turn out that part of the amount claimed is not owed – see [payday loans and consumer credit](/uslugi/potrebitelsko-pravo/kreditni-dogovori-zpk).",
            "If the claim arises from a breached contract, see also [contract disputes](/uslugi/grazhdansko-pravo/dogovorni-sporove). I work with creditors and debtors from [Nadezhda](/rayoni/nadezhda), [Lyulin](/rayoni/lyulin), [Mladost](/rayoni/mladost), all of Sofia and the rest of Bulgaria.",
          ],
        },
      ],
      faq: [
        { q: "Can I recover a loan made without a contract?", a: "Yes, if you can prove that the money was handed over – by bank transfer, receipt, messages or witnesses (subject to certain limits on witness evidence)." },
        { q: "What should I do if I receive an enforcement order?", a: "If you do not owe the amount or part of it, file an objection within two weeks. It need not be reasoned, but it is best to seek advice." },
        { q: "Who pays the collection costs?", a: "If successful, the court orders the debtor to pay the state fees and lawyer's fees." },
      ],
    },
    {
      slug: "obezshteteniya-pri-ptp",
      name: "Road accident compensation",
      title: "Road Accident Compensation Lawyer in Sofia – damage, personal injury, insurer | Lawyer Angel Dimitrov",
      description:
        "Lawyer for road accident compensation in Sofia: claims against third-party liability insurers, personal injury, property damage, Guarantee Fund. ☎ +359 88 399 6666",
      h1: "Road Accident Compensation in Sofia",
      lead: "Injured in a road accident? The insurer owes fair compensation – not the first offer it makes.",
      excerpt: "Pecuniary and non-pecuniary damage, claims against insurers, Guarantee Fund.",
      areas: ["nadezhda", "lyulin", "vrabnitsa", "mladost", "krasna-polyana"],
      sections: [
        {
          h2: "Who pays the compensation",
          blocks: [
            "In an accident caused by an insured driver, compensation is paid by the insurer under the at-fault driver's compulsory third-party liability insurance. If the at-fault driver is uninsured or unknown, the Guarantee Fund is liable. If your car has comprehensive insurance, you can receive compensation for the damage to it from your own insurer.",
            { table: {
              head: ["Situation", "Who the claim is against"],
              rows: [
                ["At-fault driver with third-party insurance", "The at-fault driver's insurer"],
                ["At-fault driver uninsured or unknown", "The Guarantee Fund"],
                ["Car with comprehensive insurance", "Your own insurer (for damage to the car)"],
                ["Foreign vehicle", "Through the insurer's representative in Bulgaria or the National Bureau"],
              ],
            } },
          ],
        },
        {
          h2: "What can be claimed",
          blocks: [
            { ul: [
              "**Pecuniary damage** – repair or market value of the car, medical and medicine costs, rehabilitation, lost income",
              "**Non-pecuniary damage** – pain and suffering, stress, prolonged recovery, lasting consequences",
              "**Compensation for relatives of a deceased person** – for the grief of the loss",
              "**Default interest** from the moment provided by law",
            ] },
            "The amount of non-pecuniary damage is set on the basis of fairness and case law. Insurers often offer considerably less than what a court would award.",
          ],
        },
        {
          h2: "Procedure – insurer first, then the court",
          blocks: [
            { ol: [
              "Filing a written claim with the insurer with all documents – accident report, medical records, proof of expenses.",
              "The insurer must decide within the statutory period (up to three months from the claim).",
              "If it refuses, does not respond or offers an insufficient sum – a lawsuit against the insurer.",
            ] },
            "The claim is brought directly against the insurer – you do not need to sue the at-fault driver. The limitation period is five years, but it is best to gather evidence immediately.",
          ],
        },
        {
          h2: "When there is a criminal case",
          blocks: [
            "If there are injured persons, criminal proceedings are usually brought against the at-fault driver. As a [lawyer for victims of crime](/uslugi/nakazatelno-pravo/advokat-na-postradal) I can represent you there too. If you are the one charged – see [criminal cases](/uslugi/nakazatelno-pravo) and [drink- and drug-driving](/uslugi/nakazatelno-pravo/shofirane-v-netrezvo-sastoyanie).",
            "I help injured persons from all over Sofia and Bulgaria – from [Lyulin](/rayoni/lyulin) and [Obelya](/rayoni/vrabnitsa) to [Mladost](/rayoni/mladost) and [Krasna Polyana](/rayoni/krasna-polyana).",
          ],
        },
      ],
      faq: [
        { q: "Must I accept the insurer's offer?", a: "No. You can refuse and bring a claim. If you accept the amount as final, it will later be difficult to claim the difference." },
        { q: "How much does a lawyer for accident compensation cost?", a: "Various arrangements are possible, including a success-based fee. In court, the insurer pays the costs if it loses." },
        { q: "Is a passenger in the at-fault car entitled to compensation?", a: "As a rule, the passenger can claim compensation from the at-fault driver's third-party liability insurer. The specific statutory exceptions are checked in each case." },
      ],
    },
  ],
};
