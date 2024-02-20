import { useState,useEffect } from "react";
import { swiggy_URL_menu } from "../constants";
const useRestaurant = (id)=>{
    const [restaurant,setRestaurant]=useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data=await fetch(swiggy_URL_menu+id);
        const json=await data.json();
        console.log(json);
        setRestaurant(json.data);

    }
    return restaurant;
}
export default useRestaurant;