import { createContext } from "react";

const PathContext = createContext({
    pathValue:'/',
    pathSetter:null
})
export default PathContext;