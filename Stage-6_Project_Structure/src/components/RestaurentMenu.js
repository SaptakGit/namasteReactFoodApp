import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from '../utils/useRestaurentMenu';

const RestaurentMenu = () => {

    const { resId } = useParams();
    //console.log(params);

    // Custom Hooks
    const resInfo = useRestaurentMenu(resId);

    if(resInfo === null) return ( <Shimmer/>);

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1> 
            <p>
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li> )}
            </ul>
        </div>
    )
};

export default RestaurentMenu;