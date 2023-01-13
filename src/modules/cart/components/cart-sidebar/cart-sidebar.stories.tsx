import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CartSidebar } from './cart-sidebar.component';

export default {
  title: 'Cart/Cart sidebar',
  component: CartSidebar,
} as ComponentMeta<typeof CartSidebar>;

const Template: ComponentStory<typeof CartSidebar> = args => (
  <CartSidebar {...args}/>
);

export const View = Template.bind({});
View.args = {
  items: [
    {
      image: 'menu/menu-1673478636',
      title: "Плотва в'ялена",
      count: 2,
      price: 154,
    },
    {
      image: 'menu/menu-1673478636',
      title: "Плотва з ікрою",
      count: 3,
      price: 120,
    },
    {
      image: 'menu/menu-1673478636',
      title: "Плотва в'ялена",
      count: 1,
      price: 85,
    }
  ]
}
