import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '@app/common/components/header/header.component';

export default {
  title: 'Common/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>;

export const View = Template.bind({});
View.args = {
  categories: [
    {
      id: '59cd6337-8713-42f2-ab54-093d3bd145cb',
      slug: 'fish',
      title: 'Риба',
    },
    {
      id: "d7dd97ae-496c-429e-ba90-035ce704bdc6",
      slug: "snack",
      title: "Снеки",
    }
  ]
}

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
}