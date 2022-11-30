import { createScreen } from './CPAScreen1';

export default {
    title: 'Journey/CPA',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen1 = Template.bind({});
Screen1.args = {
    heading: 'Find your fuck buddy now.',
};