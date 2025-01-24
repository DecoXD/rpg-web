

export enum SkillElement{
  FIRE,
  WATER,
  EARTH,
  BOLT,
  WIND,
  WOOD,
  METAL
}

export enum SkillTypeList {
  damageSkills='damageSkills',
  suportSkills='suportSkills',
  passiveSkills='passiveSkills'
}


export enum CharAttributeList  {
  strength='strength',
  ability='ability',
  armour='armour',
  intelligence='intelligence',
  resistence='resistence',
  wisdom='wisdom',
  tenacity='tenacity',
  damage='damage',
  defense='defense'
  
}

export enum SkillDamageType{
  PHYSICAL='PHYSICAL',
  MAGIC='MAGIC'
}


export enum SupportSkillType{
  BUFF = "BUFF",
  DEBUFF = 'DEBUFF',
}

export enum SkillType {
  ACTIVE = "ACTIVE",
  PASSIVE= "PASSIVE"
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
  turnsToActivate?:number ;
  turnsEffected:number;
  type:SkillType
}

export interface SupportSkill extends Skill{
  supportType:SupportSkillType;
  atributeAffected:string;
  
}

export interface DamageSkill extends Skill{
  damageType:SkillDamageType;
  damageValue:number;
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

export interface CharSkillList {
  suportSkills?:SupportSkill[];
  damageSkills?:DamageSkill[];
  passiveSkills?:PassiveSkill[];
}