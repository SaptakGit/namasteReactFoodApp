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

Whenever a State Variable update React re-rander the component.


Reconciliation Algorithm(React Fiber):
    Whenever there is change in UI it is known as Reconciliation.
    In React 16 a new algorithm (React Fiber) is come to update the DOM. It uses Diff Algorithm to compare the OLD and NEW Virtual DOM and updates only that portion of the DOM which has been changed or updated.
     
    Virtual DOM : Representation of an actual DOM. It is besically the React Elements,the object which is given by React by createElement.

    Diff Algorithm: It find out the differance between two virtual DOM(Old Virtual DOM and updated virtual DOM) and updates only that portion of the DOM which has been changed or updated.

    Incremental Rendering: The ability to split the rendering work in different chunks over multiple frames.

    React is fast because it is doing Efficient DOM manupulation.


Monolith & Microservice Architecture
    Monolith Architecture :
        A single big project where all of its code are written in a single languaue.It has UI, Backend, DB, Notification all in one.For a small change it has to compile the whole project.

    Microservice Architecture:
        It has all its services separated.This is known as Serparation of Concerns.It has Single Responsibility Principle, where each and every service has its own job and nobody is interfearing to other.Each service is deployed in different ports and they talk to each other with APIs.


There are two approaches on How the UI data fetach from baeckend.
    1.As soon as our page load we can make a call to the API and when we get the data we can render the UI.
    Loads --> API --> Render 

    2. As soon as the page load we will render the UI after that we will make as API call and as soon as we get data from the API we will re-render the API with new data.
    Loads --> Render --> API --> Re-Render 

useState hook:
    It is used for creating local State Variable inside th component. Never call useState out side of the component. Always create it at top. Never create it inside if-else condition/for loop/function.

useEffect hook: 
    It comes with two arguments
    1. callback function
    2. dependency array (not mandetory)
    it is called every time after the component is rendered. But because of the dependancy arry the behaviour of the render will changed. 
    a) If no dependancy arry => useEffect is called on every render.
    b) If the dependancy array is empty = [] => useEffect is called on initial render just once.
    c) If the dependancy array is not empty => useEffect is called on everytime whenever the array is updated.

    If we have to do something after rendering we have to write it inside useEffect.

fetch() is browser function given by javascript.

Allow CORS: Access-Control-Allow-Origin: Chrome extention

Shimmer UI

conditional rendering: if we have an condition and render on besis of that condition then it is called as conditional rendeting.

Why dowe need State veriable: 
    Suppose we want to change the name of a button from Login to Logout whenever we click it. If we use a normal JS let veriable with a callback function, the variable will get changed but the UI will not rendered. That why we use local State variable.So that he UI gets changed whenever we update the veriable. 

React Router Dom:
    npm install react-router-dom@6

    Two types of routing in web-app
    1. Clicnt side routing -> did not make any network calls and do not load the hole page
    2. Server side routing -> make network calls and reloads the whole page

Link is a wraper over anchor tag.


Class based Components:
    Older ways to to create components.

    The class based component is a class that extends the React.Component and it has a render method that return some piece of JSX.

    In Class based Components, to get the props we have to write a constructor. Inside the constructor we have to use the key-word super to access the props.

    Why dowe write super propos ? H.W

    Whenever the class in created this constuctor is called now we can use this props anywhere in the class.

    When a class instance is created the State is created.When a class instance is created first the constructor is called. So it is the best place to receive props,creating State. There is no hooks in class based components. We use this.state to create state variable.

    The state is basically an object which contain all the state variables.

    We will never update oue state variable directly by putting a = sign. ****** WRONG -> this.state.count = this.state.count + 1 ******

    React gives us a function called setState() to update the state variable. we can use it any where inside the class.

    If there are multiple state variable declared, React will only look for the variable that are passed from the setState and updates only those variables. It will not touch other variables.


    Life Cycle of Class Based Component:
        When a Class Based Component is called First the constructor is called, then the render.
        If the parent is also a Class Beased Component then the calling be like...
        1st - Parent Constructor
        2nd - Parent Render
        3rd -- Child Constructor
        4th -- Child Render

        It has another Important method given by React called componentDidMount(). It is called after the Render, when the component is alredy mounted on the web page.If the parent also have componentDidMount(), then the calling will be like...
        1st - Parent Constructor
        2nd - Parent Render
        3rd -- Child Constructor
        4th -- Child Render
        5th -- Child componentDidMount
        6th - Parent componentDidMount
        So besically when the child Life Cycle is completed completly then the Parent componentDidMount will be called.

        If it has multiple childern then the call will be like...
        1st - Parent Constructor
        2nd - Parent Render
        3rd -- 1st Child Constructor
        5th -- 1st Child Render
        6rd -- 2nd Child Constructor
        7th -- 2nd Child Render
        8th -- 1st Child componentDidMount
        8th -- 2nd Child componentDidMount
        9th - Parent componentDidMount
        **** React Life Cycle Diagram*** https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


        This happens because as shown in the above diagram React has two phase, “Render phase” and “Commit phase”. In “Render phase” the constructor id called and render happen, and in “Commit phase” React updates the DOM and componentDidMount happen.So when React sees there are multiple children it optimize and batch-up the “Render phase” with all constructor and render. Then it moves to the  “Commit phase” with updateing the DOM and componentDidMount.


        componentDidMount() : 
            It is use to make API call.
            In Funcetion Based Components we use useEffect to call an API with a blank dependancy array so that it calls the API only once and it work in 
            "Loads --> Render --> API --> Re-Render" this model. Similarly here also we call the API inside the componentDidMount() method so that first it renders the besic detail, calls the API and re-render and follow the "Loads --> Render --> API --> Re-Render" process.

        componentDidUpdate():
            It calls after each update of the component.

        componentWillUnmount():
            It calls when we leave the page. It is use to clear function and calls when we leave the page or change the component otherwise the component will run in background forever.

            same thig happen in useEffect also. If we create a function like setInterval() it will continiouly run behind even if we change the componet.change the page. To handle this we use 
            retun () => {
                console.log('will call while leave page')
            }
            and write our clearing code inside it.

    why super in class component use ? 
    why async componentDidMount done ?
    wht async useEffect() --> ERROR ?

    Render method will return some piece of JSX.

Single Responsibility Principle:
    Single component must do single task.Big module must break into small modules.Easy to bug fix.Code become Reuseable,Maintainable,Testable.

Custom Hooks: Makes uor app more Reuseable,Maintainable,Testable.

App Chunking:
    Break down our app into smaller pieces instead of one large js file that parcel does while it bundle-up our app.
    We need to break it into smaller bundle.This process is known as Chunking/Code Spliting/Dynamic Bundling/Lazy Loading/On Demand Loading/Dynamic Import.

    For that we will not call our component directly, we will call that using lazy loading. Actually by this initially the component code will not be called. It will call it only when we go to that component.
    We use <Suspense> with Lazy Loading, it holds React while thecomponent is being lazy loaded. otherwise React will throw an Error.