import { createScreen } from './MultiStepCPAScreen7';

export default {
    title: 'Journey/Multi-Step CPA',
    argTypes: {
        loading_text1: { control: 'text'},
        loading_text2: { control: 'text'},
        loading_text3: { control: 'text'},
        completed: { control: 'boolean' },
    },
};

const Template = (args) => createScreen(args);

export const Screen7 = Template.bind({});
Screen7.args = {
    loading_text1: 'Configuring preferences',
    loading_text2: 'Finding hookups in your area',
    loading_text3: 'Loading age verification',
    completed: true
};