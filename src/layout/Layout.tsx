import Navbar from '@/components/Navbar'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar/>

      <div className="min-h-screen bg-slate-50">

      <Outlet/>
      </div>
    </div>
  )
}

export default Layout