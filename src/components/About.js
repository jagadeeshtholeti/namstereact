import { Outlet } from "react-router";

const About = ()=>{
    return(
        <div>
            <h1>about us</h1>
            <Outlet/>
        </div>
    )
}

export default About;