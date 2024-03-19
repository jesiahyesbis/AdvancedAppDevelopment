import React from 'react';
import { Link } from 'react-router-dom';
import { RiHome2Line, RiShoppingCart2Line, RiFileList2Line, RiLogoutBoxLine, RiSettings2Line } from 'react-icons/ri';
import { FaBirthdayCake, FaBuilding } from 'react-icons/fa';
class Userleftbar extends React.Component {
  render() {
    return (
      <div className="left-sidebar bg-rose-950 text-white w-48 py-6 px-4">
        <Link to="/" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiHome2Line className="inline-block mr-2" />
          Home
        </Link>
        <Link to="/user/placeorder" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiShoppingCart2Line className="inline-block mr-2" />
          Place Order
        </Link>
        <Link to="/user/myorder" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiFileList2Line className="inline-block mr-2" />
          My Bookings
        </Link>
        <Link to="/user/settings" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiSettings2Line className="inline-block mr-2" />
          Settings
        </Link>
        <Link to="/user/events" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
        <FaBirthdayCake className="inline-block mr-2" />

          Events
        </Link>
        <Link to="/user/venue" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
        <FaBuilding className="inline-block mr-2" />

          Venues
        </Link>
        <div className="flex flex-col justify-between h-full">
          <div> {/* Empty div to push Logout button to bottom */}
            <Link to="/">
              <button onClick={this.props.logout} className="bg-red-500 block w-full text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
                <RiLogoutBoxLine className="inline-block mr-2" />
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Userleftbar;
