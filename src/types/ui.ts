export type NavbarItensProps = {
  label:string,
  href:string
}

export type AuthInputsProps = {
  label:string,
  type:string,
  name:string,
  placeholder:string,
  value?:string,
}

export type PortalAdventureBoxProps = {
  title: string;
  description: string;
  difficulty: 'fácil' | 'moderado' | 'difícil';
  category: string;
  rating?: number;
  maxParticipants?: number;
  included?: string[];
  isAvailable?: boolean;
}


export type PortalAdventureContainerProps = {
  title:string,
  subtitle:string,
  box?:PortalAdventureBoxProps[]
}

export type CreateAdventureInputsProps = {
  name:string,
  placeholder?:string,
  label:string,
  isSelect?:boolean,
  isTextArea?:boolean,
  options?:string[],
  type:string
}