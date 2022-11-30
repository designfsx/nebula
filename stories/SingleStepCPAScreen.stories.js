import { createScreen } from './SingleStepCPAScreen';

export default {
  title: 'Journey/Single Step CPA',
  argTypes: {
    tagline: { control: 'text'},
  },
};

const Template = (args) => createScreen(args);

export const SingleStepCPA = Template.bind({});
SingleStepCPA.args = {
  tagline: 'Lorem ipsum dolor tagline',
};