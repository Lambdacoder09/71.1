import React from "react";
import NotFound from "./NotFound";

export default {
  title: "Components/NotFound",
  component: NotFound,
};

const Template = (args) => <NotFound {...args} />;

export const Default = Template.bind({});
Default.args = {};
