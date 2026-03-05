
import React from 'react';
import CartItem from './CartItem';
import { CartProvider } from '../../context/CartContext.jsx';

export default {
  title: 'Cart/CartItem',
  component: CartItem,
  decorators: [
    (Story) => (
      <CartProvider>
        <table>
          <tbody>
            <Story />
          </tbody>
        </table>
      </CartProvider>
    ),
  ],
};

const Template = (args) => <CartItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    id: 1,
    title: 'iPhone 9',
    price: 549,
    quantity: 1,
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
};
