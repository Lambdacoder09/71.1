import React from "react";
import SignUpPage from "./SignUpPage";

export default {
  title: "Pages/SignUpPage",
  component: SignUpPage,
};

const Template = (args) => <SignUpPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
