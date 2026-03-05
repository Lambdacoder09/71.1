import React from 'react';
import DescButton from './DescButton';

export default {
  title: 'Components/DescButton',
  component: DescButton,
};

const Template = (args) => <DescButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
};
