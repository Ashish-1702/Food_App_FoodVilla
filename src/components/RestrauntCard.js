import { image_URL } from "../constants";


const RestrauntCard=({name,cuisines,cloudinaryImageId,avgRating})=>{
    return(
        <div className="w-56 p-2 m-9 shadow-lg ">
            <img className ="h-40 w-60 p-1" src={image_URL+cloudinaryImageId}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} Stars</h4>
        </div>
    )
}

export default RestrauntCard;