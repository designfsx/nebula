import { createPage } from './Page';
import * as HeaderStories from './CPAScreen2.stories';

export default {
  title: 'Baller Profits/Concepts/Page',
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

const Template = (args) => createPage(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/html/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
