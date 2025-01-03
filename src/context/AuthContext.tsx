import { createContext, ReactNode, useContext, useState } from "react"

interface AuthContextProps {
  userId:string,
  setUserId:React.Dispatch<React.SetStateAction<string>>
}
const defaultAuthContext: AuthContextProps = {
  userId: '',
  setUserId: () => {}
};

export const AuthContext = createContext<AuthContextProps>(defaultAuthContext)

const AuthContextProvider = ({children}:{children:ReactNode}) => {
  const [userId,setUserId] = useState<string>('')
  const value = {
    userId,
    setUserId
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>)
}


export const useAuthContext = () => useContext(AuthContext)
export default AuthContextProvider