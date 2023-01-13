import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from './text-area.component';

export default {
  title: 'Form/Text Area',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const View = Template.bind({});
View.args = {
  label: 'Деталі замовлення',
  placeholder: 'Введіть будь-яку корисну інформацію',
};