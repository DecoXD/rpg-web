import { User } from 'lucide-react'
import React from 'react'

const CharProfile = () => {
  return (
    <div className=" flex-col  gap-4 border-[1px] border-amber-300/50 shadow-md max-w-xl rounded-xl p-4 pb-8">
      <h3 className='flex gap-2 text-xl items-center font-medieval uppercase'><User/> Profile</h3>
        {/* in this container should be has a char picture instead an icon */}
        <div className=" flex w-full justify-center items-center">
          <div className="bg-slate-50 flex items-center justify-center min-h-52 w-52 rounded-sm">
            <User className='' size={50}/>
          </div>
        </div>
    </div>
  )
}

export default CharProfile