import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);
        
        this.state = {
            userInfo:{
                name:"Dummy Name",
                location: "Default",
                avatar_url: "https://picsum.photos/id/237/200/300"
            }
         }
    }

    async componentDidMount(){
        // API Call
        const data = await fetch("https://api.github.com/users/SaptakGit");
        const json = await data.json();

        //console.log(json);

        this.setState({
            userInfo:json,
        });
    }

    componentDidUpdate(){
        console.log('Component Did Update');
    }

    componentWillUnmount(){
        console.log('Component Will Unmount');
    }

    render() {
        const {login, location, avatar_url} = this.state.userInfo;
    
        return ( <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {login}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: @Saptak</h2>
            </div>
        );
    }
}

export default UserClass;


/*
---- MOUNTING -----
contructor(dummy data) called
render(dummy data) called
    <HTML dummy data>
Component Did Mount
    <API Call>
    <this.setState> -> State Variable is updated

-----UPDATEUPDATE CYCLE------
    render(API Data)
    <HTML (new API Data)>
Component Did Update
Component Will Unmount -> called just befor going to new page.
*/