// @ts-check
import * as tailwindcss from 'prettier-plugin-tailwindcss'

// Import the plugin directly (instead of listing it by name) so it resolves
// from this project even when Prettier runs from the VS Code extension host
/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  // Set explicitly: prettier-eslint (format on save) reads ESLint's disabled
  // comma-dangle rule as 'none' instead of using Prettier's default
  trailingComma: 'all',
  endOfLine: 'crlf',
  // The plugin's own types are looser than Prettier's Plugin type
  plugins: [/** @type {import('prettier').Plugin} */ (tailwindcss)],
  tailwindStylesheet: './src/index.css',
}
