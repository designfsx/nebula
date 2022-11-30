import { createScreen } from './DefaultScreen';

export default {
    title: 'Journey/Hybrid',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen5 = Template.bind({});
Screen5.args = {
    heading: 'Do you agree to participate in safe sex with partners you meet?\n\nMore importantly, do you agree to keep their identities secret?',
};