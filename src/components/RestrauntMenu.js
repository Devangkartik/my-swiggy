import React from "react";
// import {useState,useEffect} from "react";
// import {useparams} from "react-router-dom";
// import {IMG_CDN_URL} from "../contants";

import "regenerator-runtime/runtime";
import "babel-polyfill"

const RestrauntMenu = () =>{
    // const [restaurant , setRestaurant] = useState([]);
 
    // useEffect(() => {
    //   getRestaurantInfo();
    // },[]);

    // async function getRestaurantInfo() {
    //     const rawData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId={resId}&catalog_qa=undefined&submitAction=ENTER");
    //     const data = await rawData.json();
    //    setRestaurant(data.data.cards.card.card.info);
    // }  

    // const {resId} =  useparams()
  

  return(
    <React.Fragment>
      <h1>Reastraunt component</h1>
        {/* <h1>Restaurant id :{resId}</h1> 
         <img src = {IMG_CDN_URL + restaurant + cloudinaryImageId} alt="imgcould not load ..."  />
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.costForTwo}</h3>
        <h4>{restaurant.avgRating}</h4> */}
        
    </React.Fragment>
  )
}
export default RestrauntMenu;
