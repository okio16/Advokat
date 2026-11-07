// Позволява на Node да зареди .ts файловете на съдържанието: алиас „@/“ и импорти без разширение.
import { existsSync, statSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const ROOT = path.resolve(fileURLToPath(new URL("../..", import.meta.url)));

function withTs(file) {
  for (const c of [file, `${file}.ts`, path.join(file, "index.ts")]) {
    if (existsSync(c) && statSync(c).isFile()) return c;
  }
  return null;
}

export async function resolve(specifier, context, next) {
  let file = null;
  if (specifier.startsWith("@/")) file = withTs(path.join(ROOT, specifier.slice(2)));
  else if (specifier.startsWith(".") && context.parentURL?.startsWith("file:"))
    file = withTs(path.resolve(path.dirname(fileURLToPath(context.parentURL)), specifier));
  if (file) return { url: pathToFileURL(file).href, shortCircuit: true };
  return next(specifier, context);
}
