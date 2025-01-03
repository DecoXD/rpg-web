import { Models } from 'appwrite';
import { Accessories, Armour, Equipment, Weapon } from './equipment';



export interface CharacterStatus {
  id:number
  hp: {
    current: number;
    max: number;
  };
  mp: {
    current: number;
    max: number;
  };
}

export interface CharacterAttributes {
  id:number
  strength: number;
  ability: number;
  armour: number;
  intelligence: number;
  resistence:number;
  wisdom: number;
  tenacity: number;
  damage:number;
  defense:number;
}

export type CharEquipment = {
  primaryWeapon: Weapon | null;
  secondaryWeapon: Weapon | null;
  armor: Armour | null;
  rings: (Accessories | null)[];
  
}


export type Experience= {
  level:number
  currentExp:number
  nextLevelExp:number
}

export interface Character /*extends Models.Document*/ {
  id:number;
  name: string;
  level: number;
  imageUrl?: string;
  gold: number;
  equipmentId:number
  attributesId: number;
  statusId: number;
  inventoryId: number;
}

// export interface Character extends Models.Document {
//   id:number;
//   name: string;
//   level: number;
//   imageUrl?: string;
//   gold: number;
//   equipment:CharEquipment
//   attributes: CharacterAttributes;
//   status: CharacterStatus;
//   inventory: Equipment[];
// }