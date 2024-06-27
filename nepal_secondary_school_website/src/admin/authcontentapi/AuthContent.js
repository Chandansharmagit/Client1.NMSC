// import React, { useState } from 'react'
// import { createContext, useReducer } from 'react'

// export const AuthContext = createContext();

// export const authreducer = (state, action) => {
//     switch (action.type) {
//         case "login":
//             return { user: action.payload }

//         case "logout":

//             return { user: null }

//         default:
//             return state
//     }
// }
// export default function AuthContentProvider({ children }) {

//     const [state, dispatch] = useState(authreducer, {
//         user: null
//     })

//     console.log("authContext state:",state)

//     return (
//         <AuthContext.Provider value={{...state,dispatch}}>

//             {children}

//         </AuthContext.Provider>
//     )
  
// }
