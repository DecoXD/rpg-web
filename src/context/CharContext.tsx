import { mockCharacterStatus } from '@/_MOCKS_/char'

import { CharacterAttributes, CharacterStatus } from '@/types/characters'
import React from 'react'

type CharContextProps = { 
  attributes:CharacterAttributes | null,
  setAttributes: React.Dispatch<React.SetStateAction<CharacterAttributes | null>>
  status:CharacterStatus ,
  setStatus: React.Dispatch<React.SetStateAction<CharacterStatus>>

}

export const CharContext = React.createContext<CharContextProps>({
  attributes:null,
  setAttributes:()=>{},
  status:mockCharacterStatus,
  setStatus:()=>{}
})

const CharContextProvider = ({children}:{children:React.ReactNode}) => {
  const [attributes, setAttributes] = React.useState<CharacterAttributes | null>(null)
  const [status, setStatus] = React.useState<CharacterStatus >(mockCharacterStatus)
  const value = {attributes, setAttributes,status,setStatus}

  return (
    <CharContext.Provider value={value}>
      {children}
    </CharContext.Provider>
  )
}

export default CharContextProvider

export const useCharContext = () => {
  const context = React.useContext(CharContext)
  if(!context){
    throw new Error('useCharContext must be used within an CharContextProvider')
  }
  return context
}