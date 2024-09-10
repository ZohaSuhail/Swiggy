import { useDispatch } from "react-redux";
import { CDN_URL } from "../common/constants.js";
import { addItem } from "../common/cartSlice.js";

const ItemList = ({ items }) => {
    const safeItems = Array.isArray(items) ? items : [];
    //console.log(safeItems);
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };
    return (
        <div>
            {safeItems.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2  border-grey-200 border-b-2 text-left flex justify-between">


                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div>
                        <div className="absolute my-[104px]">
                            <button className="w-24 p-2 ml-6 bg-black text-white shadow-lg rounded-lg"
                                onClick={()=>handleAddItem(item)}>ADD + </button>
                        </div>
                        <img className="w-36 h-32 mb-4 rounded-md"
                            src={CDN_URL + item.card.info.imageId} ></img>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ItemList;