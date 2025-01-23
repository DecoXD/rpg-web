
import { AbilityDice, AbilityDicesReturn, PhysicalDamageDice, PhysicalDamageDicesReturn } from "@/types/dices";




// jogar dado ->  enviar para escolher a ação 

export const rollDices = ():number =>{

  return Math.floor(Math.random()*7)
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



export const physicalDamageDice:PhysicalDamageDice = (charDamageValue:number,charStrenghtPoints:number,isCritic:boolean):PhysicalDamageDicesReturn =>{
  const damage = charDamageValue + (charStrenghtPoints * 3) * (isCritic? 1:2)
  return {
    damage
  }
}