import { createScreen } from './DefaultScreen';

export default {
    title: 'Journey/Hybrid',
    argTypes: {
        heading: { control: 'text'},
    },
};

const Template = (args) => createScreen(args);

export const Screen2 = Template.bind({});
Screen2.args = {
    heading: '[OfferName] is an adult hookup site.\nAre you OK with no strings attached?',
};