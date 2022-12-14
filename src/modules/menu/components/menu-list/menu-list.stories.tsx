import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';
import fishMenu from '@app/db/fish.json';

export default {
  title: 'Menu/Menu List',
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = args => <MenuList {...args} />;

export const View = Template.bind({});

View.args = {
  items: fishMenu,
};
