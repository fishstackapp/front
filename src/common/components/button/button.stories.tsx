import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button.component copy';

export default {
  title: 'Common/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const View = Template.bind({});
View.args = {
  children: 'Увійти',
};