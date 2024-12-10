import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React About</h2>
            <User name="Saptak (functional)"/>

            <UserClass name="Saptak (class)" location="Dehradun class"/>
        </div>
    );
};

export default About;