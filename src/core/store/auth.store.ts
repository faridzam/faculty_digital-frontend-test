// import { defineStore } from "pinia";
// import { IAuthState } from "../models/auth";

// export const useAuthStore = defineStore("auth", {
//   state: () : IAuthState => ({
//     token: null,
//   }),
//   getters: {
//     getAuthState: (state) => state,
//   },
//   actions: {
//     setToken(value: string) {
//       this.token = value
//     },
//     clearToken(){
//       this.token = null
//     }
//   },
//   persist: {
//     enabled: true,
//   },
// });