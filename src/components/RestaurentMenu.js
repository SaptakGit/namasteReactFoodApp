import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from '../utils/useRestaurentMenu';
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () => {

    const { resId } = useParams();
    //console.log(params);

    // Custom Hooks
    const resInfo = useRestaurentMenu(resId);

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
            {/* <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li> )}
            </ul> */}
            {/* categories */}
            {categories.map((category) => (<RestaurentCategory key={category?.card?.card.title} data={category?.card?.card} />
            ))}
        </div>
    )
};

export default RestaurentMenu;