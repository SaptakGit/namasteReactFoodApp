import React from "react";

class UserClass extends React.Component{
    // The class based component is a class that extends the React.Component and it has a render method that return some piece of JSX.
    // render method will return some piece of JSX
    render() {
        return ( <div className="user-card">
            <h2>Name: Saptak</h2>
            <h2>Location: Dehradun</h2>
            <h2>Contact: @Saptak</h2>
            </div>
        );
    }
}