import React from "react";
import LoadingProduct from "./LoadingProduct";

export default {
  title: "Components/LoadingProduct",
  component: LoadingProduct,
};

const Template = (args) => <LoadingProduct {...args} />;

export const Default = Template.bind({});
Default.args = {};
