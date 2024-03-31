import { image_URL } from "../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




const RestrauntCard=({name,cuisines,cloudinaryImageId,avgRating})=>{
    return(
        <div className="w-56 p-2 m-9 shadow-lg ">
            <img className ="h-40 w-60 p-1" src={image_URL+cloudinaryImageId}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            {/* <h4>{avgRating} Stars</h4> */}
            <p className="flex item-center font-bold my-2 bg-green-700 p-1 pl-1.5 text-white rounded w-12">
                {avgRating}
                <FontAwesomeIcon icon={faStar} className="p-auto m-auto h-3 w-3 " style={{ fontSize: '1em', color: 'white' }} />

            </p>
        </div>
    )
}

export default RestrauntCard;