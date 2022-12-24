import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ShowInfo } from './show-info.component';

export default {
  title: 'Common/Show Info',
  component: ShowInfo,
} as ComponentMeta<typeof ShowInfo>;

const Template: ComponentStory<typeof ShowInfo> = (args) => <ShowInfo {...args}/>;

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  children: (
    <>
      <p> Упс сталася помилка 😥</p>
      <p> Спробуйте трохи пізніше</p>
    </>
  ),
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  children: (
    <>
      <p>Нажаль сталася помилка 😕</p>
    </>
  ),
};