import React,{ lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";

// Lazy Loading
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () =>{
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />,
            },
            {
                path : "/about",
                element : <About />,
            },
            ,{
                path : "/contact",
                element : <Contact />,
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path : "/restaurent/:resId",
                element : <RestaurentMenu />
            },
        ],
        errorElement : <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)