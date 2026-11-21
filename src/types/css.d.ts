// Gör vanliga CSS-importer (t.ex. `import "./globals.css"`) kända för TypeScript.
// Behövs från TypeScript 6, där `noUncheckedSideEffectImports` är på som standard.
declare module "*.css";
