
import { createContext, useReducer } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch(action.type){
 // get payload from user cookies when logged in
 case 'LOGIN':
  return { user: action.payload}
 // set payload to null when user is logged out
 case 'LOGOUT':
  return { user: null}
 // no changes return the orignal state
 default: 
  return state
 } 
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  console.log('AuthContext state:', state)
  
  return (
    // component made line 3 // this wraps the app
  <AuthContext.Provider value={{...state, dispatch}}> 
   {children}
  </AuthContext.Provider>
  )

}