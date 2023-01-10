import { ComponentStory, ComponentMeta } from '@storybook/react';
import {  ActionPaperFooter } from './action-paper-footer.component';

export default {
  title: 'Common/Action paper footer',
  component:  ActionPaperFooter,
} as ComponentMeta<typeof  ActionPaperFooter>;

const Template: ComponentStory<typeof  ActionPaperFooter> = args => <ActionPaperFooter {...args} />;

export const View = Template.bind({});
View.args = {
  children: <button>Footer Button</button>
}
