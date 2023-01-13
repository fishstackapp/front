import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CartItems } from './cart-items.component';

export default {
  title: 'Cart/Cart items',
  component: CartItems,
} as ComponentMeta<typeof CartItems>;

const Template: ComponentStory<typeof CartItems> = args => (
  <CartItems {...args}/>
);

export const View = Template.bind({});
View.args = {
  image: 'menu/menu-1673478636',
  title: "Плотва в'ялена",
  count: 2,
  price: 54,
}