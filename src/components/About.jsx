import { useEffect } from "react";
import { useContext } from "react";
import PathContext from "../utils/PathContext";

const About = () => {

    const PathObj = useContext(PathContext);
    PathObj.setPath('/about')

    return (
        <div className="flex flex-col items-center justify-center h-calc-100vh-minus-80px gap-2 -mt-20">
                <h2 className="text-5xl"> Hey Foodie !</h2>
                <h2 className="text-3xl font-light">Confused about What to order?</h2>
                <h4 className="text-3xl -mt-2 font-light">Dont worry, we got you😉</h4>
                <div className="mt-1">
                    <p className="text-xl font-light">➡️List of 25+ handpicked , top rated restaurants for you to choose from</p>
                    <p className="text-xl font-light">➡️Additional filters to further filter out top rated takeaway centres</p>
                    <p className="text-xl font-light">➡️Search your favourite restaurant by name if it gets a place in our list👀</p>
                </div>
            </div>
        )
}
export  default About;