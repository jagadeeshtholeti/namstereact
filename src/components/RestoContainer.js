import RestoCard from "./RestoCard";

import { restaurantsMock,restaurants } from "../utils/mockData";

import { use, useState } from "react";



const RestoContainer = () => {
    let [restaurantsData,setrestaurantsData] = useState(restaurants);

    const filterByRating = ()=> {

        restaurantsData = restaurantsData.filter((restaurant)=> {
           return restaurant.rating>4;
        })

        setrestaurants(restaurantsData);
    }

    return (
        <>
        <button onClick={filterByRating}>Filter by Rating</button>
        <div className="resto-card-container "> 
            {
                restaurantsData.map((rest,index)=> {
                    console.log(rest);
                    return(
                        <RestoCard key={index} restodetails={rest} />
                    )
                })
            }
        </div>
        </>
    )
}

export default RestoContainer