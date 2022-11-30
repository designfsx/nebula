import { createScreen } from './PPSScreen1';

export default {
    title: 'Journey/PPS',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen1 = Template.bind({});
Screen1.args = {
    heading: 'Find your fuck buddy now.',
};