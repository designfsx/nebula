import { createScreen } from './HybridScreen8';

export default {
    title: 'Journey/Hybrid',
    argTypes: {
        loading_text1: { control: 'text'},
        loading_text2: { control: 'text'},
        loading_text3: { control: 'text'},
        completed: { control: 'boolean' },
    },
};

const Template = (args) => createScreen(args);

export const Screen8 = Template.bind({});
Screen8.args = {
    loading_text1: 'Configuring preferences',
    loading_text2: 'Finding hookups in your area',
    loading_text3: 'Loading age verification',
    completed: true
};