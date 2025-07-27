import React,{useState} from 'react'

function Sidebar() {
     const [show, setShow] = useState({
            products: false,
            services: false,   
        contact: false,
        about: false,
        })
    
        const handleToggle = (key) => {
            setShow((prev) => ({
                ...prev,
                [key]: !prev[key],
            }));
        };
  return (
    <>
        <div className=''>
        <div className='flex h-screen flex-col bg-sky-200 w-64 rounded-md m-1'>
            <h2 className='text-xl font-bold  p-2'>Table of Contents</h2>
            <ul className='text-md p-2 space-y-2' >
                <li onClick={()=>handleToggle('products')} className='cursor-pointer '>Products
                    {show.products && <ul>
                        <li className='ml-4'>Product 1</li>
                        <li className='ml-4'>Product 2</li>
                        <li className='ml-4'>Product 3</li>
                    </ul>
}
                </li>
                <li onClick={()=>handleToggle('services')}>Services
                   {show.services &&  <ul>
                        <li className='ml-4'>Service 1</li>
                        <li className='ml-4'>Service 2</li>
                        <li className='ml-4'>Service 3</li>
                    </ul>
}
                </li>
                <li>Contact Us</li>
                <li>About Us</li>

            </ul>
        </div>
        </div>  
        </>
  )
}

export default Sidebar