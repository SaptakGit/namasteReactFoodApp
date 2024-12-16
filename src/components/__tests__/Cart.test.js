import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react";
import Header from "../Header";
import RestaurentMenu from "../RestaurentMenu";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

it("Should Load restaurent menu component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurentMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ));

    const accordianHeader = screen.getByText("Biryani");

    fireEvent.click(accordianHeader);

    const foodItems =screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(2);

    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", {name:"Add +"});

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(4); // to form menu two from cart


    fireEvent.click(screen.getByRole("button", { name: "Clear Cart"})).toBe(2);

    expect(
        screen.getByText("Your Cart is Empty. Add items to the Cart.")
    ).toBeInTheDocument();
});