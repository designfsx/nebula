import { createScreen } from './DefaultScreen';

export default {
    title: 'Journey/Multi-Step CPA',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen3 = Template.bind({});
Screen3.args = {
    heading: 'Are you 21 years or older?',
};