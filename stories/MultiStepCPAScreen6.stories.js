import { createScreen } from './DefaultScreen';

export default {
    title: 'Journey/Multi-Step CPA',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen6 = Template.bind({});
Screen6.args = {
    heading: 'Do you agree to participate in safe sex with partners you meet?\n\nMore importantly, do you agree to keep their identities secret?',
};