import { Character } from "@/types/characters";
import { CharEquipment, CharacterAttributes, CharacterStatus, } from "@/types/characters"
import { Weapon,Equipment, EquipmentType, EquipmentElement, EquipmentRarity } from "@/types/equipment"

export const mockCharacterList:Character[] = [
  {
    id:123,
    name:"Solary",
    attributesId:1,
    equipmentId:1,
    gold:120,
    inventoryId:1,
    statusId:1,
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
    current: 100,
    max: 100
  },
  mp: {
    current: 50,
    max: 50
  }
}

export const mockCharacterInventory:Equipment[] = [
  {
    id: 1,
    name: "Poção de Cura",
    description: "Restaura 50 pontos de vida",
    equipmentType:EquipmentType.Fisic,
    element:EquipmentElement.FIRE,
    rarity:EquipmentRarity.SILVER
  }
]
