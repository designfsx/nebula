import { createScreen } from './PPSScreen5';

export default {
    title: 'Journey/PPS',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen5 = Template.bind({});
Screen5.args = {
    heading: 'Create your free account',
};