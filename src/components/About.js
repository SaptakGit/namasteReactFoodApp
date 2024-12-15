import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

/*const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React About</h2>
            <UserClass name="Saptak (class)" location="Dehradun class"/>
        </div>
    );
};*/

class About extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return (
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React About</h2>
                <UserClass name={"First"} location={"Dehradun class"} />
            </div>
        )
    }
}

export default About;