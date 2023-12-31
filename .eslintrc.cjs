module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    // Global
    semi: ['error', 'never'],
    // quotes: ['error', 'single'],
    quotes: [2, 'single', { avoidEscape: true }],
    'quote-props': ['error', 'as-needed'],
    // Vue
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
        },
      },
    ],
  },
}
