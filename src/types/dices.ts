export type AbilityDicesReturn = {
  success:boolean,
  isCritic:boolean
}
export type PhysicalDamageDicesReturn = {
  damage:number
}

export type AbilityDice= (diceValue:number,charAbilityPoints:number)=>AbilityDicesReturn


export type PhysicalDamageDice = (charDamageValue:number,charStrenghtPoints:number,diceValue:number) =>PhysicalDamageDicesReturn 
