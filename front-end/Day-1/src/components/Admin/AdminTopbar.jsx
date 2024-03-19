import React from 'react';

const AdminTopbar = () => {
  return (
    <>
      <div className='w-[85vw] h-[5vh] flex items-center justify-center shadow-md shadow-rose-950'>
        <div className='w-[95%] h-full flex justify-end items-center'>
          <div className='font-bold text-rose-300'>
            Welcome to Admin Panel!
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminTopbar;
