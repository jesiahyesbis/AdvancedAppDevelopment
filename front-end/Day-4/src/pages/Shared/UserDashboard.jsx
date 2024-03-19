import React from 'react';

const UserDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">User Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Recent Bookings</h2>
          <div className="flex flex-col gap-4">
           
              <div className="flex items-center gap-2">
                <img src="https://m.media-amazon.com/images/I/81DXhu6ONML.jpg" alt="Product Image" className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">Baby Shower</h3>
                  <p className="text-gray-600">Order Date: January 1, 2024</p>
                  <p className="text-gray-600">Price: $60</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img src="https://m.media-amazon.com/images/I/71IC2lqIgdL._AC_UF1000,1000_QL80_.jpg" alt="Product Image" className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">Baby Shower</h3>
                  <p className="text-gray-600">Order Date: January 10, 2024</p>
                  <p className="text-gray-600">Price: $30</p>
                </div>
              </div>
          
              <div className="flex items-center gap-2">
                <img src="https://m.media-amazon.com/images/I/91-t+ihEjdL.jpg" alt="Product Image" className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">Housewarming Party</h3>
                  <p className="text-gray-600">Order Date: January 20, 2024</p>
                  <p className="text-gray-600">Price: $40</p>
                </div>
              </div>
          
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Account Information</h2>
          <div className="divide-y divide-gray-200">
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Ram</p>
              <p className="text-gray-600">Email: Ram@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Radha</p>
              <p className="text-gray-600">Email: Radha@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
            <div className="account-item p-4 hover:bg-blue-100 transition duration-300">
              <p className="text-gray-600">Username: Daisy</p>
              <p className="text-gray-600">Email: Daisy@gmail.com</p>
              <p className="text-gray-600">Membership: Premium</p>
            </div>
            <hr className="my-4" />
          </div>
        </div>


        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <div>
            <p className="text-gray-600">Notifications: On</p>
            <p className="text-gray-600">Theme: Light</p>
            <p className="text-gray-600">Language: English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
