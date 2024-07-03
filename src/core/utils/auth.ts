import { apiRequest } from "./apiRequest"

export async function checkAuth() {
  try {
    const response = await apiRequest.get('/auth/check')

    if (response.status === 200) {
      return true
    }
    return false
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function logout() {
  try {
    const response = await apiRequest.get('/auth/logout')
    if (response.status === 200) {
      window.location.replace('/login')
    }
  } catch (error) {
    console.log(error)
  }
}