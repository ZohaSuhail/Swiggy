import { fireEvent, render ,screen} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../common/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test ("Should load Header Component with a login button",() =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    
    );
    const login =screen.getByRole("button");

    expect(login).toBeInTheDocument();

});

test ("Should load Header Component with a Cart item",() =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    
    );
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();

});

test ("Should change Login button to Logout button on click",() =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    
    );
    const login =screen.getByRole("button");

    fireEvent.click(login);

    const logout = screen.getByRole("button");
    expect(logout).toBeInTheDocument();

});