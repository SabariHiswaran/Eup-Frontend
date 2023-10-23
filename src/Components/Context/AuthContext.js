

import React, {   createContext, useContext, useState } from 'react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Role } from './RoleContext'

const AuthContext = createContext()

const AuthContextComponent = ({children}) => {


   
  const [token, setToken] = useState(false)

  const [userId, setUserId] = useState(false)



  const login = useCallback( (userId,token) => {
    setToken(token)
    setUserId(userId)
    localStorage.setItem("userData", JSON.stringify(
      {userId : userId ,
         token : token,
         }))
  },[])

  const logout =useCallback( () => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem("userData")
  },[])


    return (
        <AuthContext.Provider value= {{
            isLoggedIn : !!token,
            token : token,
            userId : userId,
            login : login,
            logout : logout,
          }}>
            {children}
        </AuthContext.Provider>
    )
}

export const Auth = () => {
    return useContext(AuthContext)
}

export default AuthContextComponent
