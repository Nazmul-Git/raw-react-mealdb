/* eslint-disable no-unused-vars */
import React from 'react';
import { DevicePhoneMobileIcon, EnvelopeOpenIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='font-serif '>
            <p className='text-center font-bold text-2xl'>Contact us</p>
            <div className=' bg-pink-100 m-16 p-20 rounded-ee-lg'>
                <div className='flex gap-2'>
                    <DevicePhoneMobileIcon className='h-8 w-8 text-green-500'></DevicePhoneMobileIcon>
                    <p>+088 01706256105</p>
                </div>

                <div className='flex gap-2 mt-4'>
                    <EnvelopeOpenIcon className='h-8 w-8 text-red-700'></EnvelopeOpenIcon>
                    <Link to="" className='text-blue-500'>nazmu.hasan25@gmail.com</Link>
                </div>
                <p className='ml-10 mt-4'>
                    Mirpur -1, Dhaka, Bangladesh.
                </p>
            </div>
        </div>
    );
};

export default Contact;