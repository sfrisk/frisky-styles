import { create } from '@storybook/theming';

// Examples: https://github.com/storybookjs/storybook/blob/main/lib/theming/src/themes/light.ts

export default create({
  base: 'light',

  // Storybook-specific color palette
  colorPrimary: '#FF4785', // coral
  colorSecondary: '#1EA7FD', // ocean

  // UI
  //appBg: background.app,
  // appContentBg: color.lightest,
  // appBorderColor: color.border,
  // appBorderRadius: 4,

  // // Fonts
  // fontBase: typography.fonts.base,
  // fontCode: typography.fonts.mono,

  // // Text colors
  // textColor: color.darkest,
  // textInverseColor: color.lightest,
  // textMutedColor: color.dark,

  // // Toolbar default and active colors
  // barTextColor: color.mediumdark,
  // barSelectedColor: color.secondary,
  // barBg: color.lightest,

  // // Form colors
  // inputBg: color.lightest,
  // inputBorder: color.border,
  // inputTextColor: color.darkest,
  // inputBorderRadius: 4,

  brandTitle: 'FriskyStyles',
  brandUrl: 'https://sarahfrisk.com',
  // brandImage: 'https://place-hold.it/350x150',
});