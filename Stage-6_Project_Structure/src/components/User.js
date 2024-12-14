import { useState } from "react";

const User = ({name}) => {
    //const {name} = props;
    const [count] = useState(0);
    const [count2] = useState(1);

    return ( <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: Dehradun</h2>
            <h2>Contact: @Saptak</h2>
    </div>
    );
};


export default User;