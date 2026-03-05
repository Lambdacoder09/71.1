import React from 'react';
import CounterButton from './CounterButton';
import { fn } from 'storybook/test';

export default {
  title: 'Common/CounterButton',
  component: CounterButton,
};

const Template = (args) => <CounterButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  num: 1,
  onIncrement: fn(),
};
