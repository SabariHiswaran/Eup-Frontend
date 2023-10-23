import React, {   createContext, useContext, useState } from 'react'

const RoleData = createContext()

const RoleContext = ({children}) => {


    const [teacherRole, setTeacherRole] = useState(true)
    const [studentRole, setStudentRole] = useState(false)

    const handleRole = () => {
      
        setTeacherRole(prevVal => !prevVal)
        setStudentRole(prevVal => !prevVal)
    }

    return (
        <RoleData.Provider value={{ teacherRole,setTeacherRole, studentRole, handleRole }}>
            {children}
        </RoleData.Provider>
    )
}

export const Role = () => {
    return useContext(RoleData)
}

export default RoleContext
