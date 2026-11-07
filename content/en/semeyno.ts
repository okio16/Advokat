import type { Category } from "@/lib/types";

const C = "/uslugi/semeyno-pravo";

export const semeyno: Category = {
  slug: "semeyno-pravo",
  name: "Family law",
  icon: "fa fa-users",
  title: "Family Lawyer in Sofia – divorce, child support, parental rights | Lawyer Angel Dimitrov",
  description:
    "Family lawyer in Sofia, Bulgaria: divorce by mutual consent and contested divorce, child support, parental rights and contact arrangements, domestic violence. ☎ +359 88 399 6666",
  h1: "Family Lawyer in Sofia",
  lead: "Divorce, child support, parental rights and protection from domestic violence. What you tell me stays confidential, and you know what comes next at every step.",
  excerpt: "Legal protection and advice on divorce, child support, parental rights and protection from domestic violence.",
  areas: ["nadezhda", "lyulin", "mladost", "krasna-polyana", "vrabnitsa"],
  sections: [
    {
      h2: "Family cases require a different approach",
      blocks: [
        "Family disputes are not just legal cases. They involve children, a shared home, years of life together and strong emotions. My task is to bring clarity and predictability – so that you know your rights, what is realistic to achieve and how to achieve it with as little tension as possible for you and the children.",
        "Whenever possible, I seek an agreement. It is faster, cheaper and preserves the relationship between the parents. When an agreement is not possible, I firmly defend your interests in court.",
      ],
    },
    {
      h2: "Guardianship, curatorship, adoption and marriage contracts",
      blocks: [
        "In addition to representation in [divorce by mutual consent and contested divorce](" + C + "/razvod), I assist with:",
        { ul: [
          "**Guardianship and curatorship** – establishing guardianship for minors and curatorship for adolescents whose parents have died, are unknown or have lost parental rights, as well as for persons placed under legal incapacity",
          "**Adoption** – preparing the documents and consents and representation in the court proceedings for full or partial adoption",
          "**Marriage contract** – drafting a marriage contract in which the spouses regulate their property relations during the marriage and upon its termination",
        ] },
      ],
    },
    {
      h2: "Family law services",
      blocks: [
        { table: {
          head: ["Service", "What it includes"],
          rows: [
            ["[Divorce](" + C + "/razvod)", "Divorce by mutual consent, contested divorce, settlement, family home, surname"],
            ["[Child support and parental rights](" + C + "/izdrazhka-i-roditelski-prava)", "Setting, increasing or reducing child support, parental rights, contact arrangements, travel abroad"],
            ["[Protection from domestic violence](" + C + "/domashno-nasilie)", "Emergency protection order, protection order, removal from the home"],
            ["Property relations", "Marital community property, division after divorce – see [division of property](/uslugi/nasledstveno-pravo/delba)"],
            ["Marriage contract", "Drafting a marriage contract and choosing a property regime"],
          ],
        } },
      ],
    },
    {
      h2: "Divorce – by mutual consent or contested",
      blocks: [
        "When both spouses agree to divorce and can reach agreement on all issues, divorce by mutual consent is the fastest route – it often ends after a single court hearing. If there is no agreement, divorce is sought by a statement of claim on the grounds of a deep and irretrievable breakdown of the marriage.",
        "In both cases the issues of parental rights, contact arrangements, child support, use of the family home and the surname must be resolved. A detailed description is available on the [divorce](" + C + "/razvod) page.",
      ],
    },
    {
      h2: "The child's interest comes first",
      blocks: [
        "In all decisions concerning children, the court is guided by their interest. It takes into account the parenting abilities of the parents, the care provided so far, the child's attachment, housing conditions and help from relatives. The child's opinion is also heard once the child reaches a certain age.",
        { ul: [
          "The minimum child support is one quarter of the national minimum wage",
          "Contact arrangements should be realistic and specific",
          "Travel abroad by the child requires the consent of both parents or court permission",
          "Child support and contact arrangements can be changed if circumstances change",
        ] },
      ],
    },
    {
      h2: "Discretion and speed",
      blocks: [
        "Everything you share with me remains confidential. Meetings take place at the office in [Nadezhda 2](/rayoni/nadezhda), convenient for clients from [Lyulin](/rayoni/lyulin), [Obelya and Vrabnitsa](/rayoni/vrabnitsa), and online when needed. I also work with parents from [Mladost](/rayoni/mladost) and [Krasna Polyana](/rayoni/krasna-polyana).",
        "Family cases are often intertwined with inheritance and property issues – see also [inheritance law](/uslugi/nasledstveno-pravo).",
      ],
    },
  ],
  faq: [
    { q: "How long does a divorce by mutual consent take?", a: "Usually from a few weeks to a few months, depending on the court's workload. The case normally ends after one hearing." },
    { q: "What is the minimum child support?", a: "One quarter of the national minimum wage. The court sets the specific amount according to the child's needs and the parent's means." },
    { q: "Can the father be granted parental rights?", a: "Yes. The law does not favour either parent – the decision is based on the child's interest." },
    { q: "Do I have to attend the divorce hearing in person?", a: "In a divorce by mutual consent the spouses must appear in person. In a contested divorce attendance is also important, especially at the first hearing." },
    { q: "How is property divided on divorce?", a: "Property acquired during the marriage under the community regime is jointly owned. Division can be done by agreement or through the court." },
  ],
  children: [
    {
      slug: "razvod",
      name: "Divorce",
      title: "Divorce Lawyer in Sofia – mutual consent and contested divorce | Lawyer Angel Dimitrov",
      description:
        "Divorce lawyer in Sofia: divorce by mutual consent, contested divorce, settlement on children, child support, home and property. Discreet and fast. ☎ +359 88 399 6666",
      h1: "Divorce Lawyer in Sofia",
      lead: "Divorce is a difficult moment. A clear settlement and good preparation make it faster, cheaper and less painful.",
      excerpt: "Divorce by mutual consent, contested divorce, settlement, home and property.",
      areas: ["nadezhda", "lyulin", "mladost", "krasna-polyana"],
      sections: [
        {
          h2: "Two ways to divorce",
          blocks: [
            { table: {
              head: ["", "By mutual consent", "Contested divorce"],
              rows: [
                ["When", "Both spouses want a divorce and have reached a settlement", "No agreement on the divorce or its consequences"],
                ["Grounds", "Serious and firm mutual consent", "Deep and irretrievable breakdown of the marriage"],
                ["Duration", "Usually one hearing", "Several hearings, witnesses, social report"],
                ["Fault", "Not discussed", "A ruling on fault may be requested"],
                ["Costs", "Lower", "Higher"],
              ],
            } },
          ],
        },
        {
          h2: "What the settlement contains",
          blocks: [
            "In a divorce by mutual consent the court approves the spouses' settlement if it protects the children's interests. The settlement must cover:",
            { ol: [
              "With whom the children will live and who will exercise parental rights",
              "Contact arrangements with the other parent – weekdays, weekends, holidays, festive days",
              "The amount of child support",
              "Use of the family home",
              "The surname after divorce",
              "Maintenance between the spouses, if any",
              "Property relations – optionally",
            ] },
            "A well-drafted settlement prevents future disputes. Vague wording such as “free contact” or “by arrangement” often leads to new cases.",
          ],
        },
        {
          h2: "Contested divorce – how it works",
          blocks: [
            "A contested divorce starts with a statement of claim to the district court. The case goes through a mandatory reconciliation hearing, collection of evidence, hearing of witnesses and a social report from the Social Assistance Directorate when there are minor children. The court may order interim measures – with whom the children live, interim child support and use of the home until the case ends.",
            "At a spouse's request, the court may also rule on fault for the breakdown of the marriage. It matters, for example, for maintenance between the spouses.",
          ],
        },
        {
          h2: "After the divorce",
          blocks: [
            "After a divorce, questions often remain about dividing joint property, complying with contact arrangements or changing child support. See [child support and parental rights](/uslugi/semeyno-pravo/izdrazhka-i-roditelski-prava) and [division of property](/uslugi/nasledstveno-pravo/delba). If there is violence in the family, take care of your safety first – [protection from domestic violence](/uslugi/semeyno-pravo/domashno-nasilie).",
            "I work with clients from all over Sofia and Bulgaria; the office is in [Nadezhda](/rayoni/nadezhda) – close to [Lyulin](/rayoni/lyulin) and the northern districts.",
          ],
        },
      ],
      faq: [
        { q: "Can a divorce happen without a court?", a: "No. In Bulgaria divorce is granted only by a court, but with mutual consent the procedure is short." },
        { q: "What if one spouse is abroad?", a: "In a contested divorce this is not an obstacle. A divorce by mutual consent requires personal appearance, so it has to be planned." },
        { q: "Who pays the court fees?", a: "With mutual consent they are usually shared. In a contested divorce the court allocates them in its judgment." },
      ],
    },
    {
      slug: "izdrazhka-i-roditelski-prava",
      name: "Child support and parental rights",
      title: "Child Support and Parental Rights Lawyer in Sofia – contact arrangements | Lawyer Angel Dimitrov",
      description:
        "Lawyer for child support and parental rights in Sofia: setting and changing child support, contact arrangements, custody, a child's travel abroad. ☎ +359 88 399 6666",
      h1: "Child Support and Parental Rights in Sofia",
      lead: "Child support, parental rights and contact arrangements shape a child's daily life. The decisions must be fair and workable.",
      excerpt: "Setting and changing child support, parental rights, contact arrangements, travel abroad.",
      areas: ["nadezhda", "lyulin", "vrabnitsa", "mladost"],
      sections: [
        {
          h2: "Child support",
          blocks: [
            "Both parents are obliged to support their minor children, regardless of whether the children can support themselves from their own property. The amount is set according to the child's needs and the means of the parent who owes it. The minimum amount is one quarter of the minimum wage.",
            { table: {
              head: ["Situation", "What can be claimed"],
              rows: [
                ["The parent does not pay child support", "A claim for child support, including up to one year in arrears"],
                ["The child's needs have increased", "An increase in child support"],
                ["The parent's income has permanently decreased", "A reduction in child support"],
                ["An adult child is studying", "Support until completing secondary (up to age 20) or higher education (up to 25), under the conditions of the law"],
              ],
            } },
            "Child support changes when circumstances change permanently – for example when the child starts school, new medical needs arise or income changes.",
          ],
        },
        {
          h2: "Parental rights",
          blocks: [
            "When the parents do not live together, the court decides with whom the child will live and who will exercise parental rights. The criteria are the parenting abilities of the parents, the care provided so far, the child's attachment, the social environment, housing conditions and help from relatives. The child is heard from the age of 10, and earlier if the court considers it appropriate.",
            "The decision is not final forever. If circumstances change – for example if the parent does not provide care or constantly obstructs contact with the other parent – the arrangement can be changed.",
          ],
        },
        {
          h2: "Contact arrangements",
          blocks: [
            "The contact arrangement determines when the child will be with the other parent. A good arrangement is specific: it sets days, times, how the child is picked up and returned, holidays and festive days. The more specific it is, the fewer reasons for disputes.",
            { ul: [
              "Weekend contact – every other week or every week",
              "Weekdays – dinner, training, school activities",
              "Summer and winter holidays",
              "Birthdays and festive days – alternating",
              "Contact for grandparents – can also be ordered by the court",
            ] },
          ],
        },
        {
          h2: "A child's travel abroad",
          blocks: [
            "Issuing a passport and travelling abroad with a child requires the consent of both parents. When one parent refuses without good reason, the other may ask the court for permission. The case is heard under an expedited procedure.",
            "These issues are usually resolved in a [divorce](/uslugi/semeyno-pravo/razvod), but can also be raised separately – whether or not the parents were married. I advise parents from [Nadezhda](/rayoni/nadezhda), [Lyulin](/rayoni/lyulin), [Obelya](/rayoni/vrabnitsa), [Mladost](/rayoni/mladost), all of Sofia and the rest of Bulgaria.",
          ],
        },
      ],
      faq: [
        { q: "What can I do if my former partner does not pay child support?", a: "You can request a writ of execution and start enforcement. Failure to pay child support for more than two months may also be a crime." },
        { q: "Can child support be paid directly to the child?", a: "When the child is a minor, child support is received by the parent with whom the child lives, unless the court decides otherwise." },
        { q: "Can I ask for contact if I was not married to the other parent?", a: "Yes. Parental rights and obligations do not depend on marriage." },
      ],
    },
    {
      slug: "domashno-nasilie",
      name: "Protection from domestic violence",
      title: "Domestic Violence Lawyer in Sofia – protection order, emergency protection | Lawyer Angel Dimitrov",
      description:
        "Lawyer for domestic violence in Sofia: emergency protection order, protection order, removal from the home, restraining order. Discreet. ☎ +359 88 399 6666",
      h1: "Protection from Domestic Violence in Sofia",
      lead: "If you are in danger, call 112. After that the law gives you fast judicial protection – an order that obliges the abuser to stay away.",
      excerpt: "Emergency protection order, protection order, removal from the home.",
      areas: ["nadezhda", "lyulin", "serdika", "vrabnitsa"],
      sections: [
        {
          h2: "What domestic violence is",
          blocks: [
            "The Protection from Domestic Violence Act covers not only physical violence but also psychological, emotional, sexual and economic violence, attempts at such violence, forced restriction of personal freedom and harassment. Protection covers spouses, former spouses, persons in an intimate relationship, relatives, children and other persons listed in the law.",
          ],
        },
        {
          h2: "What measures the court can impose",
          blocks: [
            { ul: [
              "Obliging the perpetrator to refrain from violence",
              "Removing the perpetrator from the shared home for a set period",
              "Prohibiting approach to the victim, their home, workplace and places of social contact",
              "Temporarily placing the child's residence with the victim parent",
              "Obliging the perpetrator to attend specialised programmes",
              "Referring the victim, at their request, to recovery programmes",
            ] },
          ],
        },
        {
          h2: "The procedure step by step",
          blocks: [
            { ol: [
              "**Application to the district court** at the victim's current address. It must be filed within a short statutory period from the act of violence – so do not delay.",
              "**Emergency protection order** – in case of direct and immediate danger the court issues it within 24 hours without summoning the other party.",
              "**Open hearing** – the court hears the parties and collects evidence.",
              "**Protection order** – with specific measures and duration.",
            ] },
            "Breaching a protection order is a crime and the police must react immediately.",
            { note: "Evidence: medical documents, photos, messages, recordings, witness statements, reports to the police. Keep everything." },
          ],
        },
        {
          h2: "Criminal proceedings and divorce",
          blocks: [
            "In addition to proceedings under the Protection from Domestic Violence Act, serious cases are also prosecuted under the Criminal Code. As a [lawyer for victims of crime](/uslugi/nakazatelno-pravo/advokat-na-postradal) I can also represent you in the criminal case. Violence is also an important fact in a [divorce](/uslugi/semeyno-pravo/razvod) and when deciding on [parental rights](/uslugi/semeyno-pravo/izdrazhka-i-roditelski-prava).",
            "Consultations are completely confidential. I meet at the office in [Nadezhda](/rayoni/nadezhda) or at a place that is safe for you. I help victims from [Lyulin](/rayoni/lyulin), [Serdika](/rayoni/serdika), [Obelya](/rayoni/vrabnitsa), all of Sofia and the rest of Bulgaria.",
          ],
        },
      ],
      faq: [
        { q: "Do I need a medical certificate?", a: "It is not mandatory, but it is strong evidence. For emergency protection the court may issue an order based on the victim's declaration alone." },
        { q: "Is there a state fee?", a: "No. The victim does not pay a fee – it is imposed on the perpetrator if the court issues an order." },
        { q: "Can the abuser be removed from the home if it is theirs?", a: "Yes. The court may remove the abuser from the shared home for a set period, regardless of who owns it." },
      ],
    },
  ],
};
