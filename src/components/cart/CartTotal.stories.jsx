import React from "react";
import CartSummary from "./CartTotal";

export default {
  title: "Cart/CartTotal",
  component: CartSummary,
};

const Template = (args) => <CartSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
  total: 1998.0,
};
