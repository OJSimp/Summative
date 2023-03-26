
import { useAuthContext } from "./useAuthContext"

export const useLogOut = () => {

 const { dispatch } = useAuthContext()

// what tells us the user is logged in is the token - no need to send request to the backend
 const logout = () => {
 // remove user from local storage
 localStorage.removeItem('user')

 // use dispatch to loggout user - rest user to null 
 dispatch({type: "LOGOUT"})
 
 }

 return logout

}