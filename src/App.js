
import React from "react"
import ReactDOM from "react-dom/client" 
import Header from "./components/Header"
import Footer from "./components/Footer"
import FoodIteams from "./components/FoodIteams"
import Contact from "./components/Contact"
import About from "./components/About"
import Error from "./components/Error"
import RestrauntMenu from "./components/RestrauntMenu"



import "regenerator-runtime/runtime";
import "babel-polyfill"


import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"

const AppLayout = () => {
  return (
      <React.Fragment>
          <Header/>
          <Outlet/>
          <Footer/>
      </React.Fragment>
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>,
    children :( [
      {
        path:'/',
        element : <FoodIteams/>
      },
      {
        path:'/about',
        element : <About/>, 
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path : "/restaurant/:id",
        element : <RestrauntMenu/>
      }
    ])
  }
])


  ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />)
// root.render(<AppLayout/>)
// root.render(<RouterProvider router={appRouter}/>)

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AppLayout />
//   </React.StrictMode>,
//   document.getElementById('root'),
// )


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);

// const Header = () =>{
//   return (
//        <div className="header">
//         <a herf="/"> <img className="logo" alt="logo" src="https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/302275887_487537640050648_5998956273504369200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=7uwPh1e2VNYAX8fsKXn&_nc_oc=AQn0gehndHicGxDpT4UZ5VffsbZb07Pf8CA8iNyDgMI_OzXV2qq_Ynk4iSvgsQ9_f78&_nc_ht=scontent.flko1-2.fna&oh=00_AfCNeAH95cDfKDTApqBL9-CppYgKgy-VqT81I3F2PXrNSA&oe=650AFB2E"/></a>
//                   <div className="nav-iteams">
//                       <ul>
//                        <li>Home</li>
//                        <li>About us</li>
//                        <li>Contact us</li>
//                        <li>Cart</li>
//                       </ul>
//                   </div>
//     </div>
//   )
// }

// const restrauntList = [ {
//     name : "Burger King",
//     image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
//     cuisines : ["Burgers","Americans"].join(","),
//     rating:"4.2"
// },{
//   name : "Chhole-bathore",
//   image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
//   cuisines : ["Chhole-bathore","Americans"].join(","),
//   rating:"4.5"
// },{
//   name : "Paratha",
//   image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
//   cuisines : ["Paratha","Americans"].join(","),
//   rating:"4.4"
// },{
//   name : "Sandwitch",
//   image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
//   cuisines : ["Burgers","Americans"].join(","),
//   rating:"4.7"
// },{
//   name : "Idlli",
//   image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
//   cuisines : ["Idlli","Americans"].join(","),
//   rating:"4.6"
// },{
//   name : "Dosa",
//   image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
//   cuisines : ["Dosa","Americans"].join(","),
//   rating:"4.8"
// }]

// const RestrauntCart = (props) =>{
//     return (
//         <div className="cart">
//             <img src={restrauntList [0].image} alt="logo.png" />
//             <h2>{restrauntList [0].name}</h2>
//             <h3>{restrauntList [0].cuisines}</h3>
//             <h4>{restrauntList [0].rating}stars</h4>
//         </div>
//     )
// }

// const restrauntList  = {
//     name : "Burger King",
//     image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
//     cuisines : ["Burgers","Americans"].join(","),
//     rating:"4.2"
// }
// const restrauntList = [
//   {
//     "info": {
//       "id": "90566",
//       "name": "Chaayos Chai+Snacks=Relax",
//       "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
//       "locality": "Connaught Place",
//       "areaName": "Connaught Place",
//       "costForTwo": "₹250 for two",
//       "cuisines": [
//         "Bakery",
//         "Beverages",
//         "Chaat",
//         "Desserts",
//         "Fast Food",
//         "Home Food",
//         "Italian",
//         "Maharashtrian",
//         "Snacks",
//         "Street Food",
//         "Sweets"
//       ],
//       "avgRating": 4.4  
//     } 
//   },
//   {
//     "info": {
//       "id": "218676",
//       "name": "Chai Point",
//       "cloudinaryImageId": "dr5aflzisbsyi4ntu6th",
//       "locality": "B Block",
//       "areaName": "Connaught Place",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "Bakery",
//         "Beverages",
//         "Maharashtrian",
//         "Snacks",
//         "Street Food",
//         "South Indian",
//         "Punjabi",
//         "Chaat",
//         "Indian",
//         "American",
//         "North Indian",
//         "Fast Food",
//         "Desserts",
//         "Cafe",
//         "Healthy Food",
//         "Home Food"
//       ],
//       "avgRating": 4.2,
      
