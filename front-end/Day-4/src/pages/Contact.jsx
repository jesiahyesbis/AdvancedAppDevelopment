import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto py-8 h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <div className='h-full flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-1/4 flex flex-col h-1/2 md:h-[60vh] justify-evenly items-center mb-4 md:mb-0'>
          <div className='h-1/4 w-3/4 bg-yellow-200 hover:bg-yellow-400 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
            <p className='font-bold text-yellow-600'>
              <FaEnvelope size={32} />
            </p>
            <h3 className='font-semibold'>
              partypro@gmail.com
            </h3>
          </div>
          <div className='h-1/4 w-3/4 bg-yellow-200 hover:bg-yellow-400 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
            <p className='font-bold text-yellow-600'>
              <FaPhoneAlt size={32} />
            </p>
            <h3 className='font-semibold'>
              +91 9876859234
            </h3>
          </div>
          <div className='h-2/5 w-4/5 bg-yellow-200 hover:bg-yellow-400 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
            <p className='font-bold text-yellow-600'>
              <FaMapMarkerAlt size={32} />
            </p>
            <h3 className='font-semibold'>
              Party Pro Address
              123,NH Street,Coimbatore,Tamil Nadu.
            </h3>
          </div>
        </div>
        <div className='w-full md:w-2/4 flex flex-col h-max justify-center items-center'>
          <div className="container mx-auto">
            <form className='w-full md:w-3/4 flex justify-between items-center flex-col gap-4'>
              <input type="text" name="" id="" placeholder='Name' className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-yellow-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              <input type="email" name="" id="" placeholder='Email' className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-yellow-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              <input type="tel" name="" id="" placeholder='Phone' className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-yellow-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              <textarea name="" id="" cols="30" rows="10" placeholder='Your questions here...' className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-yellow-300 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              <button type="submit" className='w-full bg-yellow-500 text-white p-2 rounded-sm font-bold'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
