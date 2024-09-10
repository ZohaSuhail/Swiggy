//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3330529&lng=83.0069298&restaurantId=541866
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../common/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";


const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setshowIndex] = useState(null);

    if (resInfo === null) {
        return <Shimmer />;
    };

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;

    const { carousel, itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
                c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    //console.log(categories);

    return (
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")}-{costForTwoMessage}
            </p>
            {categories.map((category, index) => (
                //controlled components
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItem={index === showIndex ? true : false}
                    setshowIndex={() => setshowIndex(index)} />
            ))}


        </div>
    );
};
export default RestaurantMenu;