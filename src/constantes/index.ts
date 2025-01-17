import { AuthInputsProps, NavbarItensProps, PortalAdventureContainerProps } from "@/types/ui";

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