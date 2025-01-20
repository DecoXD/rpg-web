import { CharSkillList, CharSkills, DamageSkill, PassiveSkill, SupportSkill } from "@/types/Skills";
import { MockCharSkills, MockCharSupportSkills, MockDamageSkills, MockPassiveSkills } from "../char";

export const getSkillListById = (id: number):CharSkills | undefined =>  {
  // Como temos apenas um mock de equipamento, vamos retorná-lo para qualquer ID válido
  return MockCharSkills.find((skill) => skill.id === id);
}


const getSkillsMethodMap = {
  damageSkills:(id:number):DamageSkill => (MockDamageSkills.find((skill) => skill.id === id)) as DamageSkill,
  passiveSkills:(id:number):PassiveSkill => MockPassiveSkills.find((skill) => skill.id === id) as PassiveSkill,
  suportSkills:(id:number):SupportSkill => MockCharSupportSkills.find((skill) => skill.id === id) as SupportSkill
}


export const getAllSkillsBySkillList = (skillList: CharSkills):CharSkillList =>{

  const suportSkills = skillList.suportSkills?.map((id) => getSkillsMethodMap.suportSkills(id));
  const damageSkills = skillList.damageSkills?.map((id) => getSkillsMethodMap.damageSkills(id));
  const passiveSkills = skillList.passiveSkills?.map((id) => getSkillsMethodMap.passiveSkills(id));
  
  return{
    suportSkills:suportSkills,
    damageSkills:damageSkills,
    passiveSkills:passiveSkills
  }
}