//     }
//   },
//   {
//     "info": {
//       "id": "21383",
//       "name": "Subway",
//       "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
//       "locality": "Baba Kharak Singh Marg",
//       "areaName": "Connaught Place",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Salads",
//         "Snacks",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 4.1,
     
//     }
//   },
//   {
//     "info": {
//       "id": "8614",
//       "name": "Burger King",
//       "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//       "locality": "Connaught Place",
//       "areaName": "Connaught Place",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Burgers",
//         "American"
//       ],
//       "avgRating": 4.3,
     
//     }
//   },
//   {
//     "info": {
//       "id": "443497",
//       "name": "EatFit",
//       "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
//       "locality": "Laxmi Narain Street",
//       "areaName": "Paharganj",
//       "costForTwo": "₹270 for two",
//       "cuisines": [
//         "Chinese",
//         "Healthy Food",
//         "Tandoor",
//         "Pizzas",
//         "North Indian",
//         "Thalis",
//         "Biryani"
//       ],
//       "avgRating": 4.2,
     
//     }
//   },
//   {
//     "info": {
//       "id": "58217",
//       "name": "Theobroma",
//       "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
//       "locality": "Connaught Place",
//       "areaName": "Connaught Place",
//       "costForTwo": "₹800 for two",
//       "cuisines": [
//         "Bakery",
//         "Desserts"
//       ],
//       "avgRating": 4.5,
     
      
//     }
//   },
//   {
//     "info": {
//       "id": "69464",
//       "name": "Starbucks Coffee",
//       "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
//       "locality": "A Block",
//       "areaName": "Connaught Place",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Beverages",
//         "Cafe",
//         "Snacks",
//         "Desserts",
//         "Bakery",
//         "Ice Cream"
//       ],
//       "avgRating": 4.1,
    
//     }
//   },
//   {
//     "info": {
//       "id": "26719",
//       "name": "KFC",
//       "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
//       "locality": "Janpath Road",
//       "areaName": "Connaught Place",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Biryani",
//         "American",
//         "Snacks",
//         "Fast Food"
//       ],
//       "avgRating": 4.2,
     
//     }
//   },
//   {
//     "info": {
//       "id": "40414",
//       "name": "Bikanervala",
//       "cloudinaryImageId": "k1ppyflw5ypymt3rayid",
//       "locality": "Baba Kharak Singh Marg",
//       "areaName": "Connaught Place",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "North Indian",
//         "Snacks",
//         "Chaat",
//         "Sweets"
//       ],
//       "avgRating": 4,
     
//     }
//   },
//   {
//     "info": {
//       "id": "91616",
//       "name": "Cafe Coffee Day",
//       "cloudinaryImageId": "b925459fbc1faf59f02f7289eb079a74",
//       "locality": "Hanuman Road",
//       "areaName": "Connaught Place",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Beverages",
//         "Cafe",
//         "Snacks",
//         "Desserts",
//         "Burgers",
//         "Ice Cream",
//         "Bakery",
//         "Fast Food"
//       ],
//       "avgRating": 4.4,
//     }
//   },
//   {
//     "info": {
//       "id": "286518",
//       "name": "UBQ by Barbeque Nation",
//       "cloudinaryImageId": "ru7j7x8qqtvuzfuw7cdh",
//       "locality": "N Block",
//       "areaName": "Janpath",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "North Indian",
//         "Barbecue",
//         "Biryani",
//         "Kebabs",
//         "Mughlai",
//         "Desserts"
//       ],
//       "avgRating": 4,
//     }
//   },
//   {
//     "info": {
//       "id": "8619",
//       "name": "Bikkgane Biryani",
//       "cloudinaryImageId": "56646c3f698b3c5ae53639c49a4725af",
//       "locality": "Connaught Place",
//       "areaName": "Connaught Place",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Biryani",
//         "Mughlai",
//         "North Indian"
//       ],
//       "avgRating": 4,
//     }
//   }
// ]
// console.log(restrauntList[0].info.name);
// console.log(restrauntList[0].info.cuisines.join(", "))
// console.log(restrauntList[0].info.avgRating)

