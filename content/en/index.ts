import type { Category } from "@/lib/types";
import { nakazatelno } from "./nakazatelno";
import { administrativno } from "./administrativno";
import { grazhdansko } from "./grazhdansko";
import { potrebitelsko } from "./potrebitelsko";
import { semeyno } from "./semeyno";
import { nasledstveno } from "./nasledstveno";
import { trudovo } from "./trudovo";
import { imoti } from "./imoti";
import { targovsko } from "./targovsko";

export { AREAS } from "./areas";
export { GROUPS } from "./groups";

export const CATEGORIES: Category[] = [
  administrativno,
  nakazatelno,
  semeyno,
  nasledstveno,
  potrebitelsko,
  trudovo,
  grazhdansko,
  imoti,
  targovsko,
];
