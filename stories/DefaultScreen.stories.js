import { createScreen } from './DefaultScreen';

export default {
    title: 'Components/Screen',
    argTypes: {
        heading: { control: 'text'},
        logo: { control: 'boolean'},
    },
};

const Template = (args) => createScreen(args);

export const Screen = Template.bind({});
Screen.args = {
    heading: 'Lorem ipsum dolor sit amet',
    logo: false
};