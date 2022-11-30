import { createScreen } from './CPAScreen2';

export default {
  title: 'Journey/CPA',
  argTypes: {
    heading: { control: 'text'},
    tagline: { control: 'text'},
  },
};

const Template = (args) => createScreen(args);

export const Screen2 = Template.bind({});
Screen2.args = {
  heading: 'Find your fuck buddy now.',
  tagline: 'Lorem ipsum dolor tagline',
};