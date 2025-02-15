import { getAllSkillsBySkillList, getSkillListById } from '@/_MOCKS_/services/skills'
import DamageSkillsContainer from '@/components/shared/DamageSkillsContainer'
import PassiveSkillsContainer from '@/components/shared/PassiveSkillsContainer'
import SupportSkillsContainer from '@/components/shared/SupportSkillsContainer'
import { useCharContext } from '@/context/CharContext'
import { CharSkillList, SkillTypeList } from '@/types/Skills'
import { Flame } from 'lucide-react'
import { useEffect, useState } from 'react'

type CharSkillsProps = {
  id:number
}
enum skillSections{
  damageSkills,
  passiveSkills,
  suportSkills ,
}

//todo send the skillList like parameter and render in returned component 
const ComponentsMap:Record<skillSections,(skillList:CharSkillList,handler:(skillId:number,collection?:SkillTypeList) => void) =>JSX.Element> = {
  [skillSections.damageSkills]:(skillList,handler) => <DamageSkillsContainer damageSkillList={skillList.damageSkills} handler={handler}/>,
  [skillSections.suportSkills]:(skillList,handler) => <SupportSkillsContainer supportSkillList={skillList.suportSkills} handler={handler}/>,
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
  const {attributes,status,setAttributes,setStatus} = useCharContext()


  const handleSkillActivated = (skillId:number,collection?:SkillTypeList)=>{
    if(!collection) return
    if(!attributes || !status) return
    //todo verify if skill list is empty
    const skillList = skills[collection]
   
    if(!skillList){
      return
    }
    //todo get skill by  id
    const skill = skillList.map(skill =>{
      if(!skill) return
      if(skill.id === skillId){
        
        //todo set coutdown to skill
        skill.turnsToActivate = skill.coutdown;
        //todo set skill damage
        const skillDamage = attributes.damage + skill.skillBaseDamage + (attributes[skill.skillMultiplierAttribute] * skill.skillMultiplyValue)
        //todo subtract mp from player character.
        const mpIsEnough = status.mp.current - skill.cost >=0
        if(mpIsEnough){
          setStatus({
            ...status,
            mp:{
              ...status.mp,
              current:status.mp.current - skill.cost
            }
          })
        }

        
        return skill
      }
      return skill
    }) 

    if(!skill){
      return
    }



    
    //todo roll dice to see if skill will be activated
    //todo apply skill effect
    //activate skill
    

    //todo set skill in state
    setSkills((prev) =>{
      return {
        ...prev,
        [collection]:[...skill]
      }
    })
    


  }



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
            ComponentsMap[skillSection](skills,handleSkillActivated)
          }
        </div>
      </div>
    </div>
  )
}

export default CharSkills