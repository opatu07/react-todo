import React from 'react';
import ActionButton from './index.jsx'; 

export default {
  title: 'Components/ActionButton', 
  component: ActionButton,
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

const Template = (args) => <ActionButton {...args} />;

export const Edit = Template.bind({});
Edit.args = {
  title: 'edit',
};

export const Store = Template.bind({});
Store.args = {
  title: 'store',
};

export const Cancel = Template.bind({});
Cancel.args = {
  title: 'cancel',
};


