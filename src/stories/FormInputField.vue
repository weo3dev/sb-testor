<template>
  <label :class="classes">
    <span class="form-input-field__label" v-if="!hideLabel">{{ label }}:</span>
    <input :aria-label="label" :style="{ width: `${width}rem` }" class="form-input-field__input" :type="type" :placeholder="placeholder" :value="value" :disabled="disabled" :id="id" :name="id" />
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";

type FormInputFieldType = "text" | "password" | "number";

interface FormInputFieldProps {
  label: string;
  id?: string;
  value?: string;
  hideLabel?: boolean;
  disabled?: boolean;
  width?: number;
  placeholder?: string;
  type?: FormInputFieldType;
}

const props = withDefaults(defineProps<FormInputFieldProps>(), {
  width: 15,
  type: "text",
});

const classes = computed(() => ({
  "form-input-field": true,
  "form-input-field--disabled": props.disabled,
}));
</script>

<style lang="scss" scoped>
@use "../styles/functions/color" as *;

.form-input-field {
  &__label {
    font-size: 0.8rem;
    margin-right: 0.5rem;
    color: color(gray);
  }

  &__input {
    border-radius: 2rem;
    padding: 0.4rem 0.8rem;
    border: 1px solid color(gray);
  }
}

.form-input-field--disabled {
  .form-input-field__input {
    color: color(gray);
    background-color: color(light);
    cursor: not-allowed;
  }
}
</style>
