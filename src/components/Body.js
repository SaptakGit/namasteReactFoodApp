import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";

import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listofRestaurent, setListOfRestaurent] = useState([]);

    const [filteredRestaurent, setFilteredRestaurent] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

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

        //console.log(json?.data?.cards?.slice(3));
    };

    //conditional rendering
    /*if(listofRestaurent.length === 0){
        return <Shimmer />
    }*/

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you are Offline. Pleas check your internet connection</h1>

    const {loggedInUser, setUserName} = useContext(UserContext);

    return listofRestaurent.length === 0 ? (<Shimmer />):(
        <div className="body">
            <div className="flex">
                <div className="search m-4 p-4">
                    {/*The input box is bind to the State Variable.So if we type something inside the text box it will not show since the State Variable is set as empty. For that we use an onChange function which will update the State Variable and we can see what we type inside the text box*/}
                    <input type="text" data-testid = "searchInput" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() =>{
                        // We want to filter the restrocard and update the UI
                        // To track the value of the input box, whatever the user is typing,to get that value we need to bind this value with a local state variable in React.
                        console.log(searchText);
                        const filteredRestaurent = listofRestaurent.filter((res)=>res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                        setFilteredRestaurent(filteredRestaurent)
;                    }} >Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        filteredList = listofRestaurent.filter(res => res.card.card.info.avgRating > 4);
                        setListOfRestaurent(filteredList);
                    }}>
                        Top Rated Restaurent
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName: </label>
                    <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
                </div>

            </div>
            <div className="flex flex-wrap">
                {filteredRestaurent.map(restaurent => ( <Link to={"/restaurent/" + restaurent.card.card.info.id} key={restaurent.card.card.info.id}>
                {/* If a restaurent is promoted then add a promoted tag to it */}
                {restaurent.card.card.info.promoted ? (
                    <RestaurentCardPromoted resData={restaurent}/>
                ) : (
                    <RestaurentCard resData={restaurent}/> 
                )}
                </Link>
                ))}
            </div>
        </div>
    )
}

export default Body