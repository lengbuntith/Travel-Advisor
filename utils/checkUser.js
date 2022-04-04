import { getCookie } from './getCookie'

export const checkUser = () => {
  if (getCookie('access_token')) {
    return true
  } else {
    return false
  }
}
