import { getCharacterById } from '@/_MOCKS_/mockApi'

import CharAttributes from './sections/CharAttributes'
import CharacterStatus from './sections/CharacterStatus'
import { User } from 'lucide-react'

const CharacterSheet = () => {
  const char = getCharacterById(123)
  if(!char) return <p className='pt-20 text-center pb-10'>personagem não encontrado</p>

  console.log(char)

  return (
    <div className='pt-20 border-2 pl-4 pb-10 grid md:grid-cols-2 md:gap-0 gap-4'>
      {/* char attributes strenght... */}
      <CharAttributes attributesId={char.attributesId}/>
      {/* Char Profile */}
      <section className='flex w-full flex-col '>
          {/* Char Profile image*/}
        <div className=" flex-col  gap-4 border-[1px] border-amber-300 max-w-xl rounded-xl p-4 pb-8">
          <h3 className='flex gap-2 text-xl items-center font-medieval uppercase'><User/> Profile</h3>
            <div className=" flex w-full justify-center items-center">
              <div className="bg-slate-50 flex items-center justify-center min-h-52 w-52 rounded-sm">
                <User className='' size={50}/>
              </div>
            </div>
        </div>
        
        {/* char level and expbar */}
        
      </section>
      {/* char status hp and mp */}
      <CharacterStatus statusId={char.statusId} />
    </div>
  )
}

export default CharacterSheet