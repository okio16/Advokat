import type { Category } from "@/lib/types";

const C = "/uslugi/nakazatelno-pravo";

export const nakazatelno: Category = {
  slug: "nakazatelno-pravo",
  name: "Criminal law",
  icon: "fa fa-balance-scale",
  title: "Criminal Defence Lawyer in Sofia – defence on arrest, charges and trial | Lawyer Angel Dimitrov",
  description:
    "Criminal defence lawyer in Sofia, Bulgaria: defence of suspects and defendants, presence on arrest, remand hearings, drug cases, theft, drink-driving. ☎ +359 88 399 6666",
  h1: "Criminal Defence Lawyer in Sofia",
  lead: "Legal defence before the police, investigators, prosecutors and courts – for people accused of crimes and for victims of crime. From the first hour of arrest to the final judgment.",
  excerpt: "Legal defence before the police, investigators, prosecutors and courts for people accused of crimes and for victims of crime.",
  areas: ["tsentar", "nadezhda", "lyulin", "vrabnitsa", "serdika"],
  sections: [
    {
      h2: "When you need a criminal lawyer",
      blocks: [
        "Criminal proceedings rarely start “on schedule”. Usually it is a phone call summoning you to the police, a relative arrested during the night or a letter from the prosecutor's office. At that moment the most important thing is not to make statements, not to sign documents you do not understand and to contact a lawyer as early as possible. Decisions taken in the first 24–72 hours often determine the course of the whole case.",
        "As a criminal defence lawyer in Sofia I defend people charged as accused persons, defendants at trial, witnesses who are concerned about their position, and victims who want to be heard and compensated.",
        { ul: [
          "Summons for questioning at a police station or by an investigator",
          "[Arrest by the police or detention by a prosecutor](" + C + "/merki-za-protsesualna-prinuda) and a request for a remand measure",
          "Being formally charged and the presentation of the investigation file",
          "An indictment filed with the court or an offer for a plea agreement",
          "Personal search, search of premises and seizure at home, in an office or a car",
          "Victims of crime who want compensation and an active role in the proceedings",
        ] },
      ],
    },
    {
      h2: "How criminal proceedings work in Bulgaria",
      blocks: [
        "Bulgarian criminal procedure has two main phases – pre-trial and trial. Understanding them helps you know what lies ahead and what can be done at each stage.",
        { table: {
          head: ["Phase", "Who conducts the case", "What the defence does"],
          rows: [
            ["Preliminary check / pre-trial proceedings", "Police investigator or investigating magistrate supervised by a prosecutor", "Attends interviews, requests evidence, appeals unlawful actions, prepares the position"],
            ["Remand measure", "District or regional (city) court at the prosecutor's request", "Opposes custody, proposes a lighter measure, appeals within 3 days"],
            ["Trial – first instance", "District or regional court depending on the gravity of the offence", "Plea agreement, summary trial or full trial, closing speech"],
            ["Appeal and cassation", "City / appellate court, Supreme Court of Cassation", "Appeals against the judgment, new evidence, legal arguments"],
          ],
        } },
        "At each stage there are procedural deadlines that cannot be restored if missed. That is why the defence lawyer should be involved from the first police summons, not only when the case reaches court.",
      ],
    },
    {
      h2: "Defence of accused persons and defendants",
      blocks: [
        "I defend accused persons and defendants charged with offences under the Bulgarian Criminal Code, including:",
        { ul: [
          "theft and robbery, embezzlement and extortion",
          "insult and defamation",
          "murder and bodily harm",
          "driving under the influence of alcohol or drugs",
          "indecent assault, rape and other sexual offences",
          "military offences",
        ] },
        "If you have been arrested or the prosecutor seeks a remand measure, see [coercive measures and detention](" + C + "/merki-za-protsesualna-prinuda).",
      ],
    },
    {
      h2: "Cases I handle",
      blocks: [
        { h3: "Offences against property" },
        "[Theft and robbery](" + C + "/krazhba-i-grabezh), embezzlement, fraud, handling stolen goods. Here there is often room for a “minor case” qualification, compensation of the damage and a lighter sentence.",
        { h3: "Drug offences" },
        "Possession for personal use, possession with intent to supply, cultivation. The quantity, the type of substance and the lawfulness of the search are decisive – more on the [drug cases](" + C + "/narkotitsi) page.",
        { h3: "Traffic offences" },
        "[Driving under the influence of alcohol or drugs](" + C + "/shofirane-v-netrezvo-sastoyanie), driving without a licence, road accidents with injured persons. Apart from the sentence, the fate of the car and the driving licence matters too.",
        { h3: "Offences against the person" },
        "Bodily harm, threats, hooliganism, privately prosecuted offences (insult and defamation), including defence in sexual offence cases, where discretion is paramount.",
        { h3: "Corporate offences" },
        "Tax offences, document fraud, breach of trust, offences by officials. Defending managers and employees requires a combination of criminal and commercial law.",
      ],
    },
    {
      h2: "What I do as your defence lawyer",
      blocks: [
        { ol: [
          "**Quick meeting** – at the office in Nadezhda, at the police station or at the detention facility.",
          "**Case analysis** – reviewing the materials of the investigation and assessing the evidence.",
          "**Strategy** – whether to give a statement, whether to seek a plea agreement or to fight the case to the end.",
          "**Active defence** – requests for expert reports and witnesses, challenging unlawfully obtained evidence.",
          "**Court representation** – from the preliminary hearing to the closing speech and appeals.",
        ] },
        "Six years as litigation counsel for the Commission for Consumer Protection gave me solid courtroom practice, and my work on administrative penalty cases – a thorough understanding of how state authorities collect evidence and how it can be challenged.",
      ],
    },
    {
      h2: "Representing victims of crime",
      blocks: [
        "A criminal case is not only the prosecutor's business. The victim may take part as a private prosecutor and civil claimant, claim compensation within the criminal proceedings and appeal a decision to terminate the case. Read more on the [lawyer for victims of crime](" + C + "/advokat-na-postradal) page.",
        "And if you already have a conviction on your criminal record, see when and how [rehabilitation](" + C + "/reabilitatsiya) is achieved.",
      ],
    },
    {
      h2: "Criminal defence in Sofia and throughout Bulgaria",
      blocks: [
        "Most of my cases are heard in the Sofia courts – the Sofia District Court and the Sofia City Court in the [Palace of Justice in the city centre](/rayoni/tsentar). The office is in [Nadezhda](/rayoni/nadezhda), from where I quickly reach the police stations in the north-western districts, including [Lyulin](/rayoni/lyulin) and [Vrabnitsa and Obelya](/rayoni/vrabnitsa). When necessary, I travel to courts throughout the country.",
        { note: "**Important:** if someone close to you has been arrested, call **+359 88 399 6666** immediately. A detained person has the right to a lawyer from the moment of arrest and may refuse to make a statement until the lawyer arrives." },
      ],
    },
  ],
  faq: [
    { q: "Do I have to give a statement to the police without a lawyer?", a: "No. The accused has the right to remain silent and to ask for a defence lawyer. It is best to discuss the situation with a lawyer first and only then decide whether and what to say." },
    { q: "How long can I be detained?", a: "Police detention lasts up to 24 hours. A prosecutor may order detention of up to 72 hours in order to bring you before the court that decides on the remand measure." },
    { q: "What is a plea agreement and is it worth it?", a: "A plea agreement is an arrangement between the prosecutor and the defence on the sentence, approved by the court. It can be beneficial, but it has the effect of a final judgment, so the decision should be taken after assessing the evidence." },
    { q: "Can I be released from criminal liability?", a: "For some less serious intentional offences and for negligent offences the law allows release from criminal liability with an administrative penalty – a fine. The conditions are strict and are assessed case by case." },
    { q: "Do you work outside office hours in case of arrest?", a: "In case of arrest I respond as quickly as possible, including outside regular office hours. Call the office phone." },
    { q: "How is the fee for a criminal case determined?", a: "According to the complexity of the case, the stage of the proceedings and the number of hearings, in line with Ordinance No. 1 on lawyers' fees. The fee is agreed in writing in advance." },
  ],
  children: [
    {
      slug: "merki-za-protsesualna-prinuda",
      name: "Coercive measures and detention",
      title: "Appeal of Coercive Measures in Sofia – custody, house arrest, bail | Lawyer Angel Dimitrov",
      description:
        "Lawyer for appeals against coercive measures in Sofia: pre-trial custody, house arrest, bail, signature bond, travel ban, suspension from office. ☎ +359 88 399 6666",
      h1: "Appeal of Coercive Measures and Defence on Arrest in Sofia",
      lead: "A signature bond, bail, house arrest, custody and the other coercive measures can be appealed. Defence from the first hour of arrest to the court's decision.",
      excerpt: "Signature bond, bail, house arrest, custody, restraining orders, suspension from office, travel ban.",
      areas: ["nadezhda", "tsentar", "lyulin", "vrabnitsa"],
      sections: [
        {
          h2: "The first hours after arrest are decisive",
          blocks: [
            "When a person is arrested, everything happens quickly and under pressure. Police officers may detain a person for up to 24 hours. If pre-trial proceedings have been opened, the prosecutor may order detention of up to 72 hours so that the person is brought before the court with a request for a permanent remand measure.",
            "During these hours interviews, searches and identification parades take place. Whatever the detainee says without a lawyer may be used against him later. That is why the law grants the right to a defence lawyer **from the moment of arrest**.",
            { ul: [
              "The right to know the grounds for the detention",
              "The right to a lawyer and to remain silent until the lawyer arrives",
              "The right to have a relative informed",
              "The right to medical assistance and to an interpreter if you do not speak Bulgarian",
            ] },
          ],
        },
        {
          h2: "Remand measures – what the court decides",
          blocks: [
            "The remand measure determines whether the accused will defend himself at liberty or in custody. The Bulgarian Criminal Procedure Code provides for four measures:",
            { table: {
              head: ["Measure", "What it means"],
              rows: [
                ["Signature bond", "An obligation not to leave your place of residence without permission"],
                ["Bail", "A sum of money or securities guaranteeing your appearance"],
                ["House arrest", "A prohibition on leaving your home without permission"],
                ["Pre-trial custody", "The most severe measure – detention until the end of the case or until the measure is changed"],
              ],
            } },
            "The prosecutor must show a reasonable suspicion that an offence was committed and a real risk that the accused will abscond or commit another offence. The defence must show that no such risk exists – a permanent address, a job, a family, a clean record, health problems. The court's ruling can be appealed within three days.",
          ],
        },
        {
          h2: "Other coercive measures",
          blocks: [
            "In addition to remand measures, the Criminal Procedure Code allows other measures that restrict the rights of the accused during the proceedings. Each of them can be appealed, or its revocation can be requested when it is no longer needed.",
            { table: {
              head: ["Measure", "What it restricts"],
              rows: [
                ["Prohibition to approach the victim", "Prohibition to approach the victim, their home and workplace"],
                ["Suspension from office", "Temporary removal from work where the position could obstruct the investigation"],
                ["Prohibition to leave Bulgaria", "Ban on travelling abroad without the permission of the prosecutor or the court"],
                ["Placement for examination in a psychiatric facility", "Compulsory placement for a forensic psychiatric examination"],
              ],
            } },
            "These measures often last for months and affect a person's work, family and travel. A well-reasoned request for revocation, supported by evidence, is the main way to have them lifted.",
          ],
        },
        {
          h2: "Personal search, search of premises and seizure",
          blocks: [
            "A search of a home or office normally requires court authorisation. Exceptionally, in urgent cases, it may be carried out without authorisation, but the record must then be approved by a judge within 24 hours. If these rules are not followed, the evidence obtained may be inadmissible – which is often crucial in [drug cases](/uslugi/nakazatelno-pravo/narkotitsi).",
            "During a search you have the right to the presence of attesting witnesses, to receive a copy of the record and to write your objections in it. Do not sign a record you disagree with without stating your disagreement.",
          ],
        },
        {
          h2: "What to do if someone close to you is arrested",
          blocks: [
            { ol: [
              "Find out at which police station or detention facility the person is held.",
              "Call a lawyer – **+359 88 399 6666** – and give the full name of the detainee.",
              "Do not discuss details of the case on the phone with other people.",
              "Prepare documents proving address, employment and family status – they matter for the remand measure.",
            ] },
            "The office is in [Nadezhda](/rayoni/nadezhda), and I can quickly reach both the police stations in the northern part of the city and the courts in [central Sofia](/rayoni/tsentar).",
          ],
        },
      ],
      faq: [
        { q: "Can a lawyer attend the police interview?", a: "Yes. A detained or accused person has the right to a defence lawyer at every interview. You may refuse to make a statement until the lawyer arrives." },
        { q: "How quickly can pre-trial custody be appealed?", a: "The court's ruling on a remand measure can be appealed by a private appeal or protest within three days of its announcement." },
        { q: "Can the measure be changed later?", a: "Yes. If circumstances change, the defence may request a lighter measure, and in the case of custody the court periodically checks whether it is still necessary." },
        { q: "What happens if bail is not paid on time?", a: "If bail is not paid within the set time limit, the measure may be replaced with a more severe one. That is why a realistic amount should be proposed already at the hearing." },
      ],
    },
    {
      slug: "narkotitsi",
      name: "Drug offences lawyer",
      title: "Drug Offences Lawyer in Sofia – possession and supply defence | Lawyer Angel Dimitrov",
      description:
        "Lawyer for drug cases in Sofia. Defence for possession for personal use, supply, minor cases, unlawful searches. Consultation ☎ +359 88 399 6666",
      h1: "Drug Offences Lawyer in Sofia",
      lead: "Defence against charges of possession, supply and cultivation of drugs – with attention to every detail, from the search to the expert report.",
      excerpt: "Possession for personal use, supply, minor cases, challenging the search and the expert report.",
      areas: ["tsentar", "lyulin", "mladost", "nadezhda"],
      sections: [
        {
          h2: "What the law says about narcotic substances",
          blocks: [
            "Possession, supply and production of high-risk and risky narcotic substances without a permit is a crime under the Bulgarian Criminal Code. The law distinguishes between possession without intent to supply and possession with intent to supply, the latter being punished much more severely. A “minor case” is also provided for, where liability is much lighter.",
            { table: {
              head: ["Situation", "What matters for the defence"],
              rows: [
                ["Possession for personal use", "Quantity, type of substance, how it was found, evidence of addiction"],
                ["Possession with intent to supply", "Packaging, scales, cash, communications – whether intent is proven rather than assumed"],
                ["Supply", "Lawfulness of covert surveillance and undercover operations"],
                ["Cultivation", "Number of plants, content of the active substance, purpose"],
              ],
            } },
          ],
        },
        {
          h2: "The most common flaws in the investigation",
          blocks: [
            "In drug cases evidence is almost always obtained through a personal search, search of premises or seizure. That is why the defence starts by checking these actions:",
            { ul: [
              "Was there a lawful basis for the search and was it approved by a court in time",
              "Were attesting witnesses present and was everything recorded",
              "Was the chain of custody of the substance preserved from seizure to the laboratory",
              "Was the percentage of the active ingredient established precisely",
              "Was the intent to supply inferred solely from the quantity",
            ] },
            "If any of these conditions is not met, the evidence may be excluded and the charge reclassified or dropped. Your rights during a search are described on the [arrest and detention](/uslugi/nakazatelno-pravo/merki-za-protsesualna-prinuda) page.",
          ],
        },
        {
          h2: "Minor cases and lighter consequences",
          blocks: [
            "When the quantity is small, the person has no criminal record and there is no evidence of supply, there is a real chance the act will be classified as a minor case. The penalty is then a fine, not imprisonment. In some cases release from criminal liability with an administrative penalty or termination of the proceedings is also possible.",
            "For many young people, students and working professionals the most important thing is to have no entry in their criminal record. This is one of the main goals of the defence – and if there is already a conviction, see the options for [rehabilitation](/uslugi/nakazatelno-pravo/reabilitatsiya).",
          ],
        },
        {
          h2: "Driving under the influence of drugs",
          blocks: [
            "A separate category is drivers who test positive on a roadside test. A positive test alone is not conclusive evidence – what matters is the result of the chemical and toxicological analysis of blood and urine. Read more on the [drink- and drug-driving](/uslugi/nakazatelno-pravo/shofirane-v-netrezvo-sastoyanie) page.",
          ],
        },
        {
          h2: "Drug case defence in Sofia",
          blocks: [
            "I take cases throughout Sofia and Bulgaria – from the [city centre](/rayoni/tsentar) and the student districts to [Lyulin](/rayoni/lyulin) and [Mladost](/rayoni/mladost). The consultation is confidential and everything you tell me is protected by attorney–client privilege.",
          ],
        },
      ],
      faq: [
        { q: "Is it a crime to have a small amount of cannabis for myself?", a: "Yes, possession without a permit is a crime regardless of the quantity, but with a small amount and no other evidence it is often a minor case punishable by a fine." },
        { q: "Must I give blood after a positive roadside test?", a: "Refusing the test has serious administrative consequences. It is usually better to give blood and urine, as the laboratory result may refute the roadside test." },
        { q: "Can the case be dropped?", a: "Yes, if the evidence was obtained unlawfully, if the substance is not a narcotic or if it cannot be proven that it was possessed by the accused." },
        { q: "Will it appear on my criminal record?", a: "If convicted – yes, until rehabilitation. If released from criminal liability with an administrative penalty there is no conviction, but the decision is recorded and matters in case of a repeat offence." },
      ],
    },
    {
      slug: "krazhba-i-grabezh",
      name: "Theft and robbery lawyer",
      title: "Theft and Robbery Lawyer in Sofia – defence of accused and victims | Lawyer Angel Dimitrov",
      description:
        "Lawyer for theft and robbery cases in Sofia. Minor cases, compensation of damage, plea agreements, court defence. Lawyer Angel Dimitrov ☎ +359 88 399 6666",
      h1: "Theft and Robbery Lawyer in Sofia",
      lead: "Defence in property crime cases – from shoplifting to robbery charges.",
      excerpt: "Theft, robbery, embezzlement, minor cases and compensation of damage.",
      areas: ["lyulin", "vrabnitsa", "serdika", "krasna-polyana"],
      sections: [
        {
          h2: "The difference between theft and robbery",
          blocks: [
            "**Theft** is taking someone else's movable property without the owner's consent with the intention of appropriating it. **Robbery** is taking property by using force or threats. It is the force or threat that makes the act a much more serious crime, which is why the main dispute in the case is often whether there was any violence at all.",
            { table: {
              head: ["Type", "Characteristics", "Key question for the defence"],
              rows: [
                ["Theft (basic)", "Secret or open taking without violence", "Value of the property, intent, minor case"],
                ["Aggravated theft", "Breaking barriers, repeated, by two or more persons, etc.", "Is the aggravating circumstance proven"],
                ["Robbery", "With force or threats", "Was there actual violence, before or after the taking"],
              ],
            } },
          ],
        },
        {
          h2: "Minor cases and compensation of damage",
          blocks: [
            "Theft of low-value items without aggravating circumstances may be classified as a minor case and punished much more leniently. The law also encourages compensation – if the stolen property is returned or paid for by a certain stage of the proceedings, the sentence is reduced significantly.",
            "Compensation is also important for subsequent [rehabilitation](/uslugi/nakazatelno-pravo/reabilitatsiya) and in many cases opens the way to a plea agreement with the prosecution.",
          ],
        },
        {
          h2: "How I build the defence",
          blocks: [
            { ol: [
              "Checking video footage, witnesses and identification records.",
              "Assessing whether the value of the items was determined correctly – expert valuations are often inflated.",
              "Assessing whether it is a minor case or a lighter legal qualification applies.",
              "Negotiating a plea agreement when the evidence is strong, or contesting the charge fully when it is not.",
            ] },
            "If you have been detained in connection with theft or robbery, read also the [arrest and detention](/uslugi/nakazatelno-pravo/merki-za-protsesualna-prinuda) page – it explains what to do in the first hours.",
          ],
        },
        {
          h2: "Victims of theft or robbery",
          blocks: [
            "I also represent victims. As a [lawyer for victims of crime](/uslugi/nakazatelno-pravo/advokat-na-postradal) I can file a civil claim in the criminal case so that you receive compensation for what was taken and for non-pecuniary damage without a separate civil case.",
            "I work with clients from all over Sofia and Bulgaria, most often from the north-western districts – [Lyulin](/rayoni/lyulin), [Obelya and Vrabnitsa](/rayoni/vrabnitsa) and [Serdika](/rayoni/serdika).",
          ],
        },
      ],
      faq: [
        { q: "If I return the stolen items, will the case be closed?", a: "Not automatically, but compensation is a strong mitigating factor and in some cases leads to a much lighter sentence or a plea agreement." },
        { q: "What is a minor case?", a: "A case where, due to the low value, the absence of harmful consequences and the personality of the offender, the danger to society is clearly lower. The penalty is then much lighter." },
        { q: "Can theft be reclassified as robbery and vice versa?", a: "Yes. If it is proven that force was used only to escape and not to take the property, the qualification may change – one of the main disputes in these cases." },
      ],
    },
    {
      slug: "shofirane-v-netrezvo-sastoyanie",
      name: "Drink- and drug-driving",
      title: "Drink-Driving Lawyer in Sofia – driving under alcohol or drugs | Lawyer Angel Dimitrov",
      description:
        "Lawyer for drink-driving in Sofia: over 1.2‰, drugs, confiscation of the car and licence, appeals. Lawyer Angel Dimitrov ☎ +359 88 399 6666",
      h1: "Defence for Drink- and Drug-Driving in Sofia",
      lead: "Positive breath test? What happens in the next few hours matters – the blood test, the records and the first statements.",
      excerpt: "Alcohol over 1.2‰, drugs, confiscation of the car and driving licence.",
      areas: ["nadezhda", "lyulin", "vrabnitsa", "mladost"],
      sections: [
        {
          h2: "When drink-driving is a crime",
          blocks: [
            "Bulgarian law distinguishes between an administrative offence and a crime. Driving with a blood alcohol level of over 0.5 and up to 1.2 per mille is an administrative offence under the Road Traffic Act – with a fine, penalty points and disqualification from driving. Over 1.2 per mille it is a crime under the Criminal Code. Driving after the use of narcotic substances is also a crime.",
            { table: {
              head: ["Level / situation", "Type of liability"],
              rows: [
                ["0.5 to 1.2 ‰", "Administrative – [the penalty decree is appealed](/uslugi/administrativno-pravo/obzhalvane-na-nakazatelni-postanovleniya)"],
                ["Over 1.2 ‰", "Criminal – pre-trial proceedings and court"],
                ["Positive drug test", "Criminal, if confirmed by a blood test"],
                ["Refusal to be tested", "Severe administrative consequences, and under certain conditions criminal ones"],
              ],
            } },
            "Apart from the penalty, two further questions arise – disqualification from driving and the possible confiscation of the car by the state in certain situations provided by law. This is where the defence matters most.",
          ],
        },
        {
          h2: "The evidence I check",
          blocks: [
            { ul: [
              "Whether the breathalyser was approved, calibrated and used correctly",
              "Whether you received a referral for a medical test and how soon the blood was taken",
              "Whether there is a discrepancy between the breathalyser and the blood test",
              "How the concentration at the time of driving was calculated",
              "Who owns the car – relevant to possible confiscation",
            ] },
            "A difference of a few tenths of a per mille may mean the difference between an administrative offence and a crime. That is why a blood test is essential when the breathalyser shows a value close to the threshold.",
          ],
        },
        {
          h2: "Possible outcomes",
          blocks: [
            "With a clean record and no injured persons it is often possible to end the case with a plea agreement or summary trial and a lighter penalty. When there are procedural violations or doubts about the evidence, the case is fought to the end. Where there was an accident, compensation issues arise as well – see [road accident compensation](/uslugi/grazhdansko-pravo/obezshteteniya-pri-ptp).",
            "If you were detained on the spot, your rights are described on the [arrest and detention](/uslugi/nakazatelno-pravo/merki-za-protsesualna-prinuda) page.",
          ],
        },
        {
          h2: "Roadside checks in Sofia",
          blocks: [
            "Many checks in Sofia are carried out on the main boulevards at night. I work with clients from the whole city – from [Nadezhda](/rayoni/nadezhda) and [Lyulin](/rayoni/lyulin) to [Mladost](/rayoni/mladost) – and can get involved on the very day of the check.",
          ],
        },
      ],
      faq: [
        { q: "Should I give blood if the breathalyser shows over 1.2‰?", a: "It is usually advisable, especially if the value is close to the threshold. The blood test is more accurate and may refute the breathalyser." },
        { q: "Will they take my car?", a: "The law provides for confiscation of the car in certain cases. Whether it applies depends on the specific circumstances and the ownership of the car – a question where the defence matters." },
        { q: "How long will I be without a licence?", a: "The period is set by the court within the limits of the law and depends on the concentration, previous record and circumstances. For an administrative offence the disqualification is under the Road Traffic Act." },
      ],
    },
    {
      slug: "advokat-na-postradal",
      name: "Lawyer for victims of crime",
      title: "Lawyer for Victims of Crime in Sofia – civil claim, private prosecutor | Lawyer Angel Dimitrov",
      description:
        "Lawyer for victims of crime in Sofia: private prosecutor, civil claim in the criminal case, private complaint for insult and defamation. ☎ +359 88 399 6666",
      h1: "Lawyer for Victims of Crime in Sofia",
      lead: "A victim is not just a witness. The law gives you an active role in the proceedings and a right to compensation – as long as you use it in time.",
      excerpt: "Private prosecutor, civil claimant, private complaint and compensation for damage.",
      areas: ["nadezhda", "tsentar", "serdika", "krasna-polyana"],
      sections: [
        {
          h2: "What rights the victim has",
          blocks: [
            "The Criminal Procedure Code gives the victim a number of rights already in the pre-trial phase: to be informed about the progress of the case, to take part, to make requests and objections, and to appeal a decision to terminate the proceedings. At trial the victim may take part as a private prosecutor and as a civil claimant.",
            { table: {
              head: ["Role", "What it gives you"],
              rows: [
                ["Victim in pre-trial proceedings", "Information, the right to make requests, appeal against termination"],
                ["Private prosecutor", "You support the charge alongside the prosecutor and may appeal the judgment"],
                ["Civil claimant", "Compensation for pecuniary and non-pecuniary damage within the criminal case"],
                ["Private complainant", "You bring the charge yourself for privately prosecuted offences"],
              ],
            } },
          ],
        },
        {
          h2: "Compensation in the criminal case",
          blocks: [
            "A civil claim in the criminal proceedings saves you a separate civil case. It covers medical expenses, lost income, damaged or stolen property, and compensation for pain and suffering. The claim must be filed by a certain stage – at the latest by the end of the preliminary hearing at first instance – so it is important to get involved in time.",
            "In road accidents compensation is usually sought from the insurer – more on the [road accident compensation](/uslugi/grazhdansko-pravo/obezshteteniya-pri-ptp) page.",
          ],
        },
        {
          h2: "Private complaint for insult and defamation",
          blocks: [
            "Some offences – such as insult and defamation – are prosecuted only on the victim's complaint. The complaint is filed directly with the district court within six months of the day you learned of the offence and the offender. Missing the deadline extinguishes the possibility of prosecution.",
          ],
        },
        {
          h2: "Victims of domestic violence",
          blocks: [
            "When the violence comes from a family member, in addition to criminal proceedings, fast protection is available under the Protection from Domestic Violence Act – see the [domestic violence](/uslugi/semeyno-pravo/domashno-nasilie) page.",
            "Meetings take place at the office in [Nadezhda](/rayoni/nadezhda) or at a convenient place in [central Sofia](/rayoni/tsentar).",
          ],
        },
      ],
      faq: [
        { q: "Do I have to pay a fee for a civil claim in the criminal case?", a: "A state fee is due on the part of the claim that is granted, and it is usually imposed on the defendant if convicted." },
        { q: "What if the prosecutor terminates the case?", a: "The victim may appeal the termination order to the court. The deadline is short – 7 days from receiving a copy." },
        { q: "Can I withdraw as private prosecutor?", a: "Yes, at any time. For privately prosecuted offences, withdrawing the complaint leads to termination of the case." },
      ],
    },
    {
      slug: "reabilitatsiya",
      name: "Rehabilitation (clearing a criminal record)",
      title: "Rehabilitation in Sofia – clean criminal record certificate | Lawyer Angel Dimitrov",
      description:
        "Rehabilitation by operation of law and by court in Sofia. How to clear your criminal record – deadlines, conditions, application to the court. ☎ +359 88 399 6666",
      h1: "Rehabilitation and a Clean Criminal Record in Sofia",
      lead: "A conviction should not follow you for life. Rehabilitation erases the consequences of the conviction – for work, business and travel.",
      excerpt: "Rehabilitation by operation of law and by court, clean criminal record certificate.",
      areas: ["tsentar", "nadezhda", "mladost"],
      sections: [
        {
          h2: "What rehabilitation is",
          blocks: [
            "Rehabilitation is an institution of the Bulgarian Criminal Code that expunges the conviction and removes its consequences for the future, unless the law provides otherwise. After rehabilitation, the conviction is not shown in the criminal record certificate issued for most purposes. This is of great importance when applying for a job, entering the civil service, registering a business or travelling abroad.",
          ],
        },
        {
          h2: "Rehabilitation by operation of law and by court",
          blocks: [
            { table: {
              head: ["Type", "How it occurs", "When it applies"],
              rows: [
                ["By operation of law", "Automatically, without application, after certain periods", "For example with a suspended sentence, if no new publicly prosecuted offence is committed during the probation period, and in other cases provided by law"],
                ["By court", "By court ruling on the convicted person's application", "Where rehabilitation by law has not occurred, after the statutory period following the sentence, with good conduct and compensated damage"],
              ],
            } },
            "Rehabilitation by court requires proof of good conduct (references, certificates from work) and – for an intentional offence – that the pecuniary damage has been compensated. The application is heard by the court in open session with a prosecutor present.",
          ],
        },
        {
          h2: "How I help",
          blocks: [
            { ol: [
              "I check your convictions and whether you have already been rehabilitated by operation of law.",
              "I calculate the deadlines and check the conditions.",
              "I prepare the application and the evidence of good conduct.",
              "I represent you before the court and, if necessary, appeal a refusal.",
            ] },
            "If your case is still pending, the best “rehabilitation” is a good defence – see [criminal cases](/uslugi/nakazatelno-pravo). And if you were unlawfully charged or detained and acquitted, you are entitled to compensation from the state under the [State Liability Act](/uslugi/administrativno-pravo/dela-po-zodov).",
          ],
        },
      ],
      faq: [
        { q: "Does rehabilitation erase the conviction completely?", a: "It expunges the conviction and its consequences for the future. In certain cases provided by law – for example a repeat offence – a rehabilitated conviction may still be relevant." },
        { q: "How do I know whether I have been rehabilitated by law?", a: "Through a criminal record check and review of the periods under the judgments. I can carry out the check for you." },
        { q: "How long does rehabilitation by court take?", a: "Usually a few months – from filing the application to the court ruling becoming final." },
      ],
    },
  ],
};
