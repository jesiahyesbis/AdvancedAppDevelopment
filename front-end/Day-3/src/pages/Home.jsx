import React from 'react';

const GiftItem = ({ image, title, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center">
        <div className="w-48 h-48 flex items-center justify-center">
          <div className="w-36 h-36 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <hr className="w-4/5 my-4 border-gray-300" /> {/* Line added */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  

  

// Home component
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
    <h1 className="text-4xl font-bold mb-8 text-black">Welcome to Party Pro!</h1>
    <p className="text-lg text-black mb-12">Make all your party fantasies come true.</p>
   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Render various gift items */}
        <GiftItem
          image="https://m.media-amazon.com/images/I/71IC2lqIgdL._AC_UF1000,1000_QL80_.jpg"
          title="Baby Shower"
          description="Make your significant other embrace her motherhood."
        />
        <GiftItem
          image="https://m.media-amazon.com/images/I/81DXhu6ONML.jpg"
          title="Birthday Party"
          description="Let the little ones remember their precious day."
        />
        <GiftItem
          image="https://www.brides.com/thmb/K7OaEYMtae0MAYZ0gDisTZnyG2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-b241afc488484a6c92286d7d8940a1da.jpg"
          title="Bachelor Party"
          description="One day to remember."
        />
        {/* Add more GiftItem components for additional gifts */}
      </div>
    </div>
  );
};

export default Home;
