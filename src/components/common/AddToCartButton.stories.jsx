import React from 'react';
import AddToCartButton from './AddToCartButton';
import { CartProvider } from '../../context/CartContext';

export default {
  title: 'Components/AddToCartButton',
  component: AddToCartButton,
  decorators: [(Story) => <CartProvider><Story /></CartProvider>]
};

const Template = (args) => <AddToCartButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: { id: 1, name: 'Sample Product', price: 10 },
};