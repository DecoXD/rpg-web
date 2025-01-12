import { getAllSkillsBySkillList, getSkillListById } from '@/_MOCKS_/mockApi'
import DamageSkillsContainer from '@/components/shared/DamageSkillsContainer'
import PassiveSkillsContainer from '@/components/shared/PassiveSkillsContainer'
import SupportSkillsContainer from '@/components/shared/SupportSkillsContainer'
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
const ComponentsMap:Record<skillSections,(skillList:CharSkillList) =>JSX.Element> = {
  [skillSections.damageSkills]:(skillList) => <DamageSkillsContainer damageSkillList={skillList.damageSkills}/>,
  [skillSections.suportSkills]:(skillList) => <SupportSkillsContainer supportSkillList={skillList.suportSkills}/>,
  [skillSections.passiveSkills]:(skillList) => <PassiveSkillsContainer passiveSkillList={skillList.passiveSkills}/>
}

const CharSkills = ({id}:CharSkillsProps) => {
  const [skills,setSkills] = useState<CharSkillList>({
    passiveSkills:[],
    damageSkills:[],
    suportSkills:[]
  })
  

  //__MOCK__ skills that will be rendered in screen
  const [skillSection,setSkillSection] = useState<skillSections>(skillSections.damageSkills)
  const skillsList = getSkillListById(id)
  
  //handleuseSkill function 
  useEffect(() =>{
    if(skillsList){
      const charSkillList = getAllSkillsBySkillList(skillsList)
      setSkills(charSkillList)
      
    }
  },[skillsList])

  if(!skillsList){
    return <p>no skills</p>
  }

  
  return (
    <div className="  p-4 border-[1px] border-amber-300/50 shadow-md w-full max-w-xl rounded-xl h-full min-h-72 max-h-72 overflow-y-scroll  ">

      <h3 className='flex gap-2 font-medieval text-xl uppercase'><Flame className='text-red-500'/> Skills </h3>
      
      <div className=" flex flex-col items-center h-full justify-center gap-2">
       <div className="flex justify-between p-2 w-full">
        <p onClick={()=>setSkillSection(skillSections.damageSkills)}>damage</p>
        <p onClick={()=>setSkillSection(skillSections.suportSkills)}>suporte</p>
        <p onClick={()=>setSkillSection(skillSections.passiveSkills)}>passiva</p>
       </div>
        {/* colocar as a skills aqui e renderizar por usestate */}
        <div className=" h-full w-full 
        ">
          {
            ComponentsMap[skillSection](skills)
          }
        </div>
      </div>
    </div>
  )
}

export default CharSkills