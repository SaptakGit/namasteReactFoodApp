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

                this.setState({
                    count: this.state.count + 1,
                })

            }}>Count Increase</button>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: @Saptak</h2>
            </div>
        );
    }
}

export default UserClass;