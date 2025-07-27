import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';

function Services() {
  return (
    <div>
            <div className='flex h-full  rounded-md m-2 bg-gray-100'>
                <Sidebar/>
                <div className="header w-full bg-sky-200 rounded-md m-1 pl-4">
                    <h2 className='text-2xl pt-4 font-bold'> Our Services</h2>
                    <div className="mini-div bg-gray-300 rounded-md px-3 py-1 mt-4 w-fit">
                        <span className='text-xs'>Getting Started with Services</span>
                    </div>
                    <div className="para ml-4">
                        <p className='text-lg text-justify pt-3 pr-4'>Our Services are designed to meet the needs of our customers, providing high quality and reliability.
                            Our Services are designed to meet the needs of our customers, providing high quality and reliability.
                            Our Services are designed to meet the needs of our customers,Services are designed to meet the needs of our customers, providing high quality and reliability.
                            Our Services are designed to meet the needs of our customers, providing high quality and reliability.
                            Our Services are designed to meet the needs of ou providing high quality and reliability.
                        </p>
                    </div>
                    <div className="link pl-4 mt-2">
                        <Link className='text-blue-700' to={'/'}>learn more about our Services!!</Link>
                    </div>
                   
                    <div className="footer ml-4 mt-4">
                       <span> Help us improve our services by providing feedback.</span>
                       <div className="ratings">
                        <span className='text-sm'>Rate our services: </span>
                        <span className='text-lg font-bold'>⭐⭐⭐⭐⭐</span>
                        <div className="input-group">
                            <input type="email" placeholder='@azzinfo.in' className='border rounded-md px-2 py-1 outline-none mt-2' />
                            
                        </div>
                        <span>Use this for your Ratings</span>

                       </div>
                    </div>
                    <div className="footer flex static mt-30  text-gray-500  bottom-0  p-4 ">
                           <div className="flex space-x-4 items-center">
                           <span>Contact Us </span>
                           <span>Terms & Conditions </span>
                           <span>Safety </span>
                           <span>Legacy </span>
                           <span>Cookies </span>
                           <span>Accessibiity </span>
                        </div>

                    </div>
                </div>
                </div>

    </div>
  )
}

export default Services