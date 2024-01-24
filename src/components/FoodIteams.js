import React from "react"
import Shimmer from "./Shimmer";
import RestrauntCart from "./RestrauntCart"
// import {restrauntList} from "../contants"
import { useState,useEffect } from "react"
import { filterData } from "../../utils/helper";

// import 'core-js/es6/array'
import "regenerator-runtime/runtime";
import "babel-polyfill"


const FoodIteams = () => {
  const [restaurants , setRestaurants] = useState([])
  const [filterRestaurants ,setFilterRestaurants] = useState([])
  // const [restaurants , setRestaurants] = useState(restrauntList)
   const [searchText,setSearchText] = useState("")

   useEffect(()=>{
       getRestaurants();
   },[]);

   async function getRestaurants(){

    const raw = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const data = await raw.json()
  
    // setRestaurants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setRestaurants(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   }

    return (restaurants.length) == 0 ? <Shimmer/> : (
      <React.Fragment>
        <div className="flex justify-end search-bar bg-pink-50 m-4 px-2 py-2  ">
          <input className='border border-black  rounded-l-full bg-pink-100 px-2 py-2' type="text" value={searchText} placeholder="Search" onChange={(e)=> setSearchText(e.target.value)}/>     
          <button className="search-btn rounded-r-full border border-black bg-pink-300 hover:bg-gray-500 px-2 py-2  " onClick={() => {
            const data = filterData(searchText,restaurants)
            setRestaurants(restrauntList);
            setRestaurants(data);
            setFilterRestaurants(data)
          }}>
            Search
          </button>

        </div>
    
     <div className="restro-list flex flex-wrap justify-between">
       {
          filterRestaurants.map((restraunt)=>{
             return  <RestrauntCart {...restraunt.info} key={restraunt.info.id}/>   
          })
         }
       </div>
       </React.Fragment>
    ) 
 }

export default FoodIteams

