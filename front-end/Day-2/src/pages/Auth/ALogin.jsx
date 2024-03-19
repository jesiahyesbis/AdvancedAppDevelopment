

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ALogin = () => {
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
        <div className='h-screen flex justify-center items-center bg-gradient-to-br from-yellow-400 to-yellow-200'>
            <form className='flex flex-col gap-5 bg-yellow-50 p-8 rounded-md shadow-md border border-yellow-300 w-1/3 items-center justify-center' onSubmit={handleLogin}>
                <input
                    type="email"
                    name=""
                    id=""
                    placeholder='Email'
                    className='bg-yellow-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-yellow-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm '
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name=""
                    id=""
                    placeholder='Password'
                    className='bg-yellow-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-yellow-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/admin/dashboard">
                    <button
                        type="submit"
                        className='w-full bg-yellow-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transform hover:scale-105 transition duration-300'
                        disabled={!email || !password} // Disable button if either email or password is empty
                    >
                        Admin Login
                    </button>
                </Link>
                <p className='text-gray-600 mt-4'>Don't have an account? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/signup')}>Register!</span></p>
            </form>
        </div>
    );
};

export default ALogin;



