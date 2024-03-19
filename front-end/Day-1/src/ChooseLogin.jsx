// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Settings } from 'react-feather';

const ChooseLogin = () => {
  return (
    <div className="container mx-auto mt-8 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-200 p-6 rounded-lg shadow-md cursor-pointer"
        >
          <Link to="/alogin">
            <div className="flex items-center justify-center mb-4">
              <Settings size={32} className="mr-2" />
              <h2 className="text-lg font-semibold">Admin</h2>
            </div>
            <p>Click here to enter the admin login</p>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-200 p-6 rounded-lg shadow-md cursor-pointer"
        >
          <Link to="/ulogin">
            <div className="flex items-center justify-center mb-4">
              <User size={32} className="mr-2" />
              <h2 className="text-lg font-semibold">User</h2>
            </div>
            <p>Click here to enter the user login</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseLogin;
