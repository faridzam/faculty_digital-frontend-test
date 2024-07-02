<script setup lang="ts">

import { defineProps, withDefaults } from "vue";

interface ButtonProps {
  disabled?: boolean
  fullwidth?: boolean
  variant?: 'button-text' | 'contained'
  rounded?: boolean
  onClick: () => void;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  fullwidth: false,
  rounded: false,
  variant: 'button-text'
});

</script>

<template>
  <button
    :disabled="disabled"
    class="button"
    :class="{
      'button--text': props.variant === 'button-text',
      'button--contained': props.variant === 'contained',
      'button--fullwidth': fullwidth,
      'button--disabled': disabled,
      'button--rounded' : rounded
    }"
    @click="props.onClick"
  >
    <slot />
  </button>
</template>

<style scoped lang="stylus">
.button{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.button--fullwidth{
  width: 100%
}
.button--disabled{
  background-color: $c-black-light !important
}
.button--rounded{
  border-radius: 8px !important
}
.button--text{
  color: $c-black-light;
  background: none;
  padding: 0 8px 0 8px;
  border: none;
}
.button--text:hover{
  color: $c-orange-main
}
.button--text:active{
  color: $c-orange-main
  opacity: 0.7
}
.button--contained{
  padding: 8px 16px;
  background-color: $c-orange-main;
  border: none;
}
.button--contained:hover{
  opacity : 0.7
}
.button--text:active{
}
</style>
