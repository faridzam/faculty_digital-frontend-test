import { apiRequest } from "@/core/utils/apiRequest";
import { defineStore } from "pinia";
import { ILoginState } from "../models/login";

export const useLoginStore = defineStore("login", {

  state: () : ILoginState => ({
    loading: false,
    username: "",
    password: ""
  }),
  getters: {
    getLoginState: (state) => state,
  },
  actions: {
    setLoginState(key: string, value: never) {
      let newState = {...this.$state};
      newState[key as keyof ILoginState] = value;
      this.$state = newState;
    },
    async submitLogin(){
      try {
        this.$state.loading = true;
        const response = await apiRequest.post('/auth/login', {
          username: this.username,
          password: this.password,
        })

        if (response.status === 200) {
          this.router.push('/dashboard')
        }
      } catch (error) {
        console.log("Login error: ", error)
      } finally {
        this.$state.loading = false;
      }
    }
  },
});