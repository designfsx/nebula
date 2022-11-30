import { createScreen } from './MultiStepCPAScreen5';

export default {
    title: 'Journey/Multi-Step CPA',
    argTypes: {
        heading: { control: 'text'},
        options: { table: { expanded: true } }
    },
};

const Template = (args) => createScreen(args);

export const Screen5 = Template.bind({});
Screen5.args = {
    heading: 'Which body type turns you on the most?',
    options: ['Petite', 'Average', 'Athletic', 'BBW', 'Big Tits', 'Big Ass']
};