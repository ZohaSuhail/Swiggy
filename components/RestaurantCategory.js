import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data,showItem,setshowIndex }) => {
    
    const handleClick = () => {
        setshowIndex();
    };
    return (
        <div>
            <div className="w-8/12 mx-auto  my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between  cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title}</span>
                    <span>  🔻 </span>
                </div>

                {showItem && <ItemList items={data.itemCards} />}
            </div>
        </div>


    );
};
export default RestaurantCategory;