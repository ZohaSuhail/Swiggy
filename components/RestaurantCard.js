
import {CDN_URL} from "../common/constants";
const RestaurantCard = (props) => {
    const { resdata } = props;
    const{cloudinaryImageId,
        name, 
        avgRating,
        cuisines,
        costForTwo,
        }=resdata?.info;
        const{deliveryTime}=resdata?.info.sla;
    return (
        <div className="res-card m-5 p-4 w-[255px] h-[400px] rounded-lg  bg-green-200 hover:bg-green-300">
            <img
                className="res-logo h-[175px] w-[230px] rounded-lg"
                alt="res-logo"
                src={CDN_URL +
                    cloudinaryImageId}>

            </img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="cuisines break-words">{cuisines.join(",")}</h4>
            
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
            <h4>{avgRating} stars⭐</h4>
             
        </div>
    );
};
export default RestaurantCard;