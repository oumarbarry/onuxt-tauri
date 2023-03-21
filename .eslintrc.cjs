process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: ['@antfu', '@unocss'],
  rules: {
    'no-undef': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
  },
}
