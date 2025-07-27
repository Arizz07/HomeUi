import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';

function Body() {
   
       
       


    
  return (
    <>
    <div className='flex h-full justify-between rounded-md m-2 bg-gray-100'>
        <Sidebar/>
        <div className='home bg-sky-200 rounded-md w-full m-1 pl-4'> 
            
            <div className="header p-2 mt-4">
                <h2 className='text-3xl font-bold'>Introduction</h2>
                
                <div className="para mr-10 ml-4 mt-10">
                    <div className=" flex flex-row space-y-0  py-0 w-39 text-sm  bg-slate-300 rounded-md px-3">
                    <span>Getting started with Intro</span>
                </div>
                    <p className='text-lg text-justify pt-3'>React.js is a powerful JavaScript library developed by Facebook for building user interfaces,
                 especially for single-page applications. React.js is a powerful JavaScript library developed by Facebook for building user interfaces,
                 especially for single-page applicatio React.js is a powerful JavaScript library developed by Facebook for building user interfaces,
                 especially for single-page applicatio It lets developers build fast and interactive UIs using a component-based architecture.</p>
                </div>
                <div className="link pl-4 mt-2">
                    <Link className='text-blue-700' to={'/'}>learn more about our page!!</Link>
                </div>
                <div className="quick flex flex-row mt-2 pl-4 ">
                    <div className=" flex-col px-4 py-2 bg-blue-500 rounded-lg mr-2 text-white">
                        <p className='text-sm '> Our Products</p>
                    </div>
                    <div className=" flex-col px-4 py-2 bg-blue-500 rounded-lg mr-2 text-white">
                        <p className='text-sm '> Our Services</p>
                    </div>
                   
                </div>
                 <div className="productDesc mt-4 pl-4 mr-10">
                        <h3 className='text-xl font-semibold'>Product Description</h3>
                        <p className='text-lg text-justify '> Our Products are designed to meet the needs of our customers, providing high quality and reliability.
                            Our Products are designed to meet the needs of our customers, providing high quality and reliability
                            Our Products are designed to meet the needs of our customers, providing high quality and reliability
                            Our Products are designed to meet the needs of our customers, providing high quality and reliability
                            Our Products are designed to meet the needs of our customers, providing high quality and reliability
                        </p>
                        <Link className='text-blue-700' to={'/'}>learn more about our Products!!</Link>
                    </div>

                     <div className="productDesc mt-4 pl-4 mr-10">
                        <h3 className='text-xl font-semibold'>Services </h3>
                        <p className='text-lg text-justify '> Our Services are designed to meet the needs of our customers, providing high quality and reliability.
                            Our Products are designed to meet the needs of our customers, providing high quality and reliability
                            Our Products are designed to meet the needs of our customers, providing high quality and reliability
                            Our Products are designed to meet the needs of our customers, providing high quality and reliability
                            Our Products are designed to meet the needs of our customers, providing high quality and reliability
                        </p>
                        <Link className='text-blue-700' to={'/'}>learn more about our Services!!</Link>

                    </div>

            </div>
        </div>
    </div>
    <div className='footer sticky bottom-0 right-0 left-0 bg-gray-100 rounded-md m-1 py-2'>
        <div className='flex flex-col space-y-2'>
        <p className='text-center'>© 2023 AzzWeb.in. All rights reserved.</p>
        <div className="flex justify-center space-x-4 items-center">
        <p className='text-center '>Terms & Conditions </p> &nbsp;
        <p className='text-center ml-2'>|</p>
        <p className='text-center ml-2'>Privacy Policy </p> &nbsp;
        <p className='text-center ml-2'>|</p>
        <p className='text-center ml-2'>Cookie Policy </p> &nbsp;
        <p className='text-center ml-2'>|</p>
        <p className='text-center ml-2'>Accessibility</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Body