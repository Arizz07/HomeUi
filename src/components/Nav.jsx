import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Nav() {
  const [opt, setOpt] = useState(false);
  const [open, setOpen] = useState(false);


  return (
    <div className='Navbar flex flex-col'>
      <nav className='flex justify-between items-center w-full bg-blue-500 p-4 text-white'>
        <div className='flex justify-between w-full mr-8 space-x-4'>
          <h2 className='txet-xl font-bold signika-text'> Logo</h2>
          <ul className='not-md:hidden flex space-x-6'>
            <li className='text-md hover:font-bold'> <Link to={'/'}>Home</Link></li>
            <li className='text-md hover:font-bold'><Link to={'/about'}>About</Link></li>
            <li className='text-md hover:font-bold'> <Link to={'/contact'}>Contact</Link></li>
            <li className='text-md hover:font-bold'> <Link to={'/services'}>Services</Link></li>
          </ul>

        </div>

        <button className="bg-white text-black outline-none rounded-lg px-3 py-1 hover:bg-black hover:text-white">Login</button>
        <div className=' md:hidden flex items-center space-x-4'>
          <button onClick={() => setOpt(!opt)} className='bg-white text-black rounded-lg px-2 py-2 hover:bg-black hover:text-white mx-2' ><FaBars /></button>
        </div>
        {opt && (
          <ul className='md:hidden absolute top-17  w-32 right-4 bg-blue-500 px-4 py-6 rounded-lg shadow-lg space-y-2'>
            <li className='text-md hover:font-bold'> <Link to={'/'}>Home</Link></li>
            <li className='text-md hover:font-bold'><Link to={'/about'}>About</Link></li>
            <li className='text-md hover:font-bold'> <Link to={'/contact'}>Contact</Link></li>
            <li className='text-md hover:font-bold'> <Link to={'/services'}>Services</Link></li>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Nav