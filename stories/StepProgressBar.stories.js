import { createStepProgressBar } from './StepProgressBar';

export default {
  title: 'Components/Step Progress Bar',
  argTypes: {
    borderRadius: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large', 'xLarge', 'rounded'],
    },
    steps: { table: { expanded: true } }
  },
};

const Template = ({ label, ...args }) => {
  return createStepProgressBar({ ...args })
};

export const StepProgressBar = Template.bind({});
StepProgressBar.args = {
  steps: ['Match Type', 'Date of Birth', 'Email Address', 'Create Account'],
  borderRadius: 'rounded'
}