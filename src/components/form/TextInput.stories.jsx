import React from "react";
import TextInputBox from "./TextInput";

export default {
  title: "Form/TextInput",
  component: TextInputBox,
};

const Template = (args) => <TextInputBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search products...",
  rowWidth: "260px",
};
