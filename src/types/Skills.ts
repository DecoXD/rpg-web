import { CharacterAttributes } from "./characters";

export enum SkillElement{
  FIRE,
  WATER,
  EARTH,
  BOLT,
  WIND,
  WOOD,
  METAL
}

export enum CharAttributeList  {
  strength,
  ability,
  armour,
  intelligence,
  resistence,
  wisdom,
  tenacity,
  damage,
  defense
  
}

export enum SkillDamageType{
  PHYSICAL,
  MAGIC
}


export enum SupportSkillType{
  BUFF,
  DEBUFF
}

export enum SkillType {
  ACTIVE,
  PASSIVE
}

export type Skill = {
  id: number;
  name: string;
  description: string;
  element?:SkillElement;
  skillBaseDamage:number;
  skillMultiplierAttribute:CharAttributeList;
  skillMultiplyValue:number;
  cost:number;
  coutdown:number;
  turnsEffected:number;
  type:SkillType
}

export interface SupportSkill extends Skill{
  supportType:SupportSkillType,
  atributeAffected:string,
  
}

export interface DamageSkill extends Skill{
  damageType:SkillDamageType,
  damageValue:number
}

export interface PassiveSkill extends Skill{
  addedValue:number;
  addedAttribute:CharAttributeList;
}

//this is an array of skill ids
export interface CharSkills {
  id:number;
  suportSkills?:number[];
  damageSkills?:number[];
  passiveSkills?:number[];
}