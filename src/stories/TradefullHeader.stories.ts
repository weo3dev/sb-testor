import { Meta, StoryFn } from "@storybook/vue3";
import TradefullHeader from "./TradefullHeader.vue";

export default {
  title: "Components/TradefullHeader",
  component: TradefullHeader,
} as Meta<typeof TradefullHeader>;

const Template: StoryFn<typeof TradefullHeader> = (args) => ({
  components: { TradefullHeader },
  setup() {
    return { args };
  },
  template: '<TradefullHeader v-bind="args" />',
});

export const MainHeader = Template.bind({});
MainHeader.args = { background: "#56B6A9", label: "Tradefull" };
