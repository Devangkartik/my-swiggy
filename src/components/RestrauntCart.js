import {IMG_CDN_URL} from "../contants"
import React from "react";


// const RestrauntCart = (props) =>{
  // const RestrauntCart = ({restraunt}) =>{
   const RestrauntCart = ({ name,cloudinaryImageId,cuisines,avgRating,locality,costForTwo }) =>{

        // const { name,cloudinaryImageId,cuisines,avgRating } = restraunt.info;
      // console.log(props);
      
        return (
            <div className=" bg-pink-200 rounded-sm p-2 m-2 px-2 py-2 text-bold border border-black w-1/6 ">
             <img className="h-72" src={IMG_CDN_URL + cloudinaryImageId} alt="logo.png" />
                  <h3>{costForTwo}</h3>
                  <h2>{name}</h2>
                  <h3>{locality}</h3>
                 <h3>{cuisines.join(", ")}</h3>
               <h4>{avgRating}stars</h4>
            </div>
        )
    }
    export default RestrauntCart;