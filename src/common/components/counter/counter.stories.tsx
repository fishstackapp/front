import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Counter } from './counter.component';
// import { Counter } from './Counter.component';

export default {
  title: 'Common/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args}/>;

export const View = Template.bind({});
View.args = {
  children: "Відправити код ще раз"
}