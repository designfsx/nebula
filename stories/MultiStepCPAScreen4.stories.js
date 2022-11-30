import { createScreen } from './MultiStepCPAScreen4';

export default {
    title: 'Journey/Multi-Step CPA',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen4 = Template.bind({});
Screen4.args = {
    heading: 'What age range do you want to hookup with?',
};