import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioInput } from './radio-input.component';

export default {
  title: 'Form/Radio',
  component: RadioInput,
} as ComponentMeta<typeof RadioInput>;

const Template: ComponentStory<typeof RadioInput> = (args) => (
  <RadioInput {...args} />
);

export const View = Template.bind({});
View.args = {
  value: 'cash',
  label: 'Готівка',
  name: 'payment',
  defaultChecked: false,
};