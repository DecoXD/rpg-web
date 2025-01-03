import { getCharacterAttributesById } from '@/_MOCKS_/mockApi'

import { CharacterAttributes } from '@/types/characters'

type CharAttributesProps = {
  attributesId:number | undefined
} 




const CharAttributes = ({attributesId}:CharAttributesProps) => {
  if(!attributesId) return <p>nao existem atributos.</p>

  const attributes = getCharacterAttributesById(attributesId) as CharacterAttributes

  if(!attributes) return <p>erro na consulta</p>

  const attributesMap = Object.keys(attributes)
  
  console.log(attributes)
  return (
    <section className='w-full'>
        <div className=" flex flex-col gap-4 p-2 w-full max-w-xl border-[1px] border-amber-400 rounded-lg">
          <h3 className='font-medieval text-xl uppercase text-amber-300'>ATTRIBUTES</h3>
          <ul className='font-medieval '>
            {
              attributesMap.map((attr,idx) =>{
                if(attr =="id") return
               
                return ( 
                <li key={attr+idx} className=" p-2 w-full max-w-[80%] flex justify-between border-b-[1px] border-black/5 ">
                  {attr}
                  <span>{attributes[attr as keyof CharacterAttributes]}</span>
              </li>)
              })
            }

          </ul>
          <div className=" flex gap-2 p-2">
            <p>points:</p>
            <span>0</span>
          </div>
        </div>
      </section>
  )
}

export default CharAttributes