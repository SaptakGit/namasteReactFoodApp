import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer"

import { useState, useEffect } from "react";

const Body = () => {

    const [listofRestaurent, setListOfRestaurent] = useState([]);

    const [filteredRestaurent, setFilteredRestaurent] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        //console.log("Use Effect Called");
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6540709&lng=88.382339&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        //console.log(json);
        //optional chaning 
        setListOfRestaurent(json?.data?.cards?.slice(3));
        setFilteredRestaurent(json?.data?.cards?.slice(3));
    };

    //conditional rendering
    /*if(listofRestaurent.length === 0){
        return <Shimmer />
    }*/

    return listofRestaurent.length === 0 ? (<Shimmer />):(
        <div className="body">
            <div className="filter">
                <div className="search">
                    {/*The input box is bind to the State Variable.So if we type something inside the text box it will not show since the State Variable is set as empty. For that we use an onChange function which will update the State Variable and we can see what we type inside the text box*/}
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() =>{
                        // We want to filter the restrocard and update the UI
                        // To track the value of the input box, whatever the user is typing,to get that value we need to bind this value with a local state variable in React.
                        console.log(searchText);
                        const filteredRestaurent = listofRestaurent.filter((res)=>res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                        setFilteredRestaurent(filteredRestaurent)
;                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    filteredList = listofRestaurent.filter(res => res.card.card.info.avgRating > 4);
                    setListOfRestaurent(filteredList);
                }}>
                    Top Rated Restaurent
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurent.map(restaurent => ( <RestaurentCard key={restaurent.card.card.info.id} resData={restaurent}/> 
                ))}
            </div>
        </div>
    )
}

export default Body