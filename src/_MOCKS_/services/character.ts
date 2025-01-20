import { Character, CharacterAttributes, CharacterStatus, CharEquipment } from "@/types/characters";
import { mockCharacterAttributes, mockCharacterEquipment, mockCharacterInventory, mockCharacterList, mockCharacterStatus } from "../char";
import { Equipment } from "@/types/equipment";

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


// maybe adventure?
// Método para listar todos os personagens
export const getAllCharacters = (): Character[] => {
  return mockCharacterList;
};

