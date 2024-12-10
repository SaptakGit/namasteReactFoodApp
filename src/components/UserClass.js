import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        
        this.state = {
            count: 0,
            count2: 1,
        }
    }
    render() {
        const {name, location} = this.props;
        const {count} = this.state;

        return ( <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={() => {
                // We will never update oue state variable directly by putting a = sign.
                // WRONG -> this.state.count = this.state.count + 1

                //React gives us a function called setState() to update the state variable. we can use it any where inside the class.

                this.setState({
                    count: this.state.count + 1,
                })

                // If there are multiple state variable declared, React will only look for the variable that are passed from the setState and updates only those variables. It will not touch other variables.
            }}>Count Increase</button>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: @Saptak</h2>
            </div>
        );
    }
}

export default UserClass;