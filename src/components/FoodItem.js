import { image_URL } from "../constants";


const FoodItem=({name,defaultPrice,price,imageId})=>{
    return(
        <div className="w-56 p-2 m-9 shadow-lg ">
            <img className ="h-40 w-100 p-1" src={image_URL+imageId}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>Rupees :{defaultPrice/100 || price/100}</h3>
        </div>
    )
}

export default FoodItem;