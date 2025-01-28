import Login from "@/__AUTH__/Login"
import Register from "@/__AUTH__/Register"
import Layout from "@/layout/Layout"
import CharacterSheet from "@/pages/characterSheet/CharacterSheet"
import CreateAdventure from "@/pages/createAdventure/CreateAdventure"
import Portal from "@/pages/portal/Portal"
import { ReactNode } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    element:<Layout/>,
    path:'/',
    children:[
      {
        path:"/portal",
        element:<Portal/>
      }
      ,
      {
        path:"/createadventure",
        element:<CreateAdventure/>
      }
      ,
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:'/charsheet',
        element:<CharacterSheet/>
      }
      
    ]
    
  }
])

const App = ():ReactNode => {
return <RouterProvider router={router}/>
}

export default App