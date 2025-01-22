import { CharacterAttributes } from "@/types/characters";
import { AbilityDice, AbilityDicesReturn, PhysicalDamageDice, PhysicalDamageDicesReturn } from "@/types/dices";

enum DiceActions {
  ACT="act",
  DEF="def",
  DMGPH='dmgPH',
  DMGMG="dmgMG",
  CHARISM="charism",
  PERCEPTION='PERCEPTION',
  LUCK='LUCK'


}


// jogar dado ->  enviar para escolher a ação 

export const rollDices = ():number =>{

  return Math.floor(Math.random()*7)
}


export function chooseAction(actionType:DiceActions,diceValue:number,charAttributes:CharacterAttributes){

  switch (actionType) {
    case DiceActions.ACT:
    return abilityDice(diceValue,charAttributes.ability)
      break;

    case DiceActions.DMGPH:
    return physicalDamageDice(charAttributes.damage,charAttributes.strength,diceValue)
      break;
    default:
      break;
  }


}

export const abilityDice:AbilityDice = (diceValue:number,charAbilityPoints:number):AbilityDicesReturn => {
  if(diceValue > charAbilityPoints) return {
    isCritic:false,
    success:false
  }
  if(diceValue === 1) return {
    isCritic:true,
    success:true
  }

  return {
    isCritic:false,
    success:true
  }

}



export const physicalDamageDice:PhysicalDamageDice = (charDamageValue:number,charStrenghtPoints:number,diceValue:number):PhysicalDamageDicesReturn =>{
  const isCritic = diceValue === 6 
  const damage = charDamageValue + (charStrenghtPoints * 3) * (isCritic? 1:2)

  return {
    damage
  }
}