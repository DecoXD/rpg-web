import { Models } from 'appwrite';
import { Accessories, Armour, Equipment, Weapon } from './equipment';



export interface CharacterStatus {
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


export interface Character extends Models.Document {
  name: string;
  level: number;
  imageUrl?: string;
  gold: number;
  equipment:CharEquipment
  attributes: CharacterAttributes;
  status: CharacterStatus;
  inventory: Equipment[];
}