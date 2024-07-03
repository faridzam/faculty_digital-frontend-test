<script setup lang="ts">
import Button from '@/core/components/button/Button.vue';
import Typography from '@/core/components/text/Typography.vue';
import { logout } from '@/core/utils/auth';

</script>

<template>
  <div class="layout-container">
    <div class="logout-button">
      <Button variant="contained" :onClick="logout" rounded>
        <Typography variant="button2">logout</Typography>
      </Button>
    </div>
    <div class="sidebar">
      <a class="active">
        <Typography variant="body1">Dashboard</Typography>
      </a>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .layout-container{
    height: 100%;
    width: 100%;
  }
  .logout-button{
    position: fixed;
    z-index : 999;
    right: 32px;
    top: 32px
  }
  .sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: $c-grey-main;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
 
.sidebar a.active {
  background-color: $c-orange-main;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: $c-green-light;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>