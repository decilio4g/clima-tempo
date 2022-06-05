import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FutureDays } from "./FutureDays";

export default {
  title: "FutureDays",
  component: FutureDays,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    borderColor: { control: "color" },
    colorDay: { control: "color" },
    backgroundColorDay: { control: "color" },
  },
} as ComponentMeta<typeof FutureDays>;

export const Template: ComponentStory<typeof FutureDays> = (args) => (
  <FutureDays {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  currentClimate: {
    climate: {
      daily: [
        {
          temp: { day: 25.5, night: 25.5 },
          weather: [{ icon: "10d" }],
          dt: 13232323,
        },
        {
          temp: { day: 25.5, night: 25.5 },
          weather: [{ icon: "10d" }],
          dt: 13232323,
        },
        {
          temp: { day: 25.5, night: 25.5 },
          weather: [{ icon: "10d" }],
          dt: 13232323,
        },
        {
          temp: { day: 25.5, night: 25.5 },
          weather: [{ icon: "10d" }],
          dt: 13232323,
        },
        {
          temp: { day: 25.5, night: 25.5 },
          weather: [{ icon: "10d" }],
          dt: 13232323,
        },
      ],
    },
  },
};
