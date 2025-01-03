import { AuthResponse, UserCredentials } from "@/types/auth";
import { account, ID} from "../appwrite";


export async function createAccount(credentials:UserCredentials):Promise<AuthResponse>{
 try {
  const user = await account.create(
    ID.unique(),
    credentials.email,
    credentials.password
  )
  
  return {
    success:true,
    message:"conta criada com sucesso",
    userId:user.$id
  }
 } catch (err) {
  const error = err as Error
  return{
    success:false,
    message:error.message
  }
 }
}


export async function login({email,password}:UserCredentials):Promise<AuthResponse> {
  try {
    const user = await account.createEmailPasswordSession(email, password);
    
    return {
      success:true,
      message:'usuário logado com sucesso',
      userId:user.$id,
      
    }
  } catch (err) {
    const error = err as Error 
    return {
      success:false,
      message:error.message
    }
  }
}