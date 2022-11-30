import { createScreen } from './HybridScreen6';

export default {
    title: 'Journey/Hybrid',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen6 = Template.bind({});
Screen6.args = {
    heading: 'What\'s your email?',
};