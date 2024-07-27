import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
// import { defaultConditionNames } from 'eslint-import-resolver-typescript';

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    files: ["{src,test,apps,libs}/**/*.ts"],
    ignores: ["node_modules/**", "dist/**", "build/**"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      "import": simpleImportSort,
      // "import/typescript": defaultConditionNames,
    },
    rules: {
      'indent': ['warn', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'double'],
      'semi': ['error', 'always'],
      'no-unused-vars': 'warn',
      // "sort-imports": ["warn", {
      //   "ignoreCase": false,
      //   "ignoreDeclarationSort": false,
      //   "ignoreMemberSort": false,
      //   "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
      //   "allowSeparatedGroups": true
      // }],
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      // "import/first": "error",
      // "import/newline-after-import": "error",
      // "import/no-duplicates": "error"
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts"]
      },
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true
        }
      }
    }
  },
];
