/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const details = useLoaderData();
    // console.log(details); obj
    const { strMeal, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strInstructions, strMealThumb, strMeasure1, strMeasure2, strTags } = details.meals[0];
    // console.log(singleMealObj);

    return (
        <div className='m-20'>
            <h2 className='text-4xl font-extrabold text-center font-mono'>{strMeal}</h2>
            <p className='font-semibold text-xl mt-10 font-mono'>Ingredient:</p>
            <ul className='font-semibold ml-24 font-mono'>

                <li>{strIngredient1}</li>
                <li>{strIngredient2}</li>
                <li>{strIngredient3}</li>
                <li>{strIngredient4}</li>
                <li>{strIngredient5}</li>
                <li>{strIngredient6}</li>
            </ul>
            <p className='font-semibold font-mono'>
                Instructions : {strInstructions}
            </p>
            <img className='m-48 rounded-full' src={strMealThumb} alt="" />
            <div className='font-semibold font-mono'>
                <p>{strMeasure1} </p>
                <p>{strMeasure2}</p>
            </div>

            <p className='mt-6 font-mono font-bold text-red-700'>Reminder : {strTags}</p>

            <div className='mt-12 flex justify-end gap-32'>
                <Link to={strIngredient6} className='bg-red-700 text-xl text-white font-bold pl-8 pr-8 rounded-md shadow-lg shadow-slate-950'>Watch</Link>
                <Link to="" className='bg-green-700 text-xl text-white font-bold pl-8 pr-8 rounded-md shadow-lg shadow-slate-950'>Order</Link>
            </div>
        </div>
    );
};

export default MealDetails;