/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Meal = ({ meal }) => {
    const { idMeal, strMealThumb, strMeal, strCategory, strArea } = meal;
    return (
        <div className='m-8 shadow-neutral-900 shadow-2xl relative rounded-md'>
            <div className='m-6'>

                <img src={strMealThumb} alt="" />

                <div className='m-4 relative'>
                    <h2 className='font-bold text-2xl'>{strMeal}</h2>
                    <p className='font-semibold font-serif'>{strCategory}</p>
                    <p className='font-bold text-right mb-24'>{strArea}</p>
                </div>
                <div className='text-3xl rounded-sm font-extrabold font-serif text-center text-amber-300 bg-blue-800 p-3 absolute bottom-4'>
                    <Link to={`/meals/${idMeal}`}>Details</Link>
                </div>
            </div>

        </div>
    );
};

export default Meal;