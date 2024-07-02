<script setup lang="ts">
</script>

<template>
  <div
    class="auth-card-container"
  >
    <slot />
  </div>
</template>

<style scoped lang="stylus">
  .auth-card-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 8px;
    gap: 16px;
    width: 300px;
    border: 1px solid $c-grey-main;
    border-radius: 16px
  }
</style>
