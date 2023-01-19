import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserOrders } from './user-orders.component';

export default {
  title: 'User/Orders',
  component: UserOrders,
} as ComponentMeta<typeof UserOrders>;

const Template: ComponentStory<typeof UserOrders> = (args) => (
  <UserOrders {...args} />
);


export const View = Template.bind({});
View.args = {}