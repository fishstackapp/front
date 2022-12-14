import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';

export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = args => <MenuItem {...args} />;

export const View = Template.bind({});

View.args = {
  imagePath: '/assets/fish/plotva.jpg',
  title: 'Плотва',
  weight: 1000,
  descriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsa.',
  price: 215,
};
