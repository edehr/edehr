import globals from "globals";

export default [{
    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            parser: "babel-eslint",
        },
    },

    rules: {
        "space-before-function-paren": ["warn", "always"],
        "no-console": "off",
        semi: ["warn", "never"],
        "no-debugger": "off",
        quotes: ["warn", "single"],
        "quote-props": ["error", "as-needed"],
        indent: ["error", 2],

        "no-unused-vars": ["warn", {
            args: "none",
        }],
    },
}];