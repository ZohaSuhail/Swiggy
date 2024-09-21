
import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../common/useOnlineStatus";
import UserContext from "../common/UserContext";

const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilterdRestaurant] = useState([]);
    const [searchtext, setsearchtext] = useState("");

    //console.log("Body Rendered",listOfRestaurant);
    useEffect(() => {
        fetchdata();
    }, []);


    const fetchdata = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3330529&lng=83.0069298&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
            headers:{
                 'Access-Control-Allow-Origin':'*'
            }
        );
        const json = await data.json();
        //console.log(json);
        setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterdRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus == false)
        return (
            <div>
                <h1>
                    Looks like you're offline!! Please check your internet connection;
                </h1>
            </div>

        );


    const { LoggedInUser,setUserName } = useContext(UserContext);

    return listOfRestaurant.length === 0 ?
        (<Shimmer />) :
        (
            <div className="body bg-green-100">
                <div className="filter flex">
                    <div className="search m-4 p-4 flex items-center">
                        <input type="text" className="border-2 border-solid border-black px-3 py-1.5" value={searchtext}
                            onChange={(e) => {
                                setsearchtext(e.target.value);
                            }} />
                        <button className="px-4 py-2 m-4 bg-green-200 rounded-md"
                            onClick={() => {

                                const filteredRestaurant = listOfRestaurant.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                                );
                                setfilterdRestaurant(filteredRestaurant);
                            }}
                        >
                            Search
                        </button>
                    </div>
                    <div className="m-4 p-4 flex items-center">

                        <button className=" filter-btn px-4 py-2 m-4 bg-green-200 rounded-md"
                            onClick={() => {
                                const filteredList = listOfRestaurant.filter(
                                    (res) => res.info.avgRating > 4
                                );
                                setlistOfRestaurant(filteredList);
                                //console.log(filteredList);
                            }}>
                            Top Rated Restaurants
                        </button>


                    </div>
                    

                </div>

                <div className="res-container flex flex-wrap">
                    {
                        filteredRestaurant.map((restaurant) => (
                            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                <RestaurantCard resdata={restaurant} />
                            </Link>
                        ))
                    }


                </div>


            </div>
        );

};

export default Body;
