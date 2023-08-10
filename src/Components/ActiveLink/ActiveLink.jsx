/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ActiveLink = ({to,children}) => {
    return (
        <NavLink
        to={to}
        className={({isActive})=> isActive? 'text-white underline':''}
        >
            {children}
              
        </NavLink>
    );
};

export default ActiveLink;