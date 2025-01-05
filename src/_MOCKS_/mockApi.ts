import { Character, CharacterAttributes, CharacterStatus, CharEquipment } from "@/types/characters";
import { Equipment } from "@/types/equipment";
import { mockCharacterList, mockCharacterAttributes, mockCharacterStatus, mockCharacterEquipment, mockCharacterInventory, MockCharSkills, MockDamageSkills, MockPassiveSkills, MockCharSupportSkills } from "./char";
import { CharSkillList, CharSkills, DamageSkill, PassiveSkill, SupportSkill } from "@/types/Skills";
import { get } from "http";

// Método para buscar personagem por ID
export const getCharacterById = (id: number): Character | undefined => {
  return mockCharacterList.find(char => char.id === id);
};


// Método para buscar atributos do personagem por ID
export const getCharacterAttributesById = (id: number): CharacterAttributes| undefined => {
  if (id === mockCharacterAttributes.id) {
    return mockCharacterAttributes;
  }
  return undefined;
};



// Método para buscar status do personagem por ID 
export const getCharacterStatusById = (id: number): CharacterStatus | undefined => {
  if (id === mockCharacterStatus.id) {
    return mockCharacterStatus;
  }
  return undefined;
};


// Método para buscar equipamentos do personagem por ID
export const getCharacterEquipmentById = (id: number): CharEquipment | undefined => {
  // Como temos apenas um mock de equipamento, vamos retorná-lo para qualquer ID válido
  return mockCharacterEquipment;
};


// Método para buscar inventário do personagem por ID
export const getCharacterInventoryById = (id: number): Equipment[] | undefined => {
  // Como temos apenas um mock de inventário, vamos retorná-lo para qualquer ID válido
  return mockCharacterInventory;
};

// Método para listar todos os personagens
export const getAllCharacters = (): Character[] => {
  return mockCharacterList;
};


// skills

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

  const skills = skillList.suportSkills?.map((id) => getSkillsMethodMap.suportSkills(id));
  const damageSkills = skillList.damageSkills?.map((id) => getSkillsMethodMap.damageSkills(id));
  const passiveSkills = skillList.passiveSkills?.map((id) => getSkillsMethodMap.passiveSkills(id));
  
  return{
    suportSkills:skills,
    damageSkills:damageSkills,
    passiveSkills:passiveSkills
  }
}