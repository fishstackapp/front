import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { UserDropdown } from './user-dropdown.component';

export default {
  title: 'Auth/User Dropdown',
  component: UserDropdown,
} as ComponentMeta<typeof UserDropdown>;

const Template: ComponentStory<typeof UserDropdown> = args => {
  return (
    <MemoryRouter>
      <div className="p-4 shadow flex justify-end">
        <UserDropdown {...args} />
      </div>
    </MemoryRouter>
  );
};

export const View = Template.bind({});
View.args = {};
