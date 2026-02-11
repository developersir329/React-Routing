import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png'
function Navbar() {

     const[ison,setison]=useState(false)

  return (
	<>
   <header className="p-4 bg-red-300 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<img className='h-15' src={logo} alt="img" />
			{/*  */}
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<NavLink rel="noopener noreferrer" to="/" className={({isActive})=>`${isActive? 'text-red-500 underline font-bold':'text-gray-500'} flex items-center px-4 -mb-1 border-b-2 dark:border-`}>Home</NavLink>
			</li>
			<li className="flex">
				<NavLink rel="noopener noreferrer" to="/About" className={({isActive})=>`${isActive? 'text-red-500 underline font-bold':'text-gray-500'} flex items-center px-4 -mb-1 border-b-2 dark:border-`}>About</NavLink>
			</li>
			<li className="flex">
				<NavLink rel="noopener noreferrer" to="/Contact" className={({isActive})=>`${isActive? 'text-red-500 underline font-bold':'text-gray-500'} flex items-center px-4 -mb-1 border-b-2 dark:border-`}>Contact</NavLink>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<NavLink to="*" className="self-center px-8 py-3 rounded">Sign in</NavLink>
			<NavLink to="*" className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</NavLink>
		</div>
		<button onClick={()=>setison(!ison)} className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
<header className={`${ison ? "block":"hidden"} lg:hidden h-50 bg-gray-300`}>
	<ul className="flex flex-col gap-10 text-lg no-underline ">
			<li className="flex">
				<NavLink rel="noopener noreferrer" to="/" className={({isActive})=>`${isActive? 'text-red-500 underline font-bold':'text-gray-500'} flex items-center px-4 -mb-1 border-b-2 dark:border-`}>Home</NavLink>
			</li>
			<li className="flex">
				<NavLink rel="noopener noreferrer" to="/About" className={({isActive})=>`${isActive? 'text-red-500 underline font-bold':'text-gray-500'} flex items-center px-4 -mb-1 border-b-2 dark:border-`}>About</NavLink>
			</li>
			<li className="flex">
				<NavLink rel="noopener noreferrer" to="/Contact" className={({isActive})=>`${isActive? 'text-red-500 underline font-bold':'text-gray-500'} flex items-center px-4 -mb-1 border-b-2 dark:border-`}>Contact</NavLink>
			</li>
		</ul>

</header>
</>
  )
}

export default Navbar