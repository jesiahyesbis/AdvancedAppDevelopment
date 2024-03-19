import React from 'react';
import loaderImage from '../../assets/img/loader.gif'; // Import your loader image

const Loader = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <img src={loaderImage} alt="Loading..." />
        </div>
    );
};

export default Loader;
