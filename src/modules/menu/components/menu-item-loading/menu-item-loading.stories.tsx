import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItemLoading } from './menu-item-loading.component';

export default {
  title: 'Menu/Menu Item Loading',
  component: MenuItemLoading,
} as ComponentMeta<typeof MenuItemLoading>;

const Template: ComponentStory<typeof MenuItemLoading> = args => (
  <MenuItemLoading/>
);

export const View = Template.bind({});
