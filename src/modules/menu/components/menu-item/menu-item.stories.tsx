import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';

export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = args => <MenuItem {...args} />;

export const General = Template.bind({});
General.args = {
  image: 'menu/menu-1671835457',
  title: 'Плотва',
  weight: 1000,
  descriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsa.',
  price: 215,
};

export const Snack = Template.bind({});
Snack.args = {
  image: 'menu/menu-1672007367',
  price: 50,
  title: 'Узвар Ярмолинці з шипшиною',
  descriptions: '',
  fitImage: true,
};
