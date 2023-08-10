/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealDetails from '../MealDetails/MealDetails';
import Meal from '../Meal/Meal';

const AllMeals = () => {
    const allMeals=useLoaderData();
    const allMealsArr=allMeals.meals;
    
    return (
        <div>
            <p className='text-3xl text-green-600 text-center font-semibold'>All meals</p>
            <div className='md:grid grid-cols-3 m-8'>
                {
                    allMealsArr.map(meal=><Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default AllMeals;