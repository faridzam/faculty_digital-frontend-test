<script setup lang="ts">
import Button from '@/core/components/button/Button.vue';
import TextField from '@/core/components/input/TextField.vue';
import Typography from '@/core/components/text/Typography.vue';
import { COLORS_CLASS_CONSTANTS } from '@/core/constants/colors';
import { storeToRefs } from 'pinia';
import AuthCard from '../components/AuthCard.vue';
import { useLoginStore } from '../stores/login.store';

const {
  setLoginState,
  submitLogin
} = useLoginStore()

const {
  getLoginState
} = storeToRefs(useLoginStore())

</script>

<template>
  <div class="login-page responsive-container--column">
    <Typography
      variant="heading"
    >Login</Typography>
    <AuthCard>
      <TextField
        id="text-field-username"
        type="text" 
        :value="getLoginState.username"
        placeholder="Username"
        :onChange="(e) => setLoginState('username', (e.target as HTMLInputElement).value as never)"
      >
        <Typography>Username</Typography>
      </TextField>
      <TextField
        id="text-field-password"
        type="password" 
        :value="getLoginState.password"
        placeholder="Password"
        :onChange="(e) => setLoginState('password', (e.target as HTMLInputElement).value as never)"
      >
        <Typography>Password</Typography>
      </TextField>
      <Button
        variant="contained"
        rounded
        :onClick="submitLogin"
        :disabled="getLoginState.loading"
      >
        <Typography variant="button1" :color="COLORS_CLASS_CONSTANTS.whiteMain">{{ getLoginState.loading ? "loading..." : "sign in" }}</Typography>
      </Button>
    </AuthCard>
  </div>
</template>

<style scoped lang="stylus">
  .login-page{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
</style>