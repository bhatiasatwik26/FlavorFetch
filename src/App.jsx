import React , {lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Restauraunt_menu from "./components/Restaurant_menu";
import { createBrowserRouter , RouterProvider, Outlet  } from "react-router-dom";

// Lazy loading About Component
const About = lazy( ()=>import("./components/About"));

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
