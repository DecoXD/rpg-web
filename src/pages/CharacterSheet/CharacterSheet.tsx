import { getCharacterById } from '@/_MOCKS_/mockApi'

import CharAttributes from './sections/CharAttributes'
import CharacterStatus from './sections/CharacterStatus'
import CharProfile from './sections/CharProfile'
import CharSkills from './sections/CharSkills'
import CharEquipment from './sections/CharEquipment'


const CharacterSheet = () => {
  const char = getCharacterById(123)
  if(!char) return <p className='pt-20 text-center pb-10'>personagem não encontrado</p>

  console.log(char)

  return (
    <div className="flex pt-20 items-center justify-center w-full">
      <div className='   border-2 md:p-4 p-2 pb-10   grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-4'>
      {/* Char Profile image*/}
      <CharProfile/>  
      <section className='flex w-full flex-col gap-2'>
      {/* char attributes strenght... */}
        <CharAttributes attributesId={char.attributesId}/>
        {/* char status hp and mp */}
        <CharacterStatus statusId={char.statusId} />
      </section>

      {/* char skill list */}
      <CharSkills id={char.skillsListId}/>
      {/* Char equipment */}
      <CharEquipment/>
    </div>
    </div>
  )
}

export default CharacterSheet