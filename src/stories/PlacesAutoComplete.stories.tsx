import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PlacesAutoComplete } from "./placesAutoComplete";

export default {
  title: "placesAutoComplete",
  component: PlacesAutoComplete,
  argTypes: {
    borderColor: { control: "color" },
    border: { control: "boolean" },
  },
} as ComponentMeta<typeof PlacesAutoComplete>;

export const Template: ComponentStory<typeof PlacesAutoComplete> = (args) => (
  <PlacesAutoComplete {...args} />
);

export const Primary = Template.bind({});
