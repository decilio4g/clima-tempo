import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HourAndDate } from "./HourAndDate";

export default {
  title: "Dadadadada",
  component: HourAndDate,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    borderColor: { control: "color" },
    colorDay: { control: "color" },
    backgroundColorDay: { control: "color" },
  },
} as ComponentMeta<typeof HourAndDate>;

export const Template: ComponentStory<typeof HourAndDate> = (args) => (
  <HourAndDate {...args} />
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
