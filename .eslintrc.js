module.exports = {
  plugins: ["prettier", "@typescript-eslint", "jsx-a11y"],
  extends: ["react-app", "prettier", "plugin:@next/next/recommended"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      parserOptions: {
        project: ["./tsconfig.eslint.json"], // Specify it only for TypeScript files
        tsconfigRootDir: __dirname,
      },
      rules: {
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/anchor-has-content": 0,
      },
    },
  ],
  rules: {
    "object-curly-spacing": ["warn", "always"],
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
      },
    ],

    "max-len": [
      "warn",
      {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "react/jsx-key": "error",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/jsx-boolean-value": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": "off",
    "react/destructuring-assignment": "off",
  },
};
