import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL} from "../utils/constants";
const ItemList = ({items, dummy}) =>{

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    };

    return (
        <div>
            {items.map(item => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 bg-black shadow-lg m-auto mx-16 rounded-lg text-white" onClick={() => handleAddItem(item)} > Add + </button>
                        </div>
                        
                        <img src={CDN_URL + item.card.info.imageId} className="rounded-md" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;