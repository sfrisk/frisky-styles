import '../src/scss/main.scss'
import './custom.css'

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: 'light', color: '#fbf8f9' },
      { name: 'dark', class: 'dark', color: '#656464' }
    ],
  },
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  options: {
    storySort: {
      order: ['Design Tokens', 'Themes', 'Components'],
    },
  },
}
