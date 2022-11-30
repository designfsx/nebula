import { createScreen } from './MultiStepCPAScreen8';

export default {
  title: 'Journey/Multi-Step CPA',
  argTypes: {
    tagline: { control: 'text'},
  },
};

const Template = (args) => createScreen(args);

export const Screen8 = Template.bind({});
Screen8.args = {
  tagline: 'Lorem ipsum dolor tagline',
};