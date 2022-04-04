<template>
  <a
    v-if="href"
    :href="href"
    :class="`btn btn-${variant}`">
    <slot />
  </a>
  <button
    v-else
    :class="`btn btn-${variant}`">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'btn-component',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      validator: (value: string) => ['primary', 'secondary', 'destructive'].indexOf(value) !== -1,
      default: 'primary',
    },
    onClick: {
      type: Function,
    },
    href: String,
    type: {
      type: String,
      default: 'button',
      validator: (value: string) => ['button', 'submit', 'reset'].indexOf(value) !== -1,
    },
  },
});

</script>

<style lang="scss" scoped>
  .btn {
    background: var(--buttonBackground);
    color: var(--buttonColor);
    border: 1px solid var(--borderColor);
    border-radius: 3px;
    padding: 4px;
    font-weight: 600;
    font-size: 16px;

    &-primary {
      --buttonBackground: var(--color-buttonPrimaryBackgroundColor);
      --buttonColor: var(--color-buttonPrimaryColor);
      --borderColor: var(--color-buttonPrimaryBorder);
    }

    &-secondary {
      --buttonBackground: var(--color-buttonSecondaryBackgroundColor);
      --buttonColor: var(--color-buttonSecondaryColor);
      --borderColor: var(--color-buttonSecondaryBorder);
    }

    &-destructive {
      --buttonBackground: var(--color-buttonDestructiveBackgroundColor);
      --buttonColor: var(--color-buttonDestructiveColor);
      --borderColor: var(--color-buttonDestructiveBorder);
    }
  }
</style>
