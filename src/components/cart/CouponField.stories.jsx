import React from "react";
import CouponField from "./CouponField";

export default {
  title: "Cart/CouponField",
  component: CouponField,
};

const Template = (args) => <CouponField {...args} />;

export const Default = Template.bind({});
Default.args = {};
