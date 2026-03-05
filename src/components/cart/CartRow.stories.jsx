import React from "react";
import CartRow from "./CartRow";

export default {
  title: "Cart/CartRow",
  component: CartRow,
};

const Template = (args) => <CartRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  title: "iPhone 9",
  price: 549,
  quantity: 2,
  onQuantityChange: () => {},
  onRemove: () => {},
};
