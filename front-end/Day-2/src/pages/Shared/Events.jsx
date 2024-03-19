// import React from 'react';

// const EventCard = ({ eventName, imageUrl }) => {
//   return (
    
//     <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 flex items-center">
//       <div className="flex-1">
//         <h2 className="text-xl font-semibold mb-2">{eventName}</h2>
//         <div className="flex items-center">
//           <div className="w-20 h-20 mr-4 overflow-hidden rounded-full">
//             <img src={imageUrl} alt={eventName} className="object-cover w-full h-full" />
//           </div>
//           {/* <a href="#" className="text-blue-500 hover:underline">View related pictures</a> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Events = () => {
//   return (
//     <div>
      
//     <div className="flex">
//       <div className="flex-1 p-4 overflow-y-auto"style={{ maxHeight: 'calc(100vh - 64px)' }}>
//         <h1 className="text-3xl font-semibold mb-8">Events</h1>
//         <EventCard eventName="Birthday Party" imageUrl="https://m.media-amazon.com/images/I/81DXhu6ONML.jpg" />
//         <EventCard eventName="Housewarming Party" imageUrl="https://m.media-amazon.com/images/I/91-t+ihEjdL.jpg" />
//         <EventCard eventName="Baby Shower" imageUrl="https://m.media-amazon.com/images/I/71IC2lqIgdL._AC_UF1000,1000_QL80_.jpg" />
//         <EventCard eventName="Bachelors Party" imageUrl="https://www.brides.com/thmb/K7OaEYMtae0MAYZ0gDisTZnyG2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-b241afc488484a6c92286d7d8940a1da.jpg" />
//         <EventCard eventName="Thanksgiving" imageUrl="https://cdn.cdnparenting.com/articles/2018/12/14121244/1143416498-H-1024x700.webp"/>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Events;




// import React from 'react';

// const EventCard = ({ eventName, imageUrl }) => {
//   return (
    
//     <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 flex items-center">
//       <div className="flex-1">
//         <h2 className="text-xl font-semibold mb-2">{eventName}</h2>
//         <div className="flex items-center">
//           <div className="w-20 h-20 mr-4 overflow-hidden rounded-full">
//             <img src={imageUrl} alt={eventName} className="object-cover w-full h-full" />
//           </div>
//           {/* <a href="#" className="text-blue-500 hover:underline">View related pictures</a> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Venue = () => {
//   return (
//     <div>
      
//     <div className="flex">
//       <div className="flex-1 p-4 overflow-y-auto"style={{ maxHeight: 'calc(100vh - 64px)' }}>
//         <h1 className="text-3xl font-semibold mb-8">Events</h1>
//         <EventCard eventName="Birthday Party" imageUrl="https://m.media-amazon.com/images/I/81DXhu6ONML.jpg" />
//         <EventCard eventName="Housewarming Party" imageUrl="https://m.media-amazon.com/images/I/91-t+ihEjdL.jpg" />
//         <EventCard eventName="Baby Shower" imageUrl="https://m.media-amazon.com/images/I/71IC2lqIgdL._AC_UF1000,1000_QL80_.jpg" />
//         <EventCard eventName="Bachelors Party" imageUrl="https://www.brides.com/thmb/K7OaEYMtae0MAYZ0gDisTZnyG2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-b241afc488484a6c92286d7d8940a1da.jpg" />
//         <EventCard eventName="Thanksgiving" imageUrl="https://cdn.cdnparenting.com/articles/2018/12/14121244/1143416498-H-1024x700.webp"/>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Venue;



import React from 'react';
import Userleftbar from '../../components/shared/Userleftbar';

const EventCard = ({ eventName, imageUrl }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 flex items-center">
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">{eventName}</h2>
        <div className="flex items-center">
          <div className="w-20 h-20 mr-4 overflow-hidden rounded-full">
            <img src={imageUrl} alt={eventName} className="object-cover w-full h-full" />
          </div>
          {/* <a href="#" className="text-blue-500 hover:underline">View related pictures</a> */}
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="flex">
      <Userleftbar/> {/* Include UserSidebar component */}
      <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
        <h1 className="text-3xl font-semibold mb-8">Events</h1>
        <EventCard eventName="Birthday Party" imageUrl="https://m.media-amazon.com/images/I/81DXhu6ONML.jpg" />
        <EventCard eventName="Housewarming Party" imageUrl="https://m.media-amazon.com/images/I/91-t+ihEjdL.jpg" />
        <EventCard eventName="Baby Shower" imageUrl="https://m.media-amazon.com/images/I/71IC2lqIgdL._AC_UF1000,1000_QL80_.jpg" />
        <EventCard eventName="Bachelors Party" imageUrl="https://www.brides.com/thmb/K7OaEYMtae0MAYZ0gDisTZnyG2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sq-b241afc488484a6c92286d7d8940a1da.jpg" />
        <EventCard eventName="Thanksgiving" imageUrl="https://cdn.cdnparenting.com/articles/2018/12/14121244/1143416498-H-1024x700.webp"/>
      </div>
    </div>
  );
};

export default Events;

