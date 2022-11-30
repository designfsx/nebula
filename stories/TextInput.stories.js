import {createTextInput} from './TextInput';

export default {
  title: 'Components/TextInput',
  argTypes: {
    value: { control: 'text' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    style: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'quiet'],
    },
  },
};

const Template = ({ label, ...args }) => {
  return createTextInput({ label, ...args })
};

export const Default = Template.bind({});
Default.args = {}

export const Rounded = Template.bind({});
Rounded.args = {
  style: 'input--rounded',
};

export const Quiet = Template.bind({});
Quiet.args = {
  style: 'input--quiet',
};