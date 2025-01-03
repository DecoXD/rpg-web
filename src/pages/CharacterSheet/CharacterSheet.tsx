import { getCharacterById } from '@/_MOCKS_/mockApi'

import CharAttributes from './sections/CharAttributes'
import CharacterStatus from './sections/CharacterStatus'

const CharacterSheet = () => {
  const char = getCharacterById(123)
  if(!char) return <p className='pt-20 text-center'>personagem não encontrado</p>

  console.log(char)

  return (
    <div className='pt-20 border-2 pl-4 '>
      {/* char attributes */}
      <CharAttributes attributesId={char.attributesId}/>
      {/* char status */}
      <CharacterStatus statusId={char.statusId} />

    </div>
  )
}

export default CharacterSheet