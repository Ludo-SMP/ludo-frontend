import { create } from '@storybook/theming/create';
import { color } from '../src/Styles/theme';
import { Logo } from '../src/Assets';

export default create({
  base: 'light',

  brandTitle: 'Ludo',
  brandUrl: 'https://ludoapi.store',
  brandImage: Logo,
  brandTarget: '_self',

  colorPrimary: color.orange1,
  colorSecondary: color.purple1,
});
