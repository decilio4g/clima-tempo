import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardInfosCurrentDay } from "./Card";

export default {
  title: "CardInfosCurrentDay",
  component: CardInfosCurrentDay,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
} as ComponentMeta<typeof CardInfosCurrentDay>;

export const Template: ComponentStory<typeof CardInfosCurrentDay> = (args) => (
  <CardInfosCurrentDay {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  currentClimate: {
    humidity: 56,
    pressure: 1020,
    wind_speed: 6.27,
    sunrise: 1654335784 * 1000,
    sunset: 1654374629 * 1000,
  },
};
