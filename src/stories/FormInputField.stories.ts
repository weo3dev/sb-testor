import { Story } from "@storybook/vue3";
import FormInputField from "./FormInputField.vue";

export default {
  title: "Components/FormInputField",
  component: FormInputField,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "number"],
    },
  },
};

const Template: Story = (args) => ({
  components: { FormInputField },
  setup() {
    return { args };
  },
  template: '<form-input-field v-bind="args" />',
});

export const SearchField = Template.bind({});
SearchField.args = {
  label: "Product Search",
  placeholder: "Type in product or vendor name...",
};
