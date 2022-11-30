import { createScreen } from './PPSScreen3';

export default {
    title: 'Journey/PPS',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen3 = Template.bind({});
Screen3.args = {
    heading: 'What is your birthdate?',
};