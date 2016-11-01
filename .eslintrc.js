module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": ["react"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "warn",
      2
    ],
    "quotes": [
      "warn",
      "single"
    ],
    "semi": [
      "warn",
      "never"
    ],
    "no-console": 0,
    "no-unused-vars": 1,
    "jsx-quotes": [
      "warn",
      "prefer-single"
    ],
    "react/prop-types": 1,
  }
};