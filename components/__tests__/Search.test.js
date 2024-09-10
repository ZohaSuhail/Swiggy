import { render,screen } from "@testing-library/react";

import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});
it("Should render the body Component with Search",  () => {
     render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    );
   

});