/* eslint-disable */

module.exports = {
  extends: ['stylelint-config-recommended-vue', 'stylelint-prettier/recommended'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-scss', 'stylelint-order'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'no-invalid-position-at-import-rule': null,
        // 小程序支持
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
        'selector-type-no-unknown': [true, { ignoreTypes: ['page'] }],
        'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
      },
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};
