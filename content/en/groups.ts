import type { Group } from "@/lib/types";
import { GROUPS as BG } from "../bg/groups";

// Същите бутони и страници като в българския вариант – преведени са само текстовете.
const T: Pick<Group, "title" | "text">[] = [
  {
    title: "Administrative and administrative penalty law",
    text: "If you have received a penalty decree, an electronic fine or an order from a state or municipal authority, you can challenge it. The deadline is short, usually 14 days.",
  },
  {
    title: "Criminal law",
    text: "If you or someone close to you has been detained, charged or is the victim of a crime. Speak to a lawyer before giving a statement or signing anything.",
  },
  {
    title: "Family and inheritance law",
    text: "For divorce, disputes over child support or children, and protection from domestic violence. Also when you need to accept, divide or renounce an inheritance.",
  },
  {
    title: "Consumer law",
    text: "If a trader refuses to repair or replace goods, or if a payday lender is claiming amounts you do not understand.",
  },
  {
    title: "Employment law",
    text: "If you have been dismissed, your wages are unpaid or you were injured at work. A dismissal can be challenged within two months.",
  },
  {
    title: "Contract and commercial law",
    text: "When you sign a contract, someone does not pay you, you buy or rent property, claim compensation after a road accident or register a company.",
  },
];

const LABELS: string[][] = [
  ["Administrative law", "Administrative penalty law"],
  ["Coercive procedural measures", "Defence of accused and defendants"],
  ["Family law", "Inheritance law"],
  ["Consumer and trader protection", "Payday loans and consumer credit"],
  ["Unfair dismissal", "Workplace accidents"],
  ["Contract law", "Commercial law"],
];

export const GROUPS: Group[] = BG.map((g, i) => ({
  ...g,
  ...T[i],
  buttons: g.buttons.map((b, j) => ({ ...b, label: LABELS[i][j] })),
}));
