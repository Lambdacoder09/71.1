import React from 'react';
import DescButton from './DescButton';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/DescButton',
  component: DescButton,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>]
};

const Template = (args) => <DescButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
};