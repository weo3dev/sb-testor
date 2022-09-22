import type { Story } from "@storybook/vue3";
import CoreButton from "./CoreButton.vue";

export default {
  title: "Components/CoreButton",
  component: CoreButton,
  argTypes: {
    onClick: {},
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    type: {
      control: { type: "select" },
      options: ["button", "reset", "submit"],
    },
  },
};

const Template: Story = (args) => ({
  components: { CoreButton },
  setup() {
    return { args };
  },
  template: '<core-button v-bind="args" />',
});

export const SearchButton = Template.bind({});
SearchButton.args = {
  label: "Search",
};
