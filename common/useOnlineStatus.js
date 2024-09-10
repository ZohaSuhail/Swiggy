import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    const [onlineStatus, setonlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setonlineStatus(false);
        });
        window.addEventListener("online", () => {
            setonlineStatus(true);
        });
    }, []);
    console.log("success");
    return onlineStatus;

};
export default useOnlineStatus;