import React from 'react';
import DescCard from './DescCard';
import { CartProvider } from '../../context/CartContext.jsx';

export default {
  title: 'Common/DescCard',
  component: DescCard,
  decorators: [
    (Story) => (
      <CartProvider>
        <Story />
      </CartProvider>
    ),
  ],
};

const Template = (args) => <DescCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: 2,
    title: 'iPhone X',
    description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price: 899,
    rating: 4.44,
    stock: 34,
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
  },
};

export const FirstProduct = Template.bind({});
FirstProduct.args = {
  product: {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    rating: 4.69,
    stock: 94,
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
};
