import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Timezone } from "./Timezone";

export default {
  title: "Timezone",
  component: Timezone,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof Timezone>;

export const Template: ComponentStory<typeof Timezone> = (args) => (
  <Timezone {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  climate: {
    lat: -22.9470084,
    lon: -47.0553819,
    timezone: "America/São Paulo",
  },
};
