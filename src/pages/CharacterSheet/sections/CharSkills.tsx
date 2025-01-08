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
//todo send the skillList like parameter and render in returned component 
const ComponentsMap:Record<skillSections,()=>JSX.Element> = {
  [skillSections.damageSkills]:() =><p>a</p>,
  [skillSections.suportSkills]:()=><p>b</p>,
  [skillSections.passiveSkills]:() =><p>c</p>
}

const CharSkills = ({id}:CharSkillsProps) => {
  const [skills,setSkills] = useState<CharSkillList>({
    passiveSkills:[],
    damageSkills:[],
    suportSkills:[]
  })
  

  //__MOCK__ skills that will be rendered in screen
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
      
      <div className=" flex flex-col items-center h-full justify-center gap-2">
       <div className="flex justify-between p-2 w-full">
        <p onClick={()=>setSkillSection(skillSections.damageSkills)}>damage</p>
        <p onClick={()=>setSkillSection(skillSections.suportSkills)}>suporte</p>
        <p onClick={()=>setSkillSection(skillSections.passiveSkills)}>passiva</p>
       </div>
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