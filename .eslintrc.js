module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint", "prettier", "import"],
    "extends": ["eslint:recommended", "plugin:import/errors", "plugin:import/warnings", "plugin:import/typescript", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    "rules": {
      "no-console": [1, {
        allow: ['warn', 'error']
      }],
      "@typescript-eslint/ban-types": "off",
      "prettier/prettier": 1,
      "import/no-cycle": 0,
      "@typescript-eslint/no-explicit-any": "off",
      "import/no-named-as-default": 0,
      "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    "settings": {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"]
      },
      'import/resolver': {
        'typescript': {
          'alwaysTryTypes': true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        },
      }
    }
  };