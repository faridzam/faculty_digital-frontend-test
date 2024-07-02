<script setup lang="ts">
  import { defineProps } from "vue";

  export type TypographyVariant = 'heading' | 'subtitle' | 'body1' | 'body2' | 'button1' | 'button2'

  interface TypographyProps {
    variant?: TypographyVariant
    color?: string,
    bold?: boolean
  }

  const props = withDefaults(defineProps<TypographyProps>(), {
    variant: 'body2',
    color: 'mainBlack',
    bold: false
  });
</script>

<template>
  <p 
    class="typography"
    :class="props.variant, props.color"
    v-bind:class="{'typography--bold': bold}"
  >
    <slot />
  </p>
</template>

<style scoped lang="stylus">
  .typography{
    font-family: "Arial"
    margin: 0
    padding: 0
  }
  .typography--bold{
    font-weight: 600 !important
  }
  .heading{
    font-size: 36px;
    font-weight: 600;
  }
  .subtitle{
    font-size: 24px;
    font-weight: 600;
  }
  .body1{
    font-size: 16px;
    font-weight: 500;
  }
  .body2{
    font-size: 14px;
    font-weight: 400;
  }
  .button1{
    font-size: 18px;
    font-weight: 500;
  }
</style>
