import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked!'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  onClick: () => alert('Secondary button clicked!'),
  style: { backgroundColor: 'gray', color: 'white' },
};
