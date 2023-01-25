import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterAboutUs } from './footer-about-us.component';

export default {
  title: 'Common/Footer about us',
  component: FooterAboutUs,
} as ComponentMeta<typeof FooterAboutUs>;

const Template: ComponentStory<typeof FooterAboutUs> = args => (
  <ul>
    <FooterAboutUs {...args} />
  </ul>
);

export const View = Template.bind({});
View.args = {};
