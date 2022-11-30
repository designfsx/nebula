import { createScreen } from './HybridScreen7';

export default {
    title: 'Journey/Hybrid',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen7 = Template.bind({});
Screen7.args = {
    heading: 'Create your free account',
};