// const RestrauntCart = (props) =>{
  // const RestrauntCart = ({restraunt}) =>{
//     const RestrauntCart = ({ name,cloudinaryImageId,cuisines,avgRating,locality,costForTwo }) =>{

//     // const { name,cloudinaryImageId,cuisines,avgRating } = restraunt.info;
//   // console.log(props);
//     return (
//         <div className="cart">
//          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="logo.png" />
//               <h3>{costForTwo}</h3>
//               <h2>{name}</h2>
//               <h3>{locality}</h3>
//              <h3>{cuisines.join(", ")}</h3>
//            <h4>{avgRating}stars</h4>
//         </div>
//     )
// }
// const Body = () =>{
//    return (
//     <div className="restro-list">
//       {
//           restrauntList.map((restraunt)=>{
//             return <RestrauntCart {...restraunt.info}/>
//            })
//       }

      {/* <RestrauntCart {...restrauntList[0].info}/>
        <RestrauntCart  {...restrauntList[1].info}/>
        <RestrauntCart  {...restrauntList[2].info}/>
         <RestrauntCart {...restrauntList[3].info}/>
         <RestrauntCart {...restrauntList[4].info}/>
         <RestrauntCart {...restrauntList[5].info}/> */}

   {/* <RestrauntCart restraunt={restrauntList[0].info.name} cuisines={restrauntList[0].info.cuisines}/> */}

        {/* <RestrauntCart restraunt={restrauntList[0]}/>
        <RestrauntCart  restraunt={restrauntList[1]}/>
        <RestrauntCart  restraunt={restrauntList[2]}/>
         <RestrauntCart restraunt={restrauntList[3]}/>
         <RestrauntCart restraunt={restrauntList[4]}/>
         <RestrauntCart restraunt={restrauntList[5]}/> */}
//     </div>
//    )
    
// }
// const Footer = () =>{
//    return (
//         <h2>Footer</h2>
//    )
// }

// const AppLayout = () =>{
//     return (
//         <React.Fragment>
//             <Header/>
//             <Body/>
//             <Footer/>
//         </React.Fragment>
//     )
// }

//React.createElement=> object=> Html(Dom)

// const heading = React.createElement("h1",{id:"tittle",key:"h1"},"Namaste javascript with  Akshyat saini")

//this is not a string its jsx and heading is React Element if we are multipleline uses () paranthisis 
// jsx=>React.createElement=> object=> Html(Dom)

// const heading = ( <h2 id="title" key="h2">
//        Namaste javascript with  learn by Devang kartik 
//     </h2> )

// const Title = ( ) =>{
//     return(<h1 id="title" key="h1" style={{backgroundColor:"yellow"}}>
//    Welcome to the course Namaste javascript with  Akshyat saini
//  </h1> )
//  }

//components : it name should alaways start with capital letters , Everything is component in react...
//1)=>functional component          2)=>classbase component
// const HeaderComponents = () =>{
//     return (
//            <div className="container">
//             {/* <Title/>  components composition: if we component inside components*/}
//             {Title()}
//                {heading}
//                <h2>Namaste react first functional base component</h2>
//             </div>    
//     )
// }

// const heading = React.createElement("div",{style:{backgroundColor:"yellow"}},[
//     React.createElement("li",{key:"1"},"Home"),
//     React.createElement("li",{key:"2"},"About"),
//     React.createElement("li",{key:"3"},"contact")
// ])

// const heading1 = React.createElement("h1",{key:"h1" , id:"title"},"heading 1")
// const heading2 = React.createElement("h2",{key:"h2" , id:"title"},"heading 2")
// const container = React.createElement("div",{id:"container"},[heading1, heading2])

// const root = ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout/>);

// root.render(<HeaderComponents/>)
// root.render(<AppLayout/>)