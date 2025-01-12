import { DamageSkill } from "@/types/Skills"
import { Flame, Sword } from "lucide-react"
import { Button } from "../ui/button"

type DamageSkillContainerProps = {
  damageSkillList:DamageSkill[] | undefined
}
const DamageSkillsContainer = ({damageSkillList}:DamageSkillContainerProps) => {

  if(!damageSkillList){
    return <p>no damage skills</p>
  }
  return (
    <div className=" w-full">

      <ul className="flex flex-col gap-2">
        {damageSkillList.map((skill) => (
          <li key={skill.id} className="flex  gap-2  p-2 font-medieval border-b-[1px] border-amber-300/50">
            <div className="">
              <Flame className="text-red-200"/>
            </div>

            <div className="flex flex-col gap-2 ">
                <p className="font-bold text-sm font-medieval">{skill.name}</p>
                <p className="font-medium text-xs font-medieval">{skill.description}</p>
                <div className="flex gap-2 font-bold">
                 
                  <p className="text-[10px] font-medieval"><span className="font-bold">{skill.type}</span></p>
                  <p className="text-[10px] font-medieval">DAMAGE:<span className="font-bold">{skill.skillBaseDamage}</span></p>
                  <p className="text-[10px] uppercase">attr: <span className="text-[10px] font-bold">{skill.skillMultiplierAttribute.substring(0,3)}</span></p>
                  <p className="text-[10px] uppercase"><span className="text-[10px] font-bold">{skill.damageType}</span></p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <p className="text-[10px] font-bold font-medieval">CDW:<span>{skill.coutdown}</span></p> 
                <p className="text-[10px] font-bold font-medieval">MP:<span>{skill.cost}</span></p> 
                <p className="text-[10px] font-bold font-medieval">X:<span>{skill.skillMultiplyValue}</span></p> 
               
              </div>
              <div className=" flex flex-col gap-2">
                <Button 
                  className={`${skill.turnsToActivate?'bg-slate-500':'bg-green-700'} w-full p-1 text-xs  h-5 flex items-center `} 
                >
                  {skill.turnsToActivate? skill.turnsToActivate : "activate"}</Button>
                <div className=" text-xs font-bold">
                Effect:<span>{skill.turnsEffected}</span>

                </div>
              </div>
  
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default DamageSkillsContainer