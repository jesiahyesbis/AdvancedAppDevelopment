// AdminDashboard.js

import React from "react";
import { Link } from "react-router-dom";

const gifts = [
  {
    id: 1,
    name: "Birthday party",
    theme: "Elegant",
    price: "$49.99",
    image: "https://m.media-amazon.com/images/I/81DXhu6ONML.jpg",
  },
  {
    id: 2,
    name: "Housewarming party",
    theme: "Romantic",
    price: "$39.99",
    image: "https://m.media-amazon.com/images/I/91-t+ihEjdL.jpg",
  },
  {
    id: 3,
    name: "Baby Shower",
    theme: "Classic",
    price: "$59.99",
    image: "https://m.media-amazon.com/images/I/71IC2lqIgdL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Bachelorette Party",
    theme: "Sophisticated",
    price: "$34.99",
    image: "https://www.brides.com/thmb/K7OaEYMtae0MAYZ0gDisTZnyG2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-b241afc488484a6c92286d7d8940a1da.jpg",
  },
  {
    id: 5,
    name: "Thanks Giving",
    theme: "Luxurious",
    price: "$29.99",
    image: "https://cdn.cdnparenting.com/articles/2018/12/14121244/1143416498-H-1024x700.webp",
  },
  
];

const AdminDashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8 text-purple-800">Manage Events</h1>
      <div className="overflow-y-auto h-96">
        <div className="grid grid-cols-3 gap-8">
          {gifts.map((gift) => (
            <div key={gift.id} className="border p-4 bg-white shadow-lg rounded-lg">
              <Link to="#" className="block">
                <img src={gift.image} alt={gift.name} className="w-full mb-4 rounded-md" />
              </Link>
              <p className="text-lg font-bold text-gray-800">{gift.name}</p>
              <p className="text-sm mb-2 text-gray-600">{gift.theme}</p>
              <p className="text-lg font-bold text-purple-700">{gift.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
