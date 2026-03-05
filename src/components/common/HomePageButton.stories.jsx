import React from "react";
import HomepageButton from "./HomePageButton";

export default {
  title: "Components/HomePageButton",
  component: HomepageButton,
};

const Template = (args) => <HomepageButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
