import { swiggy_URL_menu, image_URL } from "../constants";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const restaurant = useRestaurant(id);
  const dispatch=useDispatch();

  const addFoodItem=(item)=>{
    dispatch(addItem(item));
  }

  return (
    <div className="flex p-10 m-2 justify-between ">
      <div>
        <h1>Restaurant id :{id}</h1>
        <h2>{restaurant?.cards[2]?.card?.card?.info?.name}</h2>
        <img
          src={
            image_URL +
            restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[2]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
        <h3>{restaurant?.cards[2]?.card?.card?.info?.avgRating}</h3>
        <h3>{restaurant?.cards[2]?.card?.card?.info?.city}</h3>
      </div>
      <div className="p-2">
        <h1>Menu</h1>
        <ul className="flex flex-col">
          {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
            (item) => (
              <li  key={item?.card?.info?.id}>
                {item?.card?.info?.name}-
                <button className="p-2 m-1 bg-green-50 " onClick={()=>addFoodItem(item)}>Add</button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
