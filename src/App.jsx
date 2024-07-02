import React , {lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Restauraunt_menu from "./components/Restaurant_menu";
import { createBrowserRouter , RouterProvider, Outlet  } from "react-router-dom";
import UserContext from "./utils/UserContext";

// Lazy loading About Component
const About = lazy( ()=>{
    let obj = import("./components/About"); // import returns a promise , which is returned by lazy function
    return obj;
});

// App Layout
const AppLayout = () =>{

    const [user , setUser] = useState('Placeholder');

    useEffect(()=>{
        const data = {
            name : "Akshay",
        }
        setUser(data.name)
    }, [])

    return (
        <UserContext.Provider value={{ loggedInUser : user }}>
            <div className="app">
                <Header/>
                {/* if path == / ---> body chahiye */}
                {/* if path == /about ---> about chahiye */}
                {/* if path == /resto ---> restro chahiye */}
                <Outlet/>
            </div>
        </UserContext.Provider>
    )
}
const appRouter = createBrowserRouter([ // configuration of our router
    { // array of objects -> each object defines what happens on a specific path
        path: '/',
        element: <AppLayout/>,
        children:[
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <Suspense fallback = {<h1>Aara hai..</h1>}> <About/> </Suspense>
            },
            {
                path: '/restaurants/:resId' , // : signifies this part of path is dynamic(can change)
                element: <Restauraunt_menu/>
            }
        ]
    },
]);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter}/>);
