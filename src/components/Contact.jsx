import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

function Contact() {
  return (
      <div h-screen='true' className='flex  rounded-md m-2 bg-gray-100'>
      <Sidebar/>
      <div className="header m-2 bg-sky-200 p-4 w-full rounded-md shadow-md">
      <h1 className='text-2xl font-bold'>Contact Us</h1>
      <p className='mt-4'>For inquiries, please reach out to us at &nbsp;
        <Link to={'/link'} className='text-blue-700' >www.azzinfo.in</Link></p>
      <p className='mt-2'>You can also contact us via submitting the form below:</p>
      <form className='mt-4'>
        <div className='mb-4'>
          <label className='block mb-2' htmlFor='name'>Name:</label>
          <input className='border rounded  py-1 px-3 outline-none' type='text' id='name' name='name' required />
          <label className='block mb-2' htmlFor='name'>Email:</label>
          <input className='border rounded  py-1 px-3 outline-none' type='email' id='mail' name='mail' required />
          <label className='block mb-2' htmlFor='name'>Description:</label>
          <textarea className='border rounded  py-1 px-3 outline-none' id='description' name='description' rows='4' required></textarea> <br />
          <input className='px-3 mt-3 py-2 bg-amber-400 rounded-2xl' type="submit" value="Send FeedBack" />   
          </div>
      </form>
      <p className='mt-4'>Thank you for reaching out to us!</p>
      <p className='mt-2'>We will get back to you as soon as possible.</p>
      <p className='mt-2'>Follow us on our social media channels for updates:</p>
      <ul className='flex space-x-4 mt-2 space-y-1'>
        <li><Link to={'/facebook'} className='text-blue-700'><FaFacebook className='text-2xl'/></Link></li>
        <li><Link to={'/twitter'} className='text-blue-700'><FaTwitter className='text-2xl'/></Link></li>
        <li><Link to={'/instagram'} className='text-blue-700'><FaInstagram className='text-2xl'/></Link></li>        
         <li><Link to={'/linkedin'} className='text-blue-700'><FaLinkedinIn className='text-2xl'/></Link></li>
      </ul>
     
    </div>
    </div>


  )
}

export default Contact