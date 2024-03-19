// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const ULogin = () => {
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         navigate('#');
//     };

//     return (
//         <div className='h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-white'>
//             <form className='flex flex-col gap-5 bg-white p-8 rounded-md shadow-md w-1/3 items-center justify-center' onSubmit={handleLogin}>
//                 <input type="email" name="" id="" placeholder='Email' className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm ' required/>
//                 <input type="password" name="" id="" placeholder='Password' className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm' required />
//                 {/* <button type="submit" className='w-full bg-blue-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'><span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/user/dashboard')}>Login</span></button> */}
//                 <Link to="/user/dashboard">
//                         <button className='w[50%] bg-blue-500 text-white p-2 rounded-sm font-bold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>User Login</button>
//                     </Link>
          
//                 {/* <div className="flex justify-between w-full">
//                     <Link to="/user/dashboard">
//                         <button className='w[50%] bg-blue-500 text-white p-2 rounded-sm font-bold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>User</button>
//                     </Link>
//                     <Link to="/admin/dashboard">
//                         <button className='w[50%] bg-blue-500 text-white p-2 rounded-sm font-bold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>Admin</button>
//                     </Link>
//                 </div> */}
//                 <p className='text-gray-600 mt-4'>Do not have an account? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/signup')}>Register!</span></p>
//             </form>
//         </div>
//     );
// };

// export default ULogin;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const ALogin = () => {
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         navigate('#');
//     };

//     return (
//         <div className='h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-white'>
//             <form className='flex flex-col gap-5 bg-white p-8 rounded-md shadow-md w-1/3 items-center justify-center' onSubmit={handleLogin}>
//                 <input type="email" name="" id="" placeholder='Email' className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm ' required />
//                 <input type="password" name="" id="" placeholder='Password' className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm' required />
//                 {/* <button type="submit" className='w-full bg-blue-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>Login</button>
//            */}
//             <Link to="/admin/dashboard">
//                         <button className='w[50%] bg-blue-500 text-white p-2 rounded-sm font-bold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>Admin Login</button>
//                     </Link>
          

//                 {/* <div className="flex justify-between w-full">
//                     <Link to="/user/dashboard">
//                         <button className='w[50%] bg-blue-500 text-white p-2 rounded-sm font-bold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>User</button>
//                     </Link>
//                     <Link to="/admin/dashboard">
//                         <button className='w[50%] bg-blue-500 text-white p-2 rounded-sm font-bold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>Admin</button>
//                     </Link>
//                 </div> */}
//                 <p className='text-gray-600 mt-4'>Don't have an account? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/signup')}>Register!</span></p>
//             </form>
//         </div>
//     );
// };

// export default ALogin;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ULogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            // Proceed with login
            navigate('#');
        } else {
            // Show error message or handle appropriately
            alert('Please provide both email and password.');
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-white'>
            <form className='flex flex-col gap-5 bg-white p-8 rounded-md shadow-md w-1/3 items-center justify-center' onSubmit={handleLogin}>
                <input
                    type="email"
                    name=""
                    id=""
                    placeholder='Email'
                    className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm '
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name=""
                    id=""
                    placeholder='Password'
                    className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/user/dashboard">
                <button
                    type="submit"
                    className='w-full bg-blue-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
                    disabled={!email || !password} // Disable button if either email or password is empty
                >
                    User Login
                </button>
                </Link>
                <p className='text-gray-600 mt-4'>Don't have an account? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/signup')}>Register!</span></p>
            </form>
        </div>
    );
};

export default ULogin;
