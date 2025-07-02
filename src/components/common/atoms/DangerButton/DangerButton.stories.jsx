import React from 'react';
import DangerButton from './index.jsx'; 

export default {
  title: 'Components/DangerButton', 
  component: DangerButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The text displayed on the button',
    },
    onClick: { action: 'clicked' }, 
  },
};

const Template = (args) => <DangerButton {...args} />;

export const Delete = Template.bind({});
Delete.args = {
  title: 'delete',
};

export const Logout = Template.bind({});
Logout.args = {
  title: 'logout',
};

