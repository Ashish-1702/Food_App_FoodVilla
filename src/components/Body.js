import { RestrauntList, swiggy_URL } from "../constants";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";



const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurnts();
  }, []);

  // async function getRestaurnts(){
  //   const data = await fetch(swiggy_URL);
  //   const json = await data.json();
  //   console.log(json);
  //   setRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  // }

  function getRestaurnts() {
    setFilteredRestaurants(RestrauntList);
    setAllRestaurants(RestrauntList);
  }

  const isOnline=useOnline();
   if(!isOnline){
       return <h1> Offline,please check your internet connection...</h1>
   }

  // if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0) return <h1>No restaurant found</h1>;
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 my-5 flex justify-center shadow-sm ">
        <input
          type="text"
          className="w-[450px] h-[50px] rounded-md p-2 shadow-2xl border border-black"
          placeholder="Search a restaurant you want..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button
          className=" bg-orange-900 text-white  w-[80px] rounded"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap w-auto justify-center align-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
              <RestrauntCard {...restaurant.info} />
              </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
