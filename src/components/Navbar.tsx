import { NavbarItens } from "@/constantes"
import { Shield, Sword } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-none absolute w-full top-0">
     <div className="flex gap-2">
      <Shield/>
      <h1 className="font-medieval">RPG WEB</h1>
     </div>
      <ul className="flex   ">
      {
        NavbarItens.map((navItem) =>{
          const {href,label} = navItem
          return (
            <li key={label}>
              <Link to={href} className="font-medieval px-4 py-3 hover:bg-amber-300 rounded-xl">{label}</Link>
              </li>
          )
        })
    }
      </ul>

    </nav>

  )
}

export default Navbar