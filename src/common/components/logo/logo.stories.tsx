import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from './logo.component';

export default {
  title: 'Common/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args}/>;

export const View = Template.bind({});
View.args = {}