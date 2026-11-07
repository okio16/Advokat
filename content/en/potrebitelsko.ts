import type { Category } from "@/lib/types";

const C = "/uslugi/potrebitelsko-pravo";

export const potrebitelsko: Category = {
  slug: "potrebitelsko-pravo",
  name: "Consumer law",
  icon: "fa fa-file-contract",
  title: "Consumer Protection Lawyer in Sofia – payday loans, unfair terms, complaints | Lawyer Angel Dimitrov",
  description:
    "Consumer law lawyer in Sofia with 6 years at the Consumer Protection Commission: unfair contract terms, consumer credit, product complaints, sanctions against traders. ☎ +359 88 399 6666",
  h1: "Consumer Protection Lawyer in Sofia",
  lead: "Six years as legal adviser and litigation counsel of the Commission for Consumer Protection. Today I protect consumers and traders with knowledge “from the inside”.",
  excerpt: "Advice and legal protection for consumers and traders under the Consumer Protection Act, the Consumer Credit Act and other laws.",
  areas: ["nadezhda", "lyulin", "mladost", "vrabnitsa", "serdika"],
  sections: [
    {
      h2: "Rare experience",
      blocks: [
        "From 2018 to 2024 I worked as a legal adviser at the Commission for Consumer Protection and represented the Commission before the courts. This means I know consumer legislation from practice as well – inspections, complaints, sanctions and court cases.",
        "This experience is valuable to both sides. Consumers get a lawyer who knows their rights and how to enforce them. Traders get a lawyer who knows how the regulator thinks and how to defend against unfounded sanctions.",
      ],
    },
    {
      h2: "Protecting consumers",
      blocks: [
        { table: {
          head: ["Problem", "What can be done"],
          rows: [
            ["Defective or non-conforming goods", "A complaint – repair, replacement, price reduction or refund"],
            ["Online purchase", "Right of withdrawal within 14 days without giving a reason, subject to the statutory exceptions"],
            ["Payday or bank loan with high costs", "Checking for invalidity of the contract or void terms – see [consumer credit](" + C + "/kreditni-dogovori-zpk)"],
            ["Unfair terms in a contract", "The term is void – it does not bind the consumer"],
            ["Unfair and misleading commercial practices", "Report to the Consumer Protection Commission, claim for compensation"],
            ["Package holidays, air travel", "Compensation for cancelled and delayed flights, unperformed package services"],
          ],
        } },
        "The legal guarantee for goods is two years from delivery. The commercial warranty provided by the seller is additional and cannot limit the legal guarantee.",
      ],
    },
    {
      h2: "Unfair contract terms",
      blocks: [
        "Any term to the detriment of the consumer that does not meet the requirement of good faith and leads to a significant imbalance between the rights and obligations of the parties is unfair. Such terms are void unless individually negotiated.",
        { ul: [
          "The trader's right to change the price or terms unilaterally",
          "Excessively high penalties and fees",
          "Exclusion of the trader's liability",
          "Terms the consumer had no real opportunity to read",
          "Currency clauses that shift the entire risk to the consumer",
        ] },
      ],
    },
    {
      h2: "Laws under which I protect consumers and traders",
      blocks: [
        { ul: [
          "Consumer Protection Act",
          "Act on the Supply of Digital Content and Digital Services and the Sale of Goods",
          "Consumer Credit Act – see [payday loans and consumer credit](" + C + "/kreditni-dogovori-zpk)",
          "Consumer Real Estate Credit Act",
          "Ordinance on the Activity of Pawnshops",
          "Other laws relevant to consumer law",
        ] },
      ],
    },
    {
      h2: "Protecting traders",
      blocks: [
        "Traders also need protection – during Consumer Protection Commission inspections, penalty decrees, coercive administrative measures and disputes with customers. I help with:",
        { ul: [
          "Drafting terms and conditions, return and complaint policies that comply with the law",
          "Responses to complaints and statements to the Commission",
          "[Appeals against penalty decrees](/uslugi/administrativno-pravo/obzhalvane-na-nakazatelni-postanovleniya) of the Commission and other regulators",
          "Appeals against orders for [coercive administrative measures](/uslugi/administrativno-pravo/obzhalvane-na-administrativni-aktove)",
          "Disputes with consumers before the courts and conciliation commissions",
        ] },
      ],
    },
    {
      h2: "The path of a consumer complaint",
      blocks: [
        { ol: [
          "A written complaint or claim to the trader – keep a copy and proof of submission.",
          "A report to the Commission for Consumer Protection or a conciliation commission if the trader refuses.",
          "A claim before the district court – for a refund, compensation or a declaration that a term is void.",
        ] },
        "The second step is often enough, but when the trader does not cooperate, the next step is the court. Consumer cases are also part of my [civil law practice](/uslugi/grazhdansko-pravo).",
        "I hold meetings at the office in [Nadezhda](/rayoni/nadezhda), and consumers from [Lyulin](/rayoni/lyulin), [Mladost](/rayoni/mladost) and [Obelya](/rayoni/vrabnitsa) can send their documents online.",
      ],
    },
  ],
  faq: [
    { q: "How long do I have to return goods bought online?", a: "As a rule 14 days from receipt, without giving a reason. There are exceptions – for example made-to-order or perishable goods." },
    { q: "The trader rejects my complaint. What should I do?", a: "File a written objection and, if refused, report to the Commission or bring a claim in court. I will review the documents and point out the fastest route." },
    { q: "Can I stop paying a loan if the contract is invalid?", a: "If a consumer credit contract is invalid, you owe only the net amount received, without interest and fees. This is established by the court." },
    { q: "Do you also defend companies against the Commission?", a: "Yes. My experience at the Commission allows me to defend traders effectively both during inspections and in court." },
  ],
  children: [
    {
      slug: "kreditni-dogovori-zpk",
      name: "Payday loans and consumer credit",
      title: "Payday Loan and Consumer Credit Lawyer in Sofia – invalid contracts, guarantor fees, APR | Lawyer Angel Dimitrov",
      description:
        "Consumer credit lawyer in Sofia: invalid contracts under the Consumer Credit Act, guarantor fees, APR above the limit, debt collectors, enforcement orders. ☎ +359 88 399 6666",
      h1: "Payday Loans and Consumer Credit Lawyer in Sofia",
      lead: "A quick loan that has turned into an unbearable debt? Many consumer credit contracts contain terms that the law declares void.",
      excerpt: "Invalid contracts, guarantor fees, APR above the statutory limit, debt collectors.",
      areas: ["lyulin", "vrabnitsa", "nadezhda", "serdika"],
      sections: [
        {
          h2: "What the Consumer Credit Act protects",
          blocks: [
            "The Bulgarian Consumer Credit Act sets strict requirements for contracts concluded by non-bank lenders and banks with consumers. The contract must be written clearly, in a font no smaller than 12 points, and must state the annual percentage rate of charge (APR), the total amount, the repayment schedule and other mandatory details.",
            "The APR may not exceed five times the statutory interest rate. Terms exceeding it are void.",
          ],
        },
        {
          h2: "Invalid contract – you repay only the principal",
          blocks: [
            "When the contract does not meet certain requirements of the Act – for example the APR is stated incorrectly or the amount actually owed is not reflected – it is invalid. The consequence is extremely favourable for the consumer: **only the net amount of the credit is owed**, without interest, fees or penalties.",
            { table: {
              head: ["Common violation", "Consequence"],
              rows: [
                ["A “guarantor” fee not included in the APR", "Circumvention of the law, voidness and often invalidity of the contract"],
                ["Penalty for not providing security", "Void term, a hidden increase in the cost of credit"],
                ["Fee for “express processing”", "Void – shifts lending costs onto the consumer"],
                ["Incorrectly stated APR", "Invalidity of the contract"],
              ],
            } },
          ],
        },
        {
          h2: "Debt collectors and enforcement orders",
          blocks: [
            "If the debt has been assigned to a collection agency, it acquires no more rights than the original lender. All objections against the contract also apply against the agency. Collectors may not threaten you or harass your relatives or employer.",
            "If you receive an enforcement order, you have **two weeks** to object. Do not miss it – otherwise the order becomes final and garnishments may follow. More on enforcement orders on the [debt recovery](/uslugi/grazhdansko-pravo/sabirane-na-vzemaniya) page.",
          ],
        },
        {
          h2: "Can I get back what I have already paid?",
          blocks: [
            "Yes. If you paid sums under void terms – for example guarantor fees – you can bring a claim for their repayment. The limitation period is five years. This also applies to loans already repaid.",
            "I help clients from all over Sofia and Bulgaria – from [Lyulin](/rayoni/lyulin), [Obelya](/rayoni/vrabnitsa) and [Serdika](/rayoni/serdika) to [Nadezhda](/rayoni/nadezhda). All you need for the consultation is a copy of the contract and the repayment schedule. See also the general page on [consumer law](/uslugi/potrebitelsko-pravo).",
          ],
        },
      ],
      faq: [
        { q: "What is the APR?", a: "The annual percentage rate of charge shows the total cost of the credit for one year – interest, fees and other costs. By law it may not exceed five times the statutory interest rate." },
        { q: "Do I have to pay the guarantor fee?", a: "In many cases the courts hold that such a fee is void because it circumvents the APR limit. This is assessed for each specific contract." },
        { q: "Can I repay the loan early?", a: "Yes. The consumer may repay the credit early in full or in part at any time, with interest and costs reduced for the remaining period." },
      ],
    },
  ],
};
