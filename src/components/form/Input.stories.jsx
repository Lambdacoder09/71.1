import React from 'react';
import Input from './Input';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    touched: { control: 'boolean' },
    error: { control: 'text' },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'username',
  name: 'username',
  placeholder: 'Username',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  id: 'email',
  name: 'email',
  placeholder: 'Email',
};

export const Error = Template.bind({});
Error.args = {
  id: 'password',
  name: 'password',
  placeholder: 'Password',
  touched: true,
  error: 'Password is required',
};

export const Search = Template.bind({});
Search.args = {
    id: 'search',
    name: 'search',
    placeholder: 'Search for products...',
  };
