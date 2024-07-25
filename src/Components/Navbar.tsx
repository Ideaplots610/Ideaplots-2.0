import React from 'react'
import ShimmerButton from './ShimmerButton'
import ideaplotsLogo from "../Assets/icons/ideaplotsLogo.png"

const Navbar = () => {
  return (
    <div className='bg-black flex justify-between px-16 py-3'>
      <div className="logo">
        <img src={ideaplotsLogo} alt="Logo" className='w-[50px]'/>
      </div>
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-[#f4f4f4] dark:from-white dark:to-slate-900/10 lg:text-lg">
          Start Project
        </span>
      </ShimmerButton>
    </div>
  )
}

export default Navbar
