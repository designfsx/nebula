import { createScreen } from './HybridScreen1';

export default {
    title: 'Journey/Hybrid',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen1 = Template.bind({});
Screen1.args = {
    heading: 'Find your fuck buddy now.',
};