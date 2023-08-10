import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import AllMeals from './Components/AllMeals/AllMeals';
import MealDetails from './Components/MealDetails/MealDetails';


const router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/home',
        element:<HomePage></HomePage>
      },
      {
        path:'meals',
        element:<AllMeals></AllMeals>,
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      },
      {
        path:'meals/:mealId',
        element:<MealDetails></MealDetails>,
        loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
