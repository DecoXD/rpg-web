import { AuthInputsProps, CreateAdventureInputsProps, NavbarItensProps, PortalAdventureContainerProps } from "@/types/ui";

export const NavbarItens:NavbarItensProps[] = [
  {
  label:"portal do aventureiro",
  href:"/portal",
},
  {
  label:"login",
  href:"/login",
},
  {
  label:"registro",
  href:"/register",
},

]

export const loginInputs:AuthInputsProps[] = [
  {
    label:"email",
    type:"text",
    name:"email",
    placeholder:"digite seu email",
  },
  {
    label:"password",
    type:"password",
    name:"password",
    placeholder:"digite sua senha"
  }
]

export const registerInputs:AuthInputsProps[] = [
  {
    label:"Email",
    type:"text",
    name:"email",
    placeholder:"digite seu email",
  },
  {
    label:"password",
    type:"password",
    name:"password",
    placeholder:"digite sua senha"
  },
  {
    label:"confirm password",
    type:"password",
    name:"confirmPassword",
    placeholder:"confirme sua senha"
  }
]

//mock 
export const portalAdventureConteiners:PortalAdventureContainerProps[]=[
  {
    title:"Suas Campanhas",
    subtitle:"Aventuras em que você é o Mestre",
    box:[
      {
        title:"Hanoi Tower Sage",
        category:"RPG Medieval",
        description:"queijo coalho com melaço é muito baum.",
        difficulty:"fácil"
      }
    ]
  },
  {
    title:"Suas Aventuras",
    subtitle:"Aventuras em que você participa como jogador",
    box:[
      {
        title:"Hanoi Tower Sage",
        category:"RPG Medieval",
        description:"queijo coalho com melaço é muito baum.",
        difficulty:"fácil"
      }
    ]
  },
]


export const createAdventureInputs:CreateAdventureInputsProps[] = [
  {
    name:'name',
    placeholder:'choose campaign name',
    label:'campaign name',
    type:'text',
  },
  {
    name:'genre',
    label:'campaign name',
    type:'text',
    inputStyle:'select',
    placeholder:"Select Genre",
    options:['Fantasy','School',"Horror","Comedy","Book based","Dark"]//create table genre 
   
  },
  {
    name:'subgenre',
    label:'Subgenre',
    placeholder:"Select Subgenre",
    inputStyle:'select',
    options:['Medieval','Futuristic',"Old School","Vampire"]//create table subgenre 
   
  },
  {
    name:'description',
    placeholder:'insert campaign description.',
    inputStyle:'textarea',
    label:'Description',
    


    
  },
  {
    name:'max_players',
    placeholder:'how many players can play?',
    label:'max players',
    type:'number',
  
  }
]