import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HourAndDate } from "./HourAndDate";

export default {
  title: "HourAndDate",
  component: HourAndDate,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    borderColor: { control: "color" },
  },
} as ComponentMeta<typeof HourAndDate>;

export const Template: ComponentStory<typeof HourAndDate> = (args) => (
  <HourAndDate {...args} />
);

export const Primary = Template.bind({});
