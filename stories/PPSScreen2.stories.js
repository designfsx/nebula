import { createScreen } from './PPSScreen2';

export default {
    title: 'Journey/PPS',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen2 = Template.bind({});
Screen2.args = {
    heading: 'What kind of matches are you looking for?',
};