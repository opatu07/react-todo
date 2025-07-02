import React from 'react';
import InputForm from './index.jsx';

export default {
  title: 'Components/InputForm',
  component: InputForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'The HTML type attribute of the input field.',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text displayed when the input is empty.',
    },
    value: {
      control: 'text',
      description: 'The current value of the input field.',
    },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => <InputForm {...args} />;

export const NewTask = Template.bind({});
NewTask.args = {
  type: 'text',
  placeholder: 'NewTask',
  value: '',
};

export const Search = Template.bind({});
Search.args = {
  type: 'text',
  placeholder: 'SearchKeyword',
  value: '',
};

export const Email= Template.bind({});
Email.args = {
  type: 'email',
  placeholder: 'Email',
  value: '',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Password',
  value: '',
};
