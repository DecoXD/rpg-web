import Login from "@/__AUTH__/Login"
import Register from "@/__AUTH__/Register"
import Layout from "@/layout/Layout"
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
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      
    ]
    
  }
])

const App = ():ReactNode => {
return <RouterProvider router={router}/>
}

export default App