
import { createContext } from "react"; 

export const RoleContext = createContext( {
    teacherRole : true,
    studentRole : false,
    handleRole : () => {}
})

