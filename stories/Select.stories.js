import { createSelect } from './Select';

export default {
  title: 'Components/Select',
  argTypes: {
    label: { control: 'text' },
    style: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'quiet'],
    },
  },
};

const Template = ({ label, ...args }) => {
  return createSelect({ label, ...args })
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select one...'
}

export const Rounded = Template.bind({});
Rounded.args = {
  style: 'select--rounded',
  label: 'Select one...'
};

export const Quiet = Template.bind({});
Quiet.args = {
  style: 'select--quiet',
  label: 'Select one...'
};