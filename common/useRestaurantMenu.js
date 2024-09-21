import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const[resInfo , setresInfo]=useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);


    const fetchMenu = async () => {
       const data=await fetch(`https://swiggy-self.vercel.app/restaurants/${resId}`);
       const json=await data.json();
       setresInfo(json.data);
    };
    return resInfo;

};
export default useRestaurantMenu;
