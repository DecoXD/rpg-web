import { Character } from "@/types/characters";
import { CharEquipment, CharacterAttributes, CharacterStatus, } from "@/types/characters"
import { Weapon,Equipment, EquipmentType, EquipmentElement, EquipmentRarity } from "@/types/equipment"
import {  DamageSkill,  SkillDamageType,  CharAttributeList, SkillType, SupportSkill, SupportSkillType, PassiveSkill, CharSkills} from "@/types/Skills";

export const mockCharacterList:Character[] = [
  {
    id:123,
    name:"Solary",
    attributesId:1,
    equipmentId:1,
    gold:120,
    inventoryId:1,
    statusId:1,
    skillsListId:1,
    level:120
  }
]



export const mockCharacterEquipment:CharEquipment = {
  primaryWeapon: {
    id: 1,
    name: "Espada Longa",
    description: "Uma espada longa básica",
    type: "weapon",
    damage: 10,
    price: 100,
    level: 1
  } as Weapon,
  secondaryWeapon: null,
  armor: null,
  rings: [null, null]
}

export const mockCharacterAttributes:CharacterAttributes = {
  id:1,
  strength: 10,
  ability: 4,
  armour: 5,
  intelligence: 12,
  resistence: 7,
  wisdom: 10,
  tenacity: 6,
  damage: 15,
  defense: 8
}

export const mockCharacterStatus:CharacterStatus = {
  id:1,
  hp: {
    current: 217,
    max: 267
  },
  mp: {
    current: 5,
    max: 10
  }
}

export const mockCharacterInventory:Equipment[] = [
  {
    id: 1,
    name: "Poção de Cura",
    description: "Restaura 50 pontos de vida",
    equipmentType:EquipmentType.PHYSICAL,
    element:EquipmentElement.FIRE,
    rarity:EquipmentRarity.SILVER
  }
]

//create one database for each skill type and i need has one dabate called CharSkills with an array for earch skill type.
//guardar em cache
export const MockCharSkills:CharSkills[] = [
  { 
    id:1,
    damageSkills:[1],
    passiveSkills:[1],
    suportSkills:[1]
  }
]


export const MockCharSupportSkills:SupportSkill[]=[
 {
  id:1,
  supportType:SupportSkillType.BUFF,
  atributeAffected:"strength",
  name:"Bola de Fogo",
  description:"Aumenta a forca do personagem em 10% por 3 turnos",
  cost:10,
  coutdown:3,
  skillBaseDamage:0,
  skillMultiplierAttribute:CharAttributeList.strength,
  skillMultiplyValue:0.1,
  turnsEffected:3,
  type:SkillType.ACTIVE
 }
]

export const MockDamageSkills:DamageSkill []=[
 {
  id:1,
  damageType:SkillDamageType.MAGIC,
  damageValue:10,
  name:"Bola de Fogo",
  description:"Lança uma bola de fogo explodindo inimigos e aliados próximos",
  cost:5,
  coutdown:3,
  skillBaseDamage:20,
  skillMultiplierAttribute:CharAttributeList.intelligence,
  skillMultiplyValue:1,
  turnsEffected:3,
  type:SkillType.ACTIVE
 }
]

export const MockPassiveSkills:PassiveSkill []=[
 {
  id:1,
  addedValue:2,
  addedAttribute:CharAttributeList.armour,
  name:"Vigor",
  description:"Lança uma bola de fogo explodindo inimigos e aliados próximos",
  cost:0,
  coutdown:3,
  skillBaseDamage:20,
  skillMultiplierAttribute:CharAttributeList.intelligence,
  skillMultiplyValue:1,
  turnsEffected:3,
  type:SkillType.ACTIVE
 }
]