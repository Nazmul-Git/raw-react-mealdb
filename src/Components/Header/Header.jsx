/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='md:text-2xl font-serif rounded-sm m-16 font-bold text-red-700  gap-8 bg-zinc-900 shadow-lg shadow-orange-700 p-8  sticky top-0 z-50 '>
            <div onClick={ ()=>{setOpen(!open)} } className='md:hidden'>
                <span>
                    {
                        open===true ? <XMarkIcon className='h-10 w-10 mb-6 ml-60'></XMarkIcon>:<Bars3Icon className='h-10 w-10 mb-6 ml-60'></Bars3Icon>
                    }
                </span>
            </div>
            <div className={`md:flex md:static absolute gap-8 duration-700 ${open ? 'left-8':'-left-96'}`}>
                <ActiveLink to="/home">Home</ActiveLink>
                <ActiveLink to="/meals">Meals</ActiveLink>
                <ActiveLink to="/about">About</ActiveLink>
                <ActiveLink to="/contact">Contact</ActiveLink>
            </div>
        </nav>
    );
};

export default Header;