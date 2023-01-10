import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ActionPaperFooter } from '../action-paper-footer/action-paper-footer.component';
import {  ActionPaper } from './action-paper.component';

export default {
  title: 'Common/Action paper',
  component:  ActionPaper,
} as ComponentMeta<typeof  ActionPaper>;

const Template: ComponentStory<typeof  ActionPaper> = args => <ActionPaper {...args} />;

export const View = Template.bind({});
View.args = {
  title: 'Персональні дані',
  children: <button>123</button>
}


export const Footer = Template.bind({});
View.args = {
  title: 'Персональні дані',
  children: <button>Персональні дані</button>,
  footer: (
    <ActionPaperFooter>
      <button>Персональні дані</button>
    </ActionPaperFooter>
  )
}