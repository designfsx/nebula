import { createScreen } from './HybridScreen9';

export default {
  title: 'Journey/Hybrid',
  argTypes: {
    tagline: { control: 'text'},
  },
};

const Template = (args) => createScreen(args);

export const Screen9 = Template.bind({});
Screen9.args = {
  tagline: 'Lorem ipsum dolor tagline',
};