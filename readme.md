Food Ordering App
/*
* Header
*  - Logo
*  - Nav Items
* Body
*  - Search
*  - RestaurantContained
*    - RestaurentCard
*       - Img
*       - Name of Restaurent, Star Rating, Cousine, delhiveery time etc
* Footer
*  - Copyright
*  - Links
*  - Address
*  - Contact
*/


npm init <br>
npm install -D parcel<br>
npm install react<br>
npm install react-dom<br>

props : are just normal arguments to a function. Passing a prop to a component is just like passing an argument to a function.React takes this props and wrap it into an object and pass it to the component.

https://www.swiggy.com/dapi/restaurants/list/v5?lat=129351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING

config-driven UI: UI changes uopn change in data. Controlling th UI using data/config that comes from backend.

whenever we use Map(), we need to pass a unique key.

array.join(",") = print the array elements with comma separated.

? => optional chaining

Separate file separate component.

Two types of Exports:
    Named Export:
        export const Component;
        import {Component} from "path";
    Default Export
        export default Component;
        import Component from "path";

React Hook is a normal javascript utility function which is given to us by React. The only thing is that the function has some logic behind it.
 - useState() - Superpowerfull State Variables.
 - useEffect()

Whenever a state variable update React re-rander the component.


Reconciliation Algorithm(React Fiber):
    Whenever there is change in UI it is known as Reconciliation.
    In React 16 a new algorithm (React Fiber) is come to update the DOM.
     
    Virtual DOM : Representation of an actual DOM. It is besically the React Elements,the object which is given by React by createElement.

    Diff Algorithm: It find out the differance between two virtual DOM(Old Virtual DOM and updated virtual DOM) and update the DOM.

    Incremental Rendering: The ability to split the rendering work in different chunks over multiple frames.

    React is fast because it is doing Efficient DOM manupulation.


Monolith & Microservice Architecture
    Monolith Architecture :
        A single big project where all of its code are written in a single languaue.It has UI, Backend, DB, Notification all in one.For a small change it has to compile the whole project.

    Microservice Architecture:
        It has all its services separated.This is known as Serparation of Concerns.It has Single Responsibility Principle, where each and every service has its own job and nobody is interfearing to other.Each service is deployed in different ports and they talk to each other with APIs.


There are two approaches on How the UI data fetach from baeckend.
    1.As soon as our page load we can make a call to the API and when we get the data we can render the UI.

    2. As soon as the page load we will render the UI after that we will make as API call and as soon as we get data from the API we will re-render the API with new data.
