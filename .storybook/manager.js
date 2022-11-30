import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
    base: 'light',
    colorSecondary: '#999999', // b66e1b
    barSelectedColor: '#b66e1b',
    brandTitle: 'Big Bucks Revenue',
    brandImage: 'https://static.cdn.co.no/static/bbr/sb/logo-bbr.svg',
});

addons.setConfig({
    theme,
});