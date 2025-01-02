import { createContext, ReactNode, useState } from "react"

interface AuthContextProps {
  userId:string | null,
  setUserId:React.Dispatch<React.SetStateAction<string|null>>
}

const AuthContext = createContext<AuthContextProps|null>(null)

const AuthContextProvider = ({children}:{children:ReactNode}) => {
  const [userId,setUserId] = useState<string|null>(null)
  const value = {
    userId,
    setUserId
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>)
}

export default AuthContextProvider