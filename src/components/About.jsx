import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';

function About() {
  return (
    <>
    <div h-screen='true' className='flex rounded-md m-2 bg-gray-100'>
        <Sidebar/>
    <div className='About bg-sky-200 rounded-md w-full m-1 pl-4'>
        <div className="header p-2 mt-4">
            <h2 className='text-3xl font-bold'>About Us</h2>
            <div className="para mr-10 ml-4 mt-10">
                <div className=" flex flex-row space-y-0  py-0 w-39 text-sm  bg-slate-300 rounded-md px-3">
                    <span>Our Mission</span>
                </div>
                <p className='text-lg text-justify pt-3'>
                    We are committed to providing the best services to our customers, ensuring quality and satisfaction.
                    Our mission is to innovate and lead in our industry, delivering exceptional value to our clients.
                </p>  
                </div>
            <div className="link pl-4 mt-2">
                <Link className='text-blue-700' to='/'>Learn more about our mission!</Link>
            </div>
            <div className="quick flex flex-row mt-2 pl-4 ">
                <div className=" flex-col px-4 py-2 bg-blue-500 rounded-lg mr-2 text-white">
                    <p className='text-sm '> Our Team</p>
                </div>
                <div className=" flex-col px-4 py-2 bg-blue-500 rounded-lg mr-2 text-white">
                    <p className='text-sm '> Our Values</p>
                </div>
            </div>  
            </div>

    </div>
    </div>
    </>
  )
}

export default About