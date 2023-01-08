import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { UserDropdownLink } from './user-dropdown-link.component';

export default {
  title: 'Auth/User Dropdown Link',
  component: UserDropdownLink,
} as ComponentMeta<typeof UserDropdownLink>;

const Template: ComponentStory<typeof UserDropdownLink> = args => {
  return (
    <MemoryRouter>
      <UserDropdownLink {...args} />
    </MemoryRouter>
  );
};

export const View = Template.bind({});
View.args = {
  children: 'Ваш профіль',
};
