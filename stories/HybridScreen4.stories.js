import { createScreen } from './HybridScreen4';

export default {
    title: 'Journey/Hybrid',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen4 = Template.bind({});
Screen4.args = {
    heading: 'What age range do you want to hookup with?',
};