import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CartItem } from './cart-item.component';

export default {
  title: 'Cart/Cart items',
  component: CartItem,
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = args => (
  <CartItem {...args}/>
);

export const View = Template.bind({});
View.args = {
  image: 'menu/menu-1673478636',
  title: "Плотва в'ялена",
  count: 2,
  price: 54,
}