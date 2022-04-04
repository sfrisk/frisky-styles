import Button from './Button.vue';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    onClick: {},
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'destructive'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `<Button 
    :disabled="disabled"
    :variant="variant"
    :href="href"
    :type="type"
    >
      ${args.default}
    </Button>`,
});

export const Default = Template.bind({});
Default.args = {
  default: 'Button',
};

export const Link = Template.bind({});
Link.args = {
  default: 'Link',
  href: 'https://sarahfrisk.com',
};
