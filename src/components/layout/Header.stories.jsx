
import React from 'react';

import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Layout/Header',
  component: Header,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>]
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};