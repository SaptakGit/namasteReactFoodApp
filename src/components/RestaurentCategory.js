import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick =  () =>{
        setShowItems(!showItems); // toggle feature
    }

    return (
        <div>
           
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
                {/*Accordian Header*/}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>👇</span>
                </div>

                {/*Accordian Body*/}
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurentCategory;