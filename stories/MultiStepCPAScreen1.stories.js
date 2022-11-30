import { createScreen } from './MultiStepCPAScreen1';

export default {
    title: 'Journey/Multi-Step CPA',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen1 = Template.bind({});
Screen1.args = {
    heading: 'Find your fuck buddy now.',
};