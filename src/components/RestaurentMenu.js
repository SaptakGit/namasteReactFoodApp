import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from '../utils/useRestaurentMenu';
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {

    const { resId } = useParams();
    //console.log(params);

    // Custom Hooks
    const resInfo = useRestaurentMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if(resInfo === null) return ( <Shimmer/>);

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1> 
            <p className="font-bold text-lg">
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            {/* categories */}
            {categories.map((category, index) => (
                // controlled component
                <RestaurentCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>
            ))}
        </div>
    )
};

export default RestaurentMenu;