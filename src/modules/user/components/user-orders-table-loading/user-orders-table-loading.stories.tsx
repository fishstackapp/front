import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserOrdersTableLoading } from '@app/modules/user/components/user-orders-table-loading/user-orders-table-loading.component';

export default {
  title: 'User/Orders table loading',
  component: UserOrdersTableLoading,
} as ComponentMeta<typeof UserOrdersTableLoading>;

const Template: ComponentStory<typeof UserOrdersTableLoading> = (args) => (
  <UserOrdersTableLoading {...args} />
);

export const View = Template.bind({});
View.args = {};