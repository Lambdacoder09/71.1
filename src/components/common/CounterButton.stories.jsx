import React from 'react';
import CounterButton from './CounterButton';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Common/CounterButton',
  component: CounterButton,
};

const Template = (args) => <CounterButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  num: 1,
  onIncrement: action('incremented'),
};
