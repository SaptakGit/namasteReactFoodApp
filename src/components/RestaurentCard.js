import {CDN_URL} from "../utils/constants/";

const styleCard={
    backgroundColor: "#f0f0f0"
}


const RestaurentCard = (props) =>{
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = resData?.card.card.info;

    const {deliveryTime} = resData?.card.card.info.sla;

 
    return (
        <div className="m-4 p-4 w-[230px] rounded-lg bg-gray-200 hover:bg-gray-400" >
            <img alt="res-logo" className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} Munites</h4>
        </div>
    )
}

export default RestaurentCard