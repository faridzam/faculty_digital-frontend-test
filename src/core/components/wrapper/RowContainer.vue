<script setup lang="ts">

import { defineProps } from "vue";

interface ContainerProps {
  fullwidth?: boolean
  justifyContent?: string
  alignItems?: string
}

const props = withDefaults(defineProps<ContainerProps>(), {
  fullwidth: false,
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
});

</script>

<template>
  <div
    class="row-container"
    :class="props.fullwidth && 'fullwidth'"
    :style="{justifyContent: justifyContent, alignItems: alignItems}"
  >
    <slot />
  </div>
</template>

<style scoped lang="stylus">
.row-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
}
.fullwidth{
  width: 100%;
}
</style>
