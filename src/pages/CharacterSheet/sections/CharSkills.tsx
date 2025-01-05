import { getAllSkillsBySkillList, getSkillListById } from '@/_MOCKS_/mockApi'
import { CharSkillList } from '@/types/Skills'
import { Flame } from 'lucide-react'
import { useEffect, useState } from 'react'

type CharSkillsProps = {
  id:number
}
enum skillSections{
  damageSkills ,
  passiveSkills,
  suportSkills
}

const ComponentsMap:Record<skillSections,()=>JSX.Element> = {
  [skillSections.damageSkills]:() =><p>a</p>,
  [skillSections.passiveSkills]:() =><p>b</p>,
  [skillSections.suportSkills]:()=><p>c</p>,
}

const CharSkills = ({id}:CharSkillsProps) => {
  const [skills,setSkills] = useState<CharSkillList>({
    passiveSkills:[],
    damageSkills:[],
    suportSkills:[]
  })

  const [skillSection,setSkillSection] = useState<skillSections>(skillSections.passiveSkills)
  const skillsList = getSkillListById(id)
  
  useEffect(() =>{
    if(skillsList){
      const charSkillList = getAllSkillsBySkillList(skillsList)
      setSkills(charSkillList)
      
    }
  },[skillsList])


  
  return (
    <div className="  p-4 border-[1px] border-amber-300/50 shadow-md w-full max-w-xl rounded-xl h-full">
      <h3 className='flex gap-2 font-medieval text-xl uppercase'><Flame className='text-red-500'/> Skills </h3>
      <div className=" flex items-center h-full justify-center gap-2">
      <p>damage</p>
        <p>suporte</p>
        <p>passiva</p>
        {/* colocar as a skills aqui e renderizar por usestate */}
        <div className=" h-full
        ">
          {
            ComponentsMap[skillSection]()
          }
        </div>
      </div>
    </div>
  )
}

export default CharSkills