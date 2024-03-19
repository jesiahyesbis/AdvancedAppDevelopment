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
import Userleftbar from '../components/shared/Userleftbar';

function Venue() {
  return (
    <div className="flex">
        <Userleftbar/>
      <div className="flex flex-wrap justify-around w-3/4">
        <VenueCard
          imageSrc="https://media.weddingz.in/images/7ecdbef7465ac417a21423bf423e3400/IUuxnm3GUxKCH18a0cbJhR2sbMDGLb1g9GDmiV6bHMVpr6nYgx68citL1M_GNPKHMnveK08mBcAr7mxmqPmjDum-CVWdDb2ZxtQC6opUXebgOhpxqwJmRxoe6wwP_fWTsSfUf4w2.jpg"
          name="Domalur Layout"
          availabilityCount={5}
        />
        <VenueCard
          imageSrc="https://content.jdmagicbox.com/comp/tiruchengode/d6/9999p4288.4288.101020100505.u2d6/catalogue/sengunthar-thirumana-mandabam-chattayambuthur-tiruchengode-3w03p2o.jpg"
          name="KSR Banquet Hall"
          availabilityCount={3}
        />
        <VenueCard
          imageSrc="https://media.weddingz.in/images/6fb865d3052d1999173caf2fbc40f1f8/best-wedding-reception-halls-in-patna-you-will-absolutely-fall-in-love-with_1200x800.jpg"
          name="Le Grand"
          availabilityCount={7}
        />
        <VenueCard
          imageSrc="https://media.weddingz.in/images/7614445b049a8c4756db2dc81654f228/RIpl6Z3GTtwViy8tSai4xkl7rD84dUrN9YEKSXjhVIAtLJQKfEmSYR13MWodpxT8hNs_NGgC9kJaY7ntKS45GLRRWmoCm2B6uzA4M_BSwNtPLDsxuHt48sS_QKlikmrSuz29TeNj.jpg"
          name="JYS Open Hall"
          availabilityCount={2}
        />
        <VenueCard
          imageSrc="https://images.venuebookingz.com/17742-1637391907-wm-westfort-banquet-bangalore-1.jpg"
          name="HRS Halls"
          availabilityCount={4}
        />
      </div>
    </div>
  );
}

function VenueCard({ imageSrc, name, availabilityCount }) {
  return (
    <div className="w-1/2 p-4">
      <div className="bg-white rounded-lg shadow-md">
        <img src={imageSrc} alt={name} className="w-full h-40 object-cover rounded-t-lg" />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <p className="text-gray-700 mb-2">Availability Count: {availabilityCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Venue;


