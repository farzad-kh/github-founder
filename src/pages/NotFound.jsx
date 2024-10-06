import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
const NotFound = () => {
    return (

        <div className='hero'>
            <div className='hero-content text-center'>
               <div className='max-w-lg'>
               <h className='text-7xl font-bold mb-8 block'>oops!</h>
                <p className='text-4xl mb-8'>404-page not found!</p>
                <Link className='btn btn-primary btn-lg' to="/">
                <FaHome className='mr-2 text-[#f8f8f8]'/>
                    BACK TO HOME
              
                </Link>
               </div>
            </div>
        </div>
    );
};

export default NotFound;