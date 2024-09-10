import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "../components/Header.js";
import Body from "../components/Body.js";
//import Grocery from "../components/Grocery.js";
import About from "../components/About.js";
import Contact from "../components/Contact.js";
import Error from "../components/Error.js";
import RestaurantMenu from "../components/RestaurantMenu.js";
import UserContext from "../common/UserContext.js";
import { Provider } from "react-redux";
import appStore from "../common/appStore.js";
import Cart from "../components/Cart.js";

//const Grocery = lazy(() => import("../components/Grocery.js"));

const AppLayout = () => {
    const [userName, setuserName] = useState();

    useEffect(() => {
        const data = {
            name: "Zoha Suhail"
        };
        setuserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ LoggedInUser: userName, setuserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            

            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },

        ],
        errorElement: <Error />,
    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);