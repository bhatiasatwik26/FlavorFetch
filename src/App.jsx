import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import About_Class from "./components/About_Class";
import Restauraunt_menu from "./components/Restaurant_menu";
import { createBrowserRouter , RouterProvider, Outlet  } from "react-router-dom";
import ToggleSlider from "./components/ToggleSlider";

// App Layout
const AppLayout = () =>
    (
        <div className="app">
            <Header/>
            {/* if path == / ---> body chahiye */}
            {/* if path == /about ---> about chahiye */}
            {/* if path == /resto ---> restro chahiye */}
            <Outlet/>
        </div>
    )
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
                element: <About_Class location ={'Doonite'}/>
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
