import { PassiveSkill } from "@/types/Skills"
import { Flame } from "lucide-react"


type PassiveSkillContainerProps = {
  passiveSkillList:PassiveSkill[] | undefined
}

const PassiveSkillsContainer = ({passiveSkillList}:PassiveSkillContainerProps) => {

  if(!passiveSkillList){
    return <p>no passive skills</p>
  }
  return (
    <div className=" w-full">

      <ul className="flex flex-col gap-2">
        {passiveSkillList.map((skill) => (
          <li key={skill.id} className="flex justify-between  gap-2  p-2 font-medieval border-b-[1px] border-amber-300/50">

            <div className="flex gap-2">
              <Flame className="text-red-200"/>
           

            <div className="flex flex-col gap-2 ">
                <p className="font-bold text-sm font-medieval">{skill.name}</p>
                <p className="font-medium text-xs font-medieval">{skill.description}</p>
                <div className="flex gap-2">
                 
                  <p className="text-[10px] font-medieval"><span className="font-bold">{skill.type}</span></p>
                  
           
                </div>
            </div> 
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <p className="text-[10px] font-bold font-medieval flex gap-1">
                  <span className="uppercase text-xs">{skill.addedAttribute}</span> 
                  + 
                  <span className="text-xs font-bold">{skill.addedValue}</span>
                  
                  </p> 
                 
              </div>
              <div className=" flex flex-col gap-2">
              
              </div>
  
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default PassiveSkillsContainer