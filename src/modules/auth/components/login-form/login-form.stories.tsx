import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from './login-form.component';

export default {
  title: 'Auth/Login Form',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const View = Template.bind({});
View.args = {

};