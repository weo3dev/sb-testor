<template>
  <button :class="classes" :id="id" :type="type" :disabled="disabled" :aria-label="label" @click="onClick">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type CoreButtonType = "button" | "reset" | "submit";
type CoreButtonVariant = "primary" | "secondary";

interface CoreButtonProps {
  label: string;
  id?: string;
  type?: CoreButtonType;
  variant?: CoreButtonVariant;
  disabled?: boolean;
}
interface CoreButtonEmits {
  // eslint-disable-next-line no-unused-vars
  (event: "click"): void;
}

const props = withDefaults(defineProps<CoreButtonProps>(), {
  type: "button",
  variant: "primary",
});

const classes = computed(() => ({
  "core-button": true,
  "core-button--primary": props.variant === "primary",
  "core-button--secondary": props.variant === "secondary",
  "core-button--disabled": props.disabled,
}));

const emit = defineEmits<CoreButtonEmits>();

const onClick = () => {
  emit("click");
};
</script>

<style lang="scss" scoped>
@use "../styles/functions/color" as *;

.core-button {
  border-radius: 2rem;
  border: 0;
  font-size: 0.8rem;
  padding: 0.4rem 0.8rem;
}

.core-button--primary {
  color: color(light);
  background-color: color(cta, primary);

  @media (prefers-color-scheme: dark) {
    color: color(dark);
    background-color: color(light);
  }
}

.core-button--secondary {
  background-color: color(light);
  color: color(dark);

  @media (prefers-color-scheme: dark) {
    background-color: color(dark);
    color: color(light);
  }
}

.core-button--disabled {
  color: color(gray);
  background-color: color(cta, light);
  cursor: not-allowed;
}
</style>
