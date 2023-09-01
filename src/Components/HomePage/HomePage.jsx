/* eslint-disable no-unused-vars */
import React from 'react';
import { HomeModernIcon} from '@heroicons/react/24/solid';
import image from '../../image/png.png'


const HomePage = () => {
    return (
        <div className='m-16'>
            <HomeModernIcon className='h-28 w-28 text-red-900 ml-20'></HomeModernIcon>
            <img src={image} alt="" className='w-full rounded-md shadow-lg shadow-orange-500' />
            
        </div>
    );
};

export default HomePage;