import { LOGO_URL } from "../utils/constants";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should render Header Component with a Login Button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore} >
            <Header />
        </Provider>
        </BrowserRouter>
    );


    const loginButton = screen.getByRole("button");
    // For Specific login button
    // const loginButton = screen.getByRole("button", {name:"Login"});
    //const loginButton = screen.getByText("Login");
    

    expect(loginButton).toBeInTheDocument(); 
});

it("Should render Header Component with a Login Button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore} >
            <Header />
        </Provider>
        </BrowserRouter>
    );


    const cartItems = screen.getByText("Cart - (0 items)");
    

    expect(cartItems).toBeInTheDocument(); 
});

it("Should render Header Component with a Login Button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore} >
            <Header />
        </Provider>
        </BrowserRouter>
    );


    const cartItems = screen.getByText("/Cart/");
    

    expect(cartItems).toBeInTheDocument(); 
});

it("Should Login button to Logout on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore} >
            <Header />
        </Provider>
        </BrowserRouter>
    );


    const cartItems = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getAllByRole("button", {name:"Logout"});

    expect(logoutButton).toBeInTheDocument(); 
});