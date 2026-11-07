import type { Category } from "@/lib/types";

const C = "/uslugi/trudovo-pravo";

export const trudovo: Category = {
  slug: "trudovo-pravo",
  name: "Employment law",
  icon: "fa fa-briefcase",
  title: "Employment Lawyer in Sofia – unfair dismissal, unpaid wages, workplace accidents | Lawyer Angel Dimitrov",
  description:
    "Employment lawyer in Sofia, Bulgaria: protection against unlawful dismissal of employees and civil servants, unpaid wages, workplace accidents. ☎ +359 88 399 6666",
  h1: "Employment Lawyer in Sofia",
  lead: "Protecting employees, civil servants and employers – in dismissals, unpaid remuneration, workplace accidents and civil service relations.",
  excerpt: "Legal protection for employers and employees in employment or civil service relations and on their termination under the Labour Code or the Civil Servants Act.",
  areas: ["nadezhda", "mladost", "tsentar", "lyulin", "vrabnitsa"],
  sections: [
    {
      h2: "Employment disputes have short deadlines",
      blocks: [
        "Most employment disputes start unexpectedly – with a dismissal order, an unpaid salary or an accident at work. The Bulgarian Labour Code gives employees strong protection, but it must be sought in time. A claim to annul a dismissal, for example, must be filed within two months – after that even the most unlawful dismissal stands.",
        { note: "Employees do not pay court fees in employment cases when they are claimants. This makes protection accessible to everyone." },
      ],
    },
    {
      h2: "For employees",
      blocks: [
        { table: {
          head: ["Problem", "What can be achieved"],
          rows: [
            ["[Unlawful dismissal](" + C + "/nezakonno-uvolnenie)", "Annulment of the dismissal, reinstatement, compensation of up to 6 gross salaries"],
            ["[Unpaid wages and compensation](" + C + "/neizplateni-zaplati-i-trudova-zlopoluka)", "Payment of what is owed with interest, compensation for unused leave"],
            ["[Workplace accident](" + C + "/neizplateni-zaplati-i-trudova-zlopoluka)", "Compensation from the employer for pecuniary and non-pecuniary damage"],
            ["Disciplinary penalties", "Annulment of a reprimand or a warning of dismissal"],
            ["Harassment and discrimination", "Protection under the Protection against Discrimination Act and the Labour Code"],
          ],
        } },
      ],
    },
    {
      h2: "Civil servants",
      blocks: [
        "Civil servants are not employed under the Labour Code but under the Civil Servants Act. Their disputes – about appointment, appraisal, disciplinary penalties and dismissal – are decided by the administrative court, and the deadlines are even shorter: 14 days from notification of the act. Here my experience in the administration and in [administrative cases](/uslugi/administrativno-pravo) is particularly useful.",
      ],
    },
    {
      h2: "Workplace accidents and death at work",
      blocks: [
        "In the event of a workplace accident – and in case of death, to the relatives of the deceased – the employer owes compensation for pecuniary and non-pecuniary damage. I help with declaring the accident, collecting evidence and filing the claim – more on the [unpaid wages and workplace accidents](" + C + "/neizplateni-zaplati-i-trudova-zlopoluka) page.",
      ],
    },
    {
      h2: "For employers",
      blocks: [
        "Employers also need protection – a procedural mistake in a dismissal may cost six salaries in compensation and reinstatement of the employee. I help employers with:",
        { ul: [
          "Drafting employment contracts, job descriptions and internal rules",
          "Lawful disciplinary dismissal and redundancy procedures",
          "Agreements to terminate the employment contract",
          "Protection during inspections and [penalty decrees](/uslugi/administrativno-pravo/obzhalvane-na-nakazatelni-postanovleniya) of the Labour Inspectorate",
          "Representation in employment cases",
        ] },
      ],
    },
    {
      h2: "Key deadlines in employment disputes",
      blocks: [
        { table: {
          head: ["Dispute", "Deadline"],
          rows: [
            ["Annulment of dismissal, reinstatement, compensation", "2 months from termination"],
            ["Annulment of a disciplinary penalty (other than dismissal)", "1 month"],
            ["Unpaid wages and other monetary claims", "3 years"],
            ["Appeal against dismissal of a civil servant", "14 days"],
          ],
        } },
      ],
    },
    {
      h2: "Employment cases in Sofia",
      blocks: [
        "Employment cases are heard by the district court, and civil servants' cases by the Administrative Court Sofia City. I represent employees and employers from [Mladost](/rayoni/mladost) and the business districts, the [city centre](/rayoni/tsentar), [Nadezhda](/rayoni/nadezhda), [Lyulin](/rayoni/lyulin) and [Obelya](/rayoni/vrabnitsa).",
      ],
    },
  ],
  faq: [
    { q: "Should I sign the dismissal order?", a: "Your signature only confirms that you received it, not that you agree. Note the date of receipt. If you refuse, the employer may certify the refusal with witnesses." },
    { q: "Is there a court fee in an employment case?", a: "No, when the claimant is an employee. The fees are imposed on the employer if it loses the case." },
    { q: "Can I be dismissed while on sick leave?", a: "As a rule, the employer may dismiss an employee on leave, including sick leave, only with prior permission from the Labour Inspectorate on certain grounds. Breaching this rule makes the dismissal unlawful." },
    { q: "Do you also act for employers?", a: "Yes. I help employers comply with the procedures and represent them in employment cases and inspections." },
  ],
  children: [
    {
      slug: "nezakonno-uvolnenie",
      name: "Unlawful dismissal",
      title: "Unfair Dismissal Lawyer in Sofia – employees and civil servants | Lawyer Angel Dimitrov",
      description:
        "Unfair dismissal lawyer in Sofia: annulment of dismissal, reinstatement, compensation of up to 6 salaries. Employees under the Labour Code and civil servants. ☎ +359 88 399 6666",
      h1: "Unfair Dismissal Lawyer in Sofia",
      lead: "A dismissal can be annulled and you can be reinstated and compensated. You have 2 months (14 days for civil servants).",
      excerpt: "Annulment of dismissal, reinstatement, compensation – under the Labour Code and the Civil Servants Act.",
      areas: ["mladost", "tsentar", "nadezhda", "lyulin"],
      sections: [
        {
          h2: "What you can ask the court for",
          blocks: [
            "In case of unlawful dismissal under the Labour Code the employee may bring four claims, usually together:",
            { ol: [
              "**Declaration that the dismissal is unlawful and its annulment**",
              "**Reinstatement in the previous job**",
              "**Compensation** for the time out of work due to the dismissal – up to 6 months' gross salary",
              "**Correction of the ground** for dismissal in the employment record book and other documents",
            ] },
            "The claim is filed **within two months** of the termination of employment before the district court. The case is heard under the expedited procedure for employment disputes.",
          ],
        },
        {
          h2: "The most common grounds for unlawfulness",
          blocks: [
            { ul: [
              "The order is not reasoned or does not clearly state the ground",
              "In a disciplinary dismissal the employee was not heard before the penalty",
              "The deadlines for imposing a disciplinary penalty were missed",
              "In a redundancy, the selection was not made or was merely formal",
              "An employee with special protection was dismissed without prior permission – a mother of a child under 3, a person with reduced working capacity, a person with certain illnesses, an employee on leave",
              "The notice period was not observed or compensation was not paid",
            ] },
            "The burden of proving that the dismissal was lawful lies with the employer. This is a significant advantage for the employee.",
          ],
        },
        {
          h2: "Civil servants",
          blocks: [
            "Civil servants appeal the act of dismissal under the Administrative Procedure Code before the administrative court **within 14 days** of notification. If the act is annulled, the civil servant is reinstated and entitled to compensation. The procedure is also described on the [appeals against administrative acts](/uslugi/administrativno-pravo/obzhalvane-na-administrativni-aktove) page.",
            { table: {
              head: ["", "Employee under the Labour Code", "Civil servant under the Civil Servants Act"],
              rows: [
                ["Deadline", "2 months", "14 days"],
                ["Court", "District court", "Administrative court"],
                ["Compensation", "Up to 6 gross salaries", "Under the Civil Servants Act"],
              ],
            } },
          ],
        },
        {
          h2: "What to do immediately after dismissal",
          blocks: [
            { ol: [
              "Write down the date on which you received the order.",
              "Do not sign documents in which you “agree” to the termination.",
              "Collect the employment contract, annexes, orders and emails.",
              "Register with the labour office – this matters for compensation.",
              "Contact a lawyer before the deadline expires.",
            ] },
            "If, in addition to the dismissal, sums remain unpaid, see [unpaid wages](/uslugi/trudovo-pravo/neizplateni-zaplati-i-trudova-zlopoluka). I represent employees from [Mladost](/rayoni/mladost), the [city centre](/rayoni/tsentar), [Nadezhda](/rayoni/nadezhda), [Lyulin](/rayoni/lyulin), all of Sofia and the rest of Bulgaria.",
          ],
        },
      ],
      faq: [
        { q: "Can I get compensation without returning to work?", a: "Yes. The reinstatement claim is not mandatory. You can seek annulment of the dismissal and compensation without returning." },
        { q: "What if I have started a new job?", a: "Compensation is due for the time without work or in lower-paid work, so a new job reduces the amount but does not remove the right to claim." },
        { q: "When does the two-month period start?", a: "From the day the employment was terminated – usually from service of the order." },
      ],
    },
    {
      slug: "neizplateni-zaplati-i-trudova-zlopoluka",
      name: "Unpaid wages and workplace accidents",
      title: "Unpaid Wages and Workplace Accident Lawyer in Sofia | Lawyer Angel Dimitrov",
      description:
        "Lawyer for unpaid wages, compensation on termination and workplace accidents in Sofia. Compensation from the employer, deadlines, National Social Security Institute. ☎ +359 88 399 6666",
      h1: "Unpaid Wages and Workplace Accidents in Sofia",
      lead: "Your employer does not pay, or you were injured at work? The law gives you effective means to obtain what you are owed.",
      excerpt: "Unpaid remuneration and compensation on leaving, workplace accidents.",
      areas: ["nadezhda", "vrabnitsa", "lyulin", "mladost"],
      sections: [
        {
          h2: "Unpaid remuneration",
          blocks: [
            "Salary is the employer's main obligation. When it is not paid on time, the employee is entitled to it together with statutory default interest. The limitation period for employment claims is three years.",
            { table: {
              head: ["Type of claim", "When it is due"],
              rows: [
                ["Salary", "Monthly, by the date in the contract"],
                ["Compensation for unused paid annual leave", "On termination of the contract"],
                ["Redundancy compensation", "On dismissal due to redundancy, closure or reduced workload"],
                ["Retirement compensation", "On termination after acquiring the right to a pension – 2 or 6 gross salaries depending on length of service with the employer"],
                ["Compensation for failure to give notice", "When the contract is terminated without observing the notice period"],
              ],
            } },
          ],
        },
        {
          h2: "How unpaid sums are collected",
          blocks: [
            { ol: [
              "A written demand to the employer – with a payment deadline.",
              "A report to the Labour Inspectorate – it can issue a binding instruction and impose a sanction.",
              "An application for an enforcement order or a statement of claim to the district court – with no court fee for the employee.",
              "If the employer is insolvent – a claim to the Fund for Guaranteed Receivables of Employees.",
            ] },
            "More on enforcement orders on the [debt recovery](/uslugi/grazhdansko-pravo/sabirane-na-vzemaniya) page.",
          ],
        },
        {
          h2: "Workplace accidents",
          blocks: [
            "A workplace accident is any sudden harm to health that occurs during and in connection with or because of the work performed, as well as on the usual route from home to work and back. The accident must be declared to the National Social Security Institute – by the employer within a short period, and if it fails to do so, the injured person may declare it themselves.",
            "The employer is **financially liable** for damage from a workplace accident, regardless of whether it or another of its employees is at fault. Liability may be reduced only if the injured person contributed to the accident through gross negligence.",
            { ul: [
              "Compensation for pain and suffering",
              "The difference between the social security benefit and the full salary",
              "Medical and rehabilitation costs",
              "Compensation for relatives in case of death",
            ] },
            "If the accident happened on the way by car, there may also be a claim against an insurer – see [road accident compensation](/uslugi/grazhdansko-pravo/obezshteteniya-pri-ptp).",
          ],
        },
        {
          h2: "Representing employees in Sofia",
          blocks: [
            "I work with employees from construction, manufacturing, logistics and retail, many of whom live in the northern and western districts – [Nadezhda](/rayoni/nadezhda), [Obelya and Vrabnitsa](/rayoni/vrabnitsa), [Lyulin](/rayoni/lyulin) – as well as with office staff from [Mladost](/rayoni/mladost). If, in addition to non-payment, you have been dismissed, see [unfair dismissal](/uslugi/trudovo-pravo/nezakonno-uvolnenie).",
          ],
        },
      ],
      faq: [
        { q: "How long do I have to claim unpaid wages?", a: "Three years from the date on which they should have been paid." },
        { q: "Does the employer owe compensation if the accident was my fault?", a: "Yes, unless you acted intentionally. With gross negligence the compensation may be reduced, but it does not disappear." },
        { q: "What if the employer does not declare the accident?", a: "You can declare it yourself to the National Social Security Institute. Do it as soon as possible and keep the medical documents." },
      ],
    },
  ],
};
