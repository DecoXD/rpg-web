import { CharacterAttributes } from '@/types/characters'
import React from 'react'

type CharContextProps = { 
  attributes:CharacterAttributes | null,
  setAttributes: React.Dispatch<React.SetStateAction<CharacterAttributes | null>>

}

export const CharContext = React.createContext<CharContextProps>({
  attributes:null,
  setAttributes:()=>{}
})

const CharContextProvider = ({children}:{children:React.ReactNode}) => {
  const [attributes, setAttributes] = React.useState<CharacterAttributes | null>(null)
  const value = {attributes, setAttributes}
  return (
    <CharContext.Provider value={value}>
      {children}
    </CharContext.Provider>
  )
}

export default CharContextProvider