import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UpdateInfo } from './update-info.component';

export default {
  title: 'User/Update Info form',
  component: UpdateInfo,
} as ComponentMeta<typeof UpdateInfo>;

const Template: ComponentStory<typeof UpdateInfo> = args => <UpdateInfo {...args} />;

export const View = Template.bind({});
