import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputLoading } from './input-loading.component';

export default {
  title: 'Common/Input Loading',
  component: InputLoading,
} as ComponentMeta<typeof InputLoading>;

const Template: ComponentStory<typeof InputLoading> = args => <InputLoading {...args} />;

export const View = Template.bind({});
