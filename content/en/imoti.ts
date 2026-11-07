import type { Category } from "@/lib/types";

const C = "/uslugi/imotni-dela";

export const imoti: Category = {
  slug: "imotni-dela",
  name: "Property cases and real estate transactions",
  icon: "fa fa-house",
  title: "Property Lawyer in Sofia – buying property, notarial deeds, tenancy disputes | Lawyer Angel Dimitrov",
  description:
    "Real estate lawyer in Sofia, Bulgaria: due diligence before purchase, notarial deeds, off-plan purchases, mortgage deletion, ownership disputes, tenancy disputes. ☎ +359 88 399 6666",
  h1: "Property Lawyer in Sofia",
  lead: "Buying property is the biggest transaction for most people. A legal check before signing costs little – a mistake after it can cost everything.",
  excerpt: "Buying and selling property, notarial deeds, off-plan purchases, tenancy disputes, ownership and cadastre disputes.",
  areas: ["nadezhda", "serdika", "krasna-polyana", "mladost", "lyulin"],
  sections: [
    {
      h2: "Legal certainty in property transactions",
      blocks: [
        "The Sofia property market moves fast, and buyers often sign preliminary contracts and pay deposits under pressure without checking the property. The consequences of an overlooked mortgage, an unsettled inheritance share or an illegal extension are discovered only after the transaction – when they are hardest to fix.",
        "As a property lawyer I help buyers, sellers, landlords and tenants conclude secure transactions and resolve ownership disputes.",
      ],
    },
    {
      h2: "Property law services",
      blocks: [
        { table: {
          head: ["Service", "What it includes"],
          rows: [
            ["[Buying property and notarial deed](" + C + "/pokupka-na-imot)", "Checking title and encumbrances, preliminary contract, off-plan purchases, attendance at the notary"],
            ["Deletion of a mortgage", "Assistance with deleting the mortgage after the loan is repaid"],
            ["[Tenancy disputes](" + C + "/naemni-sporove)", "Lease contracts, unpaid rent, vacating property, return of deposit"],
            ["Ownership disputes", "Ownership claims, acquisitive prescription, co-ownership, [division](/uslugi/nasledstveno-pravo/delba)"],
            ["Cadastre and construction", "Correcting cadastral errors, legalisation, [demolition orders](/uslugi/administrativno-pravo/obzhalvane-na-administrativni-aktove)"],
          ],
        } },
      ],
    },
    {
      h2: "What I check before a purchase",
      blocks: [
        { ul: [
          "The title document and the chain of previous transactions",
          "Encumbrances in the Property Register – mortgages, attachments, pending claims",
          "Cadastral data – area, boundaries, identifier",
          "The seller's marital status – whether the spouse's consent is needed",
          "Inheritance rights – whether there are other heirs",
          "Debts to the owners' association, taxes and fees",
          "Building documents and occupancy permit for new construction",
        ] },
        "These checks are carried out at the Registry Agency, the Geodesy, Cartography and Cadastre Agency and the municipality. More on the [buying property](" + C + "/pokupka-na-imot) page.",
      ],
    },
    {
      h2: "Ownership disputes",
      blocks: [
        "When someone possesses your property without grounds, you can bring an ownership claim and demand the property back. Ownership can also be acquired by prescription – through continuous and open possession for 10 years, or 5 years for possession in good faith on a ground capable of making you the owner.",
        "Disputes are often between co-owners, heirs or neighbours – over boundaries, common parts, extensions. In such cases we first check the cadastre and the documents and then choose the shortest route – an agreement, an administrative correction or a lawsuit.",
      ],
    },
    {
      h2: "Property in Sofia – knowing the local specifics",
      blocks: [
        "Different parts of Sofia have different problems. In [Mladost](/rayoni/mladost) and the new complexes, off-plan purchases are most common. In the older districts – [Serdika](/rayoni/serdika), [Krasna Polyana](/rayoni/krasna-polyana) – inherited property and cadastral discrepancies. In the large housing estates such as [Nadezhda](/rayoni/nadezhda) and [Lyulin](/rayoni/lyulin) – flat sales and tenancies.",
      ],
    },
  ],
  faq: [
    { q: "Is a lawyer mandatory when buying property?", a: "It is not mandatory, but the notary checks only the formal conditions of the transaction. A lawyer protects your interests – checks the property, negotiates the terms and prevents risks." },
    { q: "How long does a property check take?", a: "Usually a few working days, depending on the available documents and the complexity of the property's history." },
    { q: "How is a mortgage deleted after the loan is repaid?", a: "With the bank's notarised consent, which is entered in the Property Register. A mortgage is also deleted automatically if it is not renewed within 10 years of registration." },
    { q: "What is acquisitive prescription?", a: "A way of acquiring ownership through open and continuous possession – 10 years, or 5 years for possession in good faith." },
  ],
  children: [
    {
      slug: "pokupka-na-imot",
      name: "Buying property and off-plan purchases",
      title: "Lawyer for Buying Property in Sofia – notarial deed, off-plan purchases, mortgages | Lawyer Angel Dimitrov",
      description:
        "Lawyer for buying property in Sofia: checking title and encumbrances, preliminary contract, off-plan purchases, notarial deed, mortgage deletion. ☎ +359 88 399 6666",
      h1: "Lawyer for Buying Property in Sofia",
      lead: "From the first viewing to the keys in your hand – property checks, a secure preliminary contract and a calm transaction at the notary.",
      excerpt: "Property check, preliminary contract, notarial deed, off-plan purchases, mortgages.",
      areas: ["mladost", "nadezhda", "krasna-polyana", "lyulin"],
      sections: [
        {
          h2: "The steps of a secure transaction",
          blocks: [
            { ol: [
              "**Property check** – title document, Property Register, cadastre, encumbrances.",
              "**Preliminary contract** – price, deposit, deadlines, penalties, financing conditions.",
              "**Preparing documents for the notary** – tax valuation, certificates, cadastral sketch.",
              "**Notarial deed** – signing at the notary and entry in the Property Register.",
              "**Handover of possession** – protocol, meter readings, keys.",
            ] },
          ],
        },
        {
          h2: "The preliminary contract is the most important document",
          blocks: [
            "Most problems arise not at the notary but with the preliminary contract. It determines the price, deposit, deadlines and the consequences of non-performance. A good preliminary contract provides for:",
            { ul: [
              "A clear description of the property with its cadastral identifier",
              "The amount of the deposit and what happens to it if either party withdraws",
              "A deadline for concluding the final contract",
              "The seller's obligation to delete mortgages using part of the price",
              "A condition in case the bank refuses the loan",
              "The condition in which the property is handed over",
            ] },
            "If the seller refuses to conclude the final contract, the buyer may bring a claim to declare the preliminary contract final. The statement of claim is entered in the Property Register, which protects the buyer against subsequent sales to third parties.",
          ],
        },
        {
          h2: "Off-plan purchases",
          blocks: [
            "Buying a flat under construction is the riskiest property transaction. The buyer pays instalments for something that does not yet exist and relies on the developer to finish on time and transfer ownership.",
            { table: {
              head: ["Risk", "How it is reduced"],
              rows: [
                ["The developer has no right to build", "Checking the building right and the building permit"],
                ["A mortgage in favour of the developer's bank", "An obligation to delete it before transfer"],
                ["Construction delays", "Clear deadlines and penalties in the contract"],
                ["Deviation from the plans", "Description of areas and a specification of finishes"],
                ["Developer insolvency", "Payments linked to construction stages (Acts 14, 15, 16)"],
              ],
            } },
          ],
        },
        {
          h2: "Mortgages and encumbrances",
          blocks: [
            "If the property is mortgaged, the mortgage “follows” the property even when the owner changes. That is why it should be deleted before or at the transaction. The usual practice is for part of the price to be paid directly to the seller's bank, which issues consent to deletion. A mortgage is also deleted if it is not renewed within 10 years of registration.",
            "If a dispute arises – non-performance, delay, poor construction – see [contract disputes](/uslugi/grazhdansko-pravo/dogovorni-sporove). If you are buying inherited property, check whether a [division](/uslugi/nasledstveno-pravo/delba) is needed. I assist buyers in [Mladost](/rayoni/mladost), [Nadezhda](/rayoni/nadezhda), [Krasna Polyana](/rayoni/krasna-polyana), [Lyulin](/rayoni/lyulin), all of Sofia and the rest of Bulgaria.",
          ],
        },
      ],
      faq: [
        { q: "What happens to the deposit if the seller withdraws?", a: "If the seller is in breach, he owes double the deposit, unless the contract provides otherwise." },
        { q: "Doesn't the notary check everything?", a: "The notary checks whether the seller is the owner and whether the formal requirements are met. The notary does not negotiate terms or protect the interests of either party." },
        { q: "Can I buy property without being in Bulgaria?", a: "Yes, through a representative with a notarised power of attorney." },
      ],
    },
    {
      slug: "naemni-sporove",
      name: "Tenancy disputes and evicting a tenant",
      title: "Tenancy Dispute Lawyer in Sofia – evicting a tenant, unpaid rent | Lawyer Angel Dimitrov",
      description:
        "Lawyer for tenancy disputes in Sofia: lease contracts, unpaid rent, vacating property and evicting a tenant, return of deposit. ☎ +359 88 399 6666",
      h1: "Tenancy Disputes and Evicting a Tenant in Sofia",
      lead: "The tenant does not pay and will not leave? Or the landlord refuses to return the deposit? Tenancy disputes are resolved fastest when you act lawfully and consistently.",
      excerpt: "Lease contracts, unpaid rent, vacating property, deposit.",
      areas: ["nadezhda", "lyulin", "mladost", "serdika"],
      sections: [
        {
          h2: "A good lease prevents disputes",
          blocks: [
            "A lease contract does not require a special form, but a written contract is a practical necessity. It should regulate the rent and payment method, the deposit, utilities, the term, the notice period for termination, the condition of the property and responsibility for repairs. A handover protocol with photos is advisable.",
          ],
        },
        {
          h2: "The tenant does not pay – what to do",
          blocks: [
            { ol: [
              "A written demand for payment with a reasonable deadline and a warning of termination.",
              "Termination of the contract – in writing, with proof of delivery.",
              "A claim for return of the property and for unpaid rent and utilities.",
              "Enforced handover of possession through a bailiff on the basis of the judgment.",
            ] },
            { note: "**Caution:** do not change the locks or remove the tenant's belongings yourself. This may be arbitrary self-help – a crime under the Criminal Code – and make you liable for damage. The property is vacated only through lawful procedures." },
            "Unpaid rent is subject to a three-year limitation period. Monetary claims can also be pursued through the order-for-payment procedure – see [debt recovery](/uslugi/grazhdansko-pravo/sabirane-na-vzemaniya).",
          ],
        },
        {
          h2: "Protecting tenants",
          blocks: [
            "I also act for tenants – when the landlord does not return the deposit, enters the property without permission, cuts off electricity or water, or terminates the contract without notice. The tenant has the right to peaceful use of the property throughout the term of the contract.",
            { table: {
              head: ["Tenant's problem", "Solution"],
              rows: [
                ["Deposit not returned", "A demand letter and a claim for return if there is no proven damage"],
                ["The landlord enters without permission", "A written warning and, if necessary, a report to the police"],
                ["The property has defects that prevent its use", "A demand for repair or a rent reduction"],
                ["Termination without notice", "Compensation for damage"],
              ],
            } },
          ],
        },
        {
          h2: "Tenancy disputes in Sofia",
          blocks: [
            "Tenancies are most common in the student and business districts and the large housing estates – [Mladost](/rayoni/mladost), [Lyulin](/rayoni/lyulin), [Nadezhda](/rayoni/nadezhda), [Serdika](/rayoni/serdika). I help landlords and tenants prepare the contract and, when needed, defend their rights in court. See also the general page on [property cases](/uslugi/imotni-dela).",
          ],
        },
      ],
      faq: [
        { q: "How long does it take to evict a tenant through the court?", a: "It depends on whether the tenant contests the claim. Usually a few months until the judgment and then enforcement through a bailiff." },
        { q: "Can the landlord keep the deposit?", a: "Only for unpaid amounts and proven damage to the property beyond normal wear and tear." },
        { q: "What notice is needed for an open-ended lease?", a: "Unless the contract provides otherwise, the law sets a one-month notice period for leases of dwellings and buildings." },
      ],
    },
  ],
};
