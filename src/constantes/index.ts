import { AuthInputsProps, NavbarItensProps } from "@/types/ui";

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
    label:"login",
    type:"text",
    name:"login",
    placeholder:"digite seu login",
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
    label:"Login",
    type:"text",
    name:"login",
    placeholder:"digite seu login",
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