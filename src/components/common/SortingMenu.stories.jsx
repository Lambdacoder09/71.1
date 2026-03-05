import React from "react";
import SortingMenu from "./SortingMenu";

export default {
  title: "Components/SortingMenu",
  component: SortingMenu,
};

const Template = (args) => <SortingMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSortChange: () => {},
};
