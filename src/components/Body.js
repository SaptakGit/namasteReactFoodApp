import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

import { useState } from "react";

const Body = () => {

    const [listofRestaurent, setlistofRestaurent] = useState(resList)

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    filteredList = listofRestaurent.filter(res => res.card.card.info.avgRating > 4);
                    setlistofRestaurent(filteredList);
                }}>
                    Top Rated Restaurent
                </button>
            </div>
            <div className="res-container">
                {listofRestaurent.map(restaurent => ( <RestaurentCard key={restaurent.card.card.info.id} resData={restaurent}/> 
                ))}
            </div>
        </div>
    )
}

export default Body