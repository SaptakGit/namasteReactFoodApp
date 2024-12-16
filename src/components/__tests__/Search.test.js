// Integration Testing

import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should Search Res List fro Biryani text Input", async () => {
    
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(7);

    const searchBtn = screen.getByRole("Button", {name:"Search"});
    //console.log(searchBtn);

    const searchInput = screen.getByTestId("searchInput");
    //console.log(searchInput);

    fireEvent.change(searchInput, { target: {value: "biryani"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    //expect(searchBtn).toBeInTheDocument();

    expect(cardsAfterSearch.length).toBe(3);

});


it("Should Filter Toop Rated Restaurent", async () => {
    
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        )
    );

    const cardsBeforeFilter =screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(7);

    const toRatedBtn = screen.getByRole("button", {name:"Top Rated Restaurents"});

    fireEvent.click(toRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(3); 
});

