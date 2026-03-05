write import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Product',
  imageUrl: 'https://via.placeholder.com/150',
  category: 'Sample Category',
  price: 99.99,
  product: { id: 1 },
  addToCart: () => alert('Added to cart!'),
};