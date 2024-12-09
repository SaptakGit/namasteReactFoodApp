import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

import { useState } from "react";

const Body = () => {
//console.log(resList);
    //State variable
    const [listofRestaurent, setlistofRestaurent] = useState(resList)
   /* const [listofRestaurent, setlistofRestaurent] = useState([{
            data:{
                "id": "932398",
                "name": "Food Junction",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/7257d451-163a-48be-9744-7c1ca765af35_932398.jpg",
                "costForTwo": "₹200 for two",
                "cuisines": ["Rajasthani"],
                "avgRating": 4.5,
                "deliveryTime": 53,
            },
        },
        {
            data:{
                "id": "932399",
                "name": "KFC",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/7257d451-163a-48be-9744-7c1ca765af35_932398.jpg",
                "costForTwo": "₹200 for two",
                "cuisines": ["Rajasthani"],
                "avgRating": 3.8,
                "deliveryTime": 53,
            },
        },
    ]);*/

    // //Normal javascript variable
    // let listofRestaurentJs = [
    //     {
    //         data:{
    //             "id": "932398",
    //             "name": "Food Junction",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/7257d451-163a-48be-9744-7c1ca765af35_932398.jpg",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": ["Rajasthani"],
    //             "avgRating": 4.5,
    //             "deliveryTime": 53,
    //         },
    //     },
    //     {
    //         data:{
    //             "id": "932399",
    //             "name": "KFC",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/7257d451-163a-48be-9744-7c1ca765af35_932398.jpg",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": ["Rajasthani"],
    //             "avgRating": 3.8,
    //             "deliveryTime": 53,
    //         },
    //     },
    // ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    //filter logic
                    //console.log('Button Clicked');
                    //console.log(listofRestaurent);
                    filteredList = listofRestaurent.filter(res => res.card.card.info.avgRating > 4);
                    //console.log(listofRestaurent);
                    setlistofRestaurent(filteredList);
                }}>
                    Top Rated Restaurent
                </button>
            </div>
            <div className="res-container">
                {/*console.log(listofRestaurent)*/}
                {listofRestaurent.map(restaurent => ( <RestaurentCard key={restaurent.card.card.info.id} resData={restaurent}/> 
                ))}
            </div>
        </div>
    )
}

export default Body