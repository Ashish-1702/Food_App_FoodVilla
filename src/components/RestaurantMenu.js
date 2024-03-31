import { swiggy_URL_menu, image_URL } from "../constants";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 m-2 ">
      <div className="flex  justify-start p-5 pl-80  bg-black text-white w-[100%] rounded-md">
        <div className="p-4">
          <img className="rounded-md "
            src={
              image_URL +
              restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
          />
        </div>
        <div className="p-4">
          <h1 className="text-red-500 text-3xl">{restaurant?.cards[2]?.card?.card?.info?.name}</h1>
          <h3>{restaurant?.cards[2]?.card?.card?.info?.areaName}</h3>
          <h3>{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
          {/* <h3>{restaurant?.cards[2]?.card?.card?.info?.avgRating}</h3> */}
          <p className="flex item-center font-bold my-2 bg-green-700 p-1 pl-1.5 text-white rounded w-12">
                {restaurant?.cards[2]?.card?.card?.info?.avgRating}
                <FontAwesomeIcon icon={faStar} className="p-auto m-auto h-3 w-3 " style={{ fontSize: '1em', color: 'white' }} />
            </p>
          <h3>{restaurant?.cards[2]?.card?.card?.info?.city}</h3>
        </div>
      </div>
      <div className="p-2">
        <h1>Menu</h1>
        <ul className="flex flex-col">
          {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
            (item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name}-
                <button
                  className="p-2 m-1 bg-green-50 "
                  onClick={() => addFoodItem(item)}
                >
                  Add
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
