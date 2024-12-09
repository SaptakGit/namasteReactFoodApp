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
        <div className="res-card" style={styleCard}>
            <img alt="res-logo" className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} Munites</h4>
        </div>
    )
}

export default RestaurentCard