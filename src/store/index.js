// import React, { createContext, useState } from 'react'

// export const UserProfilContext = createContext({
//   first_name: '',
//   email: '',
//   set_user_profil_context: info => {}
// })

// const UserProfilContextProvider = ({ children }) => {
//   const UserProfilState = {
//     first_name: '',
//     email: '',
//     setuserProfileContext: info => setuserProfile(prevState => ({
//       ...prevState, 
//       first_name: info.first_name,
//       email: info.email,

//     })),
//   }
//   const [userProfile, setuserProfile] = useState(UserProfilState);
  
//   return (<UserProfilContext.Provider value={userProfile}>{children}</UserProfilContext.Provider>)
// } 

// export default UserProfilContextProvider;

import { createContext } from 'react'

export const userInfoContext = createContext({}); 