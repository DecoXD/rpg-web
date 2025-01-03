export enum EquipmentType{
  Magic,
  Fisic
}

export enum EquipmentElement{
  FIRE,
  WATER,
  EARTH,
  BOLT,
  WIND,
  WOOD,
  METAL
}

export enum EquipmentRarity {
  IRON,
  BRONZE,
  SILVER,
  GOLD,
  PLATINUM
}

export type Equipment = {
  id:number;
  name:string;
  description:string,
  equipmentType:EquipmentType
  skills?:string[];
  element:EquipmentElement
  rarity:EquipmentRarity

}

export type Weapon = {
  damage:number;
} | Equipment

export type Armour = {
  defense:number;
  resistance:number;
} | Equipment

export type Accessories = {

} | Equipment

