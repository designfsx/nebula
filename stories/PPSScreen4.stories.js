import { createScreen } from './PPSScreen4';

export default {
    title: 'Journey/PPS',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen4 = Template.bind({});
Screen4.args = {
    heading: 'What\'s your email?',
};