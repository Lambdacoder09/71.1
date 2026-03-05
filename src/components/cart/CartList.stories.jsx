import React from 'react';
import CartList from './CartList';
import { CartContext, CartProvider } from '../../context/CartContext.jsx';

export default {
  title: 'Cart/CartList',
  component: CartList,
  decorators: [
    (Story) => (
      <CartProvider>
        <Story />
      </CartProvider>
    ),
  ],
};

const Template = (args) => <CartList {...args} />;

export const EmptyCart = Template.bind({});
EmptyCart.args = {};

export const WithItems = Template.bind({});
WithItems.args = {};
WithItems.decorators = [
  (Story) => {
    const mockCart = [
      { id: 1, title: 'iPhone 9', price: 549, quantity: 1, thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg' },
      { id: 2, title: 'iPhone X', price: 899, quantity: 2, thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg' },
    ];

    const CartProviderWithItems = ({ children }) => {
      const [cart, setCart] = React.useState(mockCart);
      const getCartTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);
      const clearCart = () => setCart([]);
      const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
      const addToCart = (item) => {
        const existingItem = cart.find(i => i.id === item.id);
        if (existingItem) {
          setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
        } else {
          setCart([...cart, { ...item, quantity: 1 }]);
        }
      };
      const decrementFromCart = (item) => {
        const existingItem = cart.find(i => i.id === item.id);
        if (existingItem.quantity === 1) {
          removeFromCart(item.id);
        } else {
          setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i));
        }
      };

      return (
        <CartContext.Provider value={{ cart, getCartTotal, clearCart, addToCart, decrementFromCart, removeFromCart }}>
          {children}
        </CartContext.Provider>
      );
    };

    return (
      <CartProviderWithItems>
        <Story />
      </CartProviderWithItems>
    );
  },
];
