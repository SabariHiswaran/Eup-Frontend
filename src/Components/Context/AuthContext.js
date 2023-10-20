

import React, {   createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const AuthContextComponent = ({children}) => {


   
  const [token, setToken] = useState(false)

  const [userId, setUserId] = useState(false)

  const login = (userId,token) => {
    setToken(token)
    setUserId(userId)
  }

  const logout = () => {
    setToken(null)
    setUserId(null)
  }


    return (
        <AuthContext.Provider value= {{
            isLoggedIn : !!token,
            token : token,
            userId : userId,
            login : login,
            logout : logout
          }}>
            {children}
        </AuthContext.Provider>
    )
}

export const Auth = () => {
    return useContext(AuthContext)
}

export default AuthContextComponent
