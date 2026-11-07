import type { Category } from "@/lib/types";

const C = "/uslugi/administrativno-pravo";

export const administrativno: Category = {
  slug: "administrativno-pravo",
  name: "Administrative and administrative penalty law",
  icon: "fa fa-landmark",
  title: "Administrative Law Lawyer in Sofia – appeals against acts, penalty decrees and fines | Lawyer Angel Dimitrov",
  description:
    "Lawyer for administrative and administrative penalty law in Sofia: appeals against violation reports, penalty decrees, electronic fines, orders, tax audit acts and State Liability Act claims. ☎ +359 88 399 6666",
  h1: "Administrative and Administrative Penalty Lawyer in Sofia",
  lead: "Protecting individuals and companies against acts, fines and orders of the state and municipal administration – from the objection to the court judgment.",
  excerpt: "Legal protection before state, municipal and judicial authorities. Challenging administrative acts and appealing penalty decrees.",
  areas: ["tsentar", "nadezhda", "mladost", "lyulin", "krasna-polyana"],
  sections: [
    {
      h2: "When the administration gets it wrong",
      blocks: [
        "Every day state and municipal authorities impose fines, issue orders, refuse permits and carry out inspections. Most of these acts can be appealed. The court checks whether the act was issued by a competent authority, under the correct procedure and on sufficient evidence.",
        "For six years I worked as a legal adviser at the Commission for Consumer Protection and represented the Commission before the courts. I know “from the inside” how acts are drafted, what mistakes are made and what the court looks for when reviewing them. Today I use this experience to protect individuals and businesses.",
      ],
    },
    {
      h2: "Administrative penalty cases – fines and pecuniary sanctions",
      blocks: [
        "Administrative penalty proceedings begin with a report establishing an administrative violation (AUAN) and end with a penalty decree, an electronic fine or an on-the-spot fine. The deadlines are short and cannot be restored.",
        { table: {
          head: ["Document", "Deadline", "Where"],
          rows: [
            ["Violation report (AUAN) – written objections", "7 days from drawing up", "To the authority that drew up the report"],
            ["Penalty decree – appeal", "14 days from service", "District court, via the authority that issued the decree"],
            ["District court judgment – cassation appeal", "14 days from notification", "Administrative court"],
          ],
        } },
        "The most commonly appealed are fines under the Road Traffic Act and sanctions from the National Revenue Agency, the Consumer Protection Commission, the Road Transport Administration, the Labour Inspectorate, municipal ordinances and environmental inspectorates. The procedure is described in detail on the [appeals against penalty decrees](" + C + "/obzhalvane-na-nakazatelni-postanovleniya) page.",
        { note: "If you win the case against a penalty decree, the court awards you your lawyer's fees. This makes an appeal reasonable even for smaller fines." },
      ],
    },
    {
      h2: "Administrative acts and orders",
      blocks: [
        "Individual administrative acts directly affect your rights – refusal of a permit, an order to demolish a building, a coercive administrative measure, withdrawal of a licence, dismissal of a civil servant. They are challenged under the Administrative Procedure Code before the administrative court, usually within 14 days of notification.",
        { ul: [
          "Orders imposing coercive administrative measures (taking a vehicle off the road, temporary withdrawal of a driving licence, sealing of premises)",
          "Orders under the Spatial Development Act – demolition of buildings, refusals to legalise",
          "Refusals to issue licences, permits and registrations",
          "Orders dismissing civil servants – see [unlawful dismissal](/uslugi/trudovo-pravo/nezakonno-uvolnenie)",
          "Tacit refusals – when the administration does not reply at all",
        ] },
        "More about the procedure on the [appeals against administrative acts and orders](" + C + "/obzhalvane-na-administrativni-aktove) page.",
      ],
    },
    {
      h2: "Tax disputes and audits",
      blocks: [
        "A National Revenue Agency audit is stressful for any business. The tax audit act is first appealed administratively before the Director of the “Appeals and Tax and Social Security Practice” Directorate and then before the administrative court. I assist already during the audit – with submitting documents, objections to the audit report and preparing the appeal. See [tax disputes and audits](" + C + "/danachni-sporove-i-revizii).",
      ],
    },
    {
      h2: "Compensation from the state under the State Liability Act",
      blocks: [
        "The State and Municipalities Liability for Damage Act gives the right to compensation when you have suffered from an unlawful act or action of the administration, an unlawful charge or detention, or excessively slow justice. More on the [State Liability Act cases](" + C + "/dela-po-zodov) page.",
      ],
    },
    {
      h2: "Why entrust me with your administrative case",
      blocks: [
        { ul: [
          "**Experience from “the other side”** – years of litigation on behalf of a state authority.",
          "**Fast response** – deadlines of 7 and 14 days leave no room for delay.",
          "**Honest assessment** – I will tell you frankly whether an appeal has a chance and how much it will cost.",
          "**Knowledge of the courts** – the Administrative Court Sofia City on Georg Washington St. and the Sofia District Court.",
        ] },
        "I serve individuals and companies from all over Sofia and Bulgaria – from the [city centre](/rayoni/tsentar) and [Mladost](/rayoni/mladost) to [Nadezhda](/rayoni/nadezhda) and [Lyulin](/rayoni/lyulin).",
      ],
    },
  ],
  faq: [
    { q: "Should I sign the violation report (AUAN)?", a: "You may sign it with objections or refuse. Signing is not an admission of guilt. What matters is to record your disagreement and file written objections within 7 days." },
    { q: "Can I appeal an electronic fine?", a: "Yes. An electronic fine for a violation recorded by a camera is also subject to judicial review within 14 days of service." },
    { q: "How much does it cost to appeal a fine?", a: "The fee depends on the complexity and is set in line with Ordinance No. 1. If you win, the court orders the penalising authority to reimburse your lawyer's fees." },
    { q: "Does the appeal suspend payment of the fine?", a: "Yes – until the penalty decree becomes final, the fine cannot be collected by force. Coercive administrative measures, however, are often enforced immediately." },
    { q: "What is a “minor case” for an administrative violation?", a: "When the violation poses insignificant danger to society, the authority or the court may decide not to impose a penalty and only warn the offender." },
  ],
  children: [
    {
      slug: "obzhalvane-na-nakazatelni-postanovleniya",
      name: "Administrative penalty law – appeals against penalty decrees",
      title: "Appeal a Penalty Decree or Traffic Fine in Sofia – electronic fines, traffic violations | Lawyer Angel Dimitrov",
      description:
        "Lawyer for appeals against penalty decrees, violation reports and electronic fines in Sofia. Traffic violations, fines from the NRA, the CPC, the municipality. 14-day deadline. ☎ +359 88 399 6666",
      h1: "Appeals Against Penalty Decrees and Electronic Fines in Sofia",
      lead: "Received a penalty decree or fine? You have 14 days to appeal. The court reviews both the facts and whether the procedural rules were followed.",
      excerpt: "Violation reports, penalty decrees, electronic fines, traffic violations, reducing or cancelling a fine.",
      areas: ["nadezhda", "lyulin", "mladost", "vrabnitsa", "tsentar"],
      sections: [
        {
          h2: "From the violation report to the penalty decree",
          blocks: [
            "Administrative penalty proceedings have clear stages. At each of them you can protect your rights:",
            { ol: [
              "**Drawing up the violation report (AUAN).** You can write objections in the report itself and file written objections within 7 days.",
              "**Issuing the penalty decree.** The penalising authority must consider your objections. If it does not, that is a violation.",
              "**Service of the decree.** From this moment the 14-day deadline for appeal to the district court runs.",
              "**Court proceedings.** The district court reviews the lawfulness of the decree and hears witnesses and the officer who drew up the report.",
              "**Cassation.** The district court's judgment is appealed before the administrative court.",
            ] },
          ],
        },
        {
          h2: "The most common grounds for annulment",
          blocks: [
            { ul: [
              "The violation is not described clearly – date, place or specific actions are missing",
              "The wrong legal provision is cited, or the report and the decree do not match",
              "The report was drawn up by an incompetent person or after the limitation periods expired",
              "There is no evidence – witnesses, photos, data from a technical device",
              "The technical device was not verified or not marked as required by law",
              "The case is minor and no penalty should be imposed",
            ] },
            "Even when the violation did occur, the court may **reduce the fine** to the statutory minimum if the authority did not take mitigating circumstances into account.",
          ],
        },
        {
          h2: "Traffic violations, fines and penalty points",
          blocks: [
            "Fines under the Road Traffic Act make up the largest share – speeding, running a red light, using a phone, parking, missing vignette or insurance. Apart from the fine, the deduction of penalty points and disqualification from driving also matter.",
            { table: {
              head: ["Document", "How it is appealed"],
              rows: [
                ["On-the-spot fine", "If you disagree, do not sign it; a violation report is then drawn up"],
                ["Electronic fine (camera)", "Appeal to the district court within 14 days of service"],
                ["Penalty decree", "Appeal to the district court within 14 days of service"],
                ["Order for a coercive measure (vehicle off the road, licence withdrawal)", "Before the administrative court – see [appeals against orders](/uslugi/administrativno-pravo/obzhalvane-na-administrativni-aktove)"],
              ],
            } },
            "When the fine is for driving with over 0.5 ‰ alcohol, see also the [drink- and drug-driving](/uslugi/nakazatelno-pravo/shofirane-v-netrezvo-sastoyanie) page.",
          ],
        },
        {
          h2: "Fines and sanctions for companies",
          blocks: [
            "Businesses receive sanctions from the National Revenue Agency (cash registers, receipts not issued), the Consumer Protection Commission (price display, warranties, unfair commercial practices), the Labour Inspectorate and municipalities. For sanctions under the Consumer Protection Act my experience at the Commission is particularly useful – see also [consumer law](/uslugi/potrebitelsko-pravo).",
          ],
        },
        {
          h2: "Appealing fines in Sofia",
          blocks: [
            "Appeals against penalty decrees issued in Sofia are heard by the Sofia District Court, and cassation appeals by the Administrative Court Sofia City. I help drivers and companies from all over Sofia and Bulgaria – from [Nadezhda](/rayoni/nadezhda) and [Obelya](/rayoni/vrabnitsa) to [Lyulin](/rayoni/lyulin) and [Mladost](/rayoni/mladost).",
          ],
        },
      ],
      faq: [
        { q: "Is the 14-day deadline counted in working or calendar days?", a: "Calendar days. If the last day is a non-working day, the deadline expires on the next working day." },
        { q: "Can I pay the fine at a discount and still appeal?", a: "Paying the fine at a reduced amount within the statutory period is usually treated as not appealing. You have to choose one or the other." },
        { q: "Do I have to go to court?", a: "Not necessarily. As your lawyer I can represent you at all hearings." },
        { q: "What happens if the court annuls the decree?", a: "The fine and its consequences fall away, and the penalising authority is ordered to pay your lawyer's fees." },
      ],
    },
    {
      slug: "obzhalvane-na-administrativni-aktove",
      name: "Administrative law – appeals against acts and orders",
      title: "Appeals Against Administrative Acts and Orders in Sofia – coercive measures, refusals | Lawyer Angel Dimitrov",
      description:
        "Lawyer for appeals against orders and administrative acts in Sofia: coercive administrative measures, refusals, Spatial Development Act orders, dismissal of civil servants. ☎ +359 88 399 6666",
      h1: "Appeals Against Administrative Acts and Coercive Administrative Measures in Sofia",
      lead: "An order, refusal or measure by a state or municipal authority can be suspended and annulled by the court – if you act within the 14-day deadline.",
      excerpt: "Orders, refusals, coercive administrative measures, tacit refusals, suspension of enforcement.",
      areas: ["tsentar", "nadezhda", "krasna-polyana", "mladost"],
      sections: [
        {
          h2: "Individual, general and normative administrative acts",
          blocks: [
            "The Administrative Procedure Code allows three types of administrative acts to be challenged: **individual** acts (affecting a specific person – an order, refusal or decision), **general** acts (affecting an indefinite circle of persons – for example traffic organisation decisions) and **normative** acts (ordinances of ministries and municipal councils). Individual acts are normally appealed within 14 days, general acts within 14 days of their announcement, and normative acts may be challenged without a time limit.",
            "Tacit refusals – when the authority has not ruled in time – can also be appealed.",
          ],
        },
        {
          h2: "Orders imposing coercive administrative measures",
          blocks: [
            "The most commonly appealed acts are orders imposing coercive administrative measures by the traffic police, the National Revenue Agency, the Consumer Protection Commission, the Labour Inspectorate and other state and municipal administrations:",
            { ul: [
              "Orders for temporary withdrawal of a driving licence",
              "Orders terminating the registration of a vehicle because it was driven without compulsory third-party liability insurance",
              "Tax audit acts of the National Revenue Agency – see [tax disputes and audits](/uslugi/administrativno-pravo/danachni-sporove-i-revizii)",
              "Orders sealing commercial premises and suspending activity",
              "Orders dismissing civil servants",
              "Orders imposing penalties on prisoners",
            ] },
          ],
        },
        {
          h2: "Which other acts can be appealed",
          blocks: [
            "The Administrative Procedure Code allows an appeal against any individual administrative act that affects rights or legitimate interests, unless a law expressly excludes it.",
            { ul: [
              "Coercive administrative measures – taking a vehicle off the road, temporary licence withdrawal, sealing of commercial premises",
              "Orders under the Spatial Development Act – demolition of unlawful construction, refusals of building permits – see also [property cases](/uslugi/imotni-dela)",
              "Municipal refusals – for categorisation, permits, social assistance",
              "Decisions of medical expert commissions and the National Social Security Institute – on pensions, benefits and disability",
              "Orders for disciplinary penalties and dismissal of civil servants – see [unlawful dismissal](/uslugi/trudovo-pravo/nezakonno-uvolnenie)",
            ] },
          ],
        },
        {
          h2: "Deadlines and procedure",
          blocks: [
            { table: {
              head: ["Step", "Deadline", "Authority"],
              rows: [
                ["Administrative appeal (where provided)", "14 days from notification", "Higher administrative authority"],
                ["Court appeal", "14 days from notification", "Administrative court (via the issuing authority)"],
                ["Tacit refusal", "1 month after the deadline for a decision expires", "Administrative court"],
                ["Cassation appeal", "14 days from notification of the judgment", "Supreme Administrative Court or a three-member panel of the administrative court"],
              ],
            } },
            "The appeal may also request **suspension of enforcement** of the act where enforcement would cause you significant or irreparable harm – for example when premises are sealed or a building is to be demolished.",
          ],
        },
        {
          h2: "What the court reviews",
          blocks: [
            "The administrative court reviews the lawfulness of the act on five criteria: whether it was issued by a competent authority, in the prescribed form, in compliance with the procedure, in accordance with substantive law and with the purpose of the law. A single violation is enough for the act to be annulled.",
            "The burden of proving the facts on which the act is based lies with the administrative authority. This is an important advantage for the appellant.",
          ],
        },
        {
          h2: "Compensation for damage from an unlawful act",
          blocks: [
            "If the unlawful order caused you damage – lost profits, expenses, non-pecuniary harm – after it is annulled you can claim compensation from the state or the municipality. See [State Liability Act cases](/uslugi/administrativno-pravo/dela-po-zodov).",
            "Cases are heard by the Administrative Court Sofia City in the [city centre](/rayoni/tsentar), and I also hold meetings at the office in [Nadezhda](/rayoni/nadezhda).",
          ],
        },
      ],
      faq: [
        { q: "What is a tacit refusal?", a: "When the administrative authority does not rule on your request within the statutory period, it is deemed to have refused. A tacit refusal can also be appealed in court." },
        { q: "Is there a state fee for appealing an administrative act?", a: "Yes, but it is symbolic for individuals and higher for companies. If you win, the costs are reimbursed by the authority." },
        { q: "Does the appeal suspend enforcement of the act?", a: "As a rule yes, but for many acts the law allows preliminary enforcement. In that case suspension must be expressly requested from the court." },
      ],
    },
    {
      slug: "danachni-sporove-i-revizii",
      name: "Tax disputes and audits",
      title: "Tax Dispute Lawyer in Sofia – NRA audits and appeals against tax audit acts | Lawyer Angel Dimitrov",
      description:
        "Lawyer for tax disputes in Sofia: assistance during NRA audits, objections to audit reports, appeals against tax audit acts before the Appeals Directorate and the court. ☎ +359 88 399 6666",
      h1: "Tax Disputes and Audits Lawyer in Sofia",
      lead: "Facing an NRA audit? The earlier a lawyer is involved, the better protected your position is in the audit act and in court.",
      excerpt: "NRA audits, audit report, appeal against the tax audit act, VAT sanctions.",
      areas: ["tsentar", "mladost", "nadezhda"],
      sections: [
        {
          h2: "How the audit works",
          blocks: [
            "Audit proceedings start with an order assigning the audit and end with a tax audit act. In the meantime the revenue officers request documents, collect information from counterparties and draw up an audit report, to which the audited person may object.",
            { ol: [
              "Order assigning the audit and request for documents",
              "Cross-checks and collection of evidence",
              "Audit report – deadline for written objections and new evidence",
              "Tax audit act – assessed liabilities and interest",
            ] },
            "The key moment is the **audit report**. Anything you do not submit or contest at that stage will be hard to have accepted later.",
          ],
        },
        {
          h2: "Appealing the tax audit act",
          blocks: [
            { table: {
              head: ["Stage", "Deadline", "Authority"],
              rows: [
                ["Administrative appeal", "14 days from service of the audit act", "Director of the “Appeals and Tax and Social Security Practice” Directorate"],
                ["Court appeal", "14 days from the decision or tacit confirmation", "Administrative court"],
                ["Cassation", "14 days from the judgment", "Supreme Administrative Court"],
              ],
            } },
            "A court appeal is admissible only if the act was first appealed administratively. Missing the first deadline closes the way to court.",
          ],
        },
        {
          h2: "The most common disputes",
          blocks: [
            { ul: [
              "Refusal of VAT input credit for “lack of an actual supply”",
              "Assessment of the tax base by the special procedure when documents were not submitted",
              "Disallowed expenses for corporate tax purposes",
              "Audits of individuals for discrepancies between income and assets",
              "Administrative penalties for cash register discipline – see [appeals against penalty decrees](/uslugi/administrativno-pravo/obzhalvane-na-nakazatelni-postanovleniya)",
            ] },
            "I work with companies and individuals from all over Sofia and Bulgaria, most often with small and medium-sized businesses from the [city centre](/rayoni/tsentar), [Mladost](/rayoni/mladost) and [Nadezhda](/rayoni/nadezhda). For company registration and changes see [commercial law](/uslugi/targovsko-pravo).",
          ],
        },
      ],
      faq: [
        { q: "Can I be represented by a lawyer during the audit?", a: "Yes. With a power of attorney the lawyer can receive documents, submit evidence and file objections on your behalf." },
        { q: "Does the appeal suspend collection of the liabilities?", a: "Not automatically. Enforcement may be suspended under certain conditions, for example after providing security." },
        { q: "How long does the audit take?", a: "By law up to three months, and the period may be extended. The whole procedure including the appeal can take considerably longer." },
      ],
    },
    {
      slug: "dela-po-zodov",
      name: "State Liability Act claims",
      title: "State Liability Lawyer in Sofia – compensation from the state for damage | Lawyer Angel Dimitrov",
      description:
        "Claims under the State Liability Act in Sofia: compensation from the state for unlawful charges, detention, unlawful administrative acts and slow justice. ☎ +359 88 399 6666",
      h1: "Compensation from the State Under the State Liability Act in Sofia",
      lead: "When the state has caused you harm – through an unlawful charge, detention or an unlawful act – it owes you compensation.",
      excerpt: "Compensation for unlawful charges, detention, unlawful administrative acts and slow justice.",
      areas: ["tsentar", "nadezhda", "serdika"],
      sections: [
        {
          h2: "What the State Liability Act is",
          blocks: [
            "The State and Municipalities Liability for Damage Act (ZODOV) governs the liability of the state for damage caused to individuals and legal entities by unlawful acts, actions or omissions of its bodies and officials. The liability is **strict** – you do not need to prove that a particular official was at fault.",
          ],
        },
        {
          h2: "Main situations",
          blocks: [
            { table: {
              head: ["Situation", "Who is liable", "Where the case is heard"],
              rows: [
                ["Unlawful acts, actions and omissions of the administration", "The state or municipality via the relevant authority", "Administrative court"],
                ["A charge ending in acquittal or termination", "The prosecutor's office, the court or the investigating authorities", "Civil court"],
                ["Unlawful detention or pre-trial custody", "The authority that imposed the measure", "Civil court"],
                ["Excessive length of proceedings", "The state", "First administratively, then in court"],
              ],
            } },
          ],
        },
        {
          h2: "What damage is compensated",
          blocks: [
            "Both pecuniary damage – lost income, lawyer's fees in the criminal case, missed transactions – and non-pecuniary damage – stress, harm to dignity, deteriorated health, damaged reputation – are compensated. The amount of non-pecuniary damage is set by the court on the basis of fairness, taking into account the duration and gravity of the charge, media coverage and the consequences for private life.",
            "For State Liability Act claims the state fee is symbolic, and if the claim is granted the state also pays the lawyer's fees.",
          ],
        },
        {
          h2: "When to file the claim",
          blocks: [
            "The general limitation period is five years, and its start depends on the type of damage – for example from the date the acquittal or the judgment annulling the administrative act became final. It is best to prepare the case in good time, while the evidence is available.",
            "If your case is still pending, take care of the defence first – see [criminal cases](/uslugi/nakazatelno-pravo) and [appeals against administrative acts](/uslugi/administrativno-pravo/obzhalvane-na-administrativni-aktove).",
          ],
        },
      ],
      faq: [
        { q: "Is compensation due if the case against me was terminated?", a: "Yes, when the criminal proceedings were terminated because the act was not committed by you or is not a crime, you are entitled to compensation." },
        { q: "Can I claim compensation for a slow case?", a: "Yes. If the right to have the case heard within a reasonable time was violated, compensation can be claimed – first administratively and, if unsuccessful, in court." },
        { q: "How much can the compensation be?", a: "There is no fixed amount – the court sets non-pecuniary damage on the basis of fairness according to the specific circumstances and case law." },
      ],
    },
  ],
};
