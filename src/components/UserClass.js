import React from "react";

class UserClass extends React.Component{
    // The class based component is a class that extends the React.Component and it has a render method that return some piece of JSX.

    // In Class based Components, to get the props we have to write a constructor. Inside the constructor we have to use the key-word super to access the props.
    constructor(props){
        // Whenever the class in created this constuctor is called now we can use this props anywhere in the class.

        super(props);
        console.log(props);

        // When a class instance is created the State is created.When a class instance is created first the constructor is created. So it is the best place to receive props,creating State. There is no hooks in class based components. We use this.state to create state variable.

        //this state is basically an object which contain all the state variables.
        this.state = {
            count: 0,
            count2: 1,
        }
    }

    // render method will return some piece of JSX
    render() {
        const {name, location} = this.props;
        const {count,count2} = this.state;

        return ( <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: @Saptak</h2>
            </div>
        );
    }
}

export default UserClass;