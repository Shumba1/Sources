import { cssVariables } from './theme';

export function createCssVariableDeclarations() {
  return Object.entries(cssVariables)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n');
}

export const rootThemeCss = `:root {\n${createCssVariableDeclarations()}\n}`;
