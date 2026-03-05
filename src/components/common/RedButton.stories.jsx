import React from "react";
import RedButton from "./RedButton";

export default {
  title: "Components/RedButton",
  component: RedButton,
};

const Template = (args) => <RedButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Delete",
  onClick: () => {},
};
