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