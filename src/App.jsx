import React , {lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Restauraunt_menu from "./components/Restaurant_menu";
import { createBrowserRouter , RouterProvider, Outlet  } from "react-router-dom";
import PathContext from "./utils/PathContext";
import { Provider, useDispatch } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart"
import { setLat, setLong } from "./utils/LocationSlice";
// Lazy loading About Component
const About = lazy( ()=>{
    let obj = import("./components/About"); // import returns a promise , which is returned by lazy function
    return obj;
});


const AppLayout = () =>{

    const dispatch = useDispatch();

    const [path , setPath] = useState('/')

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition( (position) => {
              dispatch(setLat(position.coords.latitude));
              dispatch(setLong(position.coords.longitude));
              console.log(position.coords.latitude);
              console.log(position.coords.longitude);
          },
        );
    };

    // const [user , setUser] = useState('Placeholder');
    
     useEffect(()=>{
        getLocation();
    } , []);


    return (
        <>
            <PathContext.Provider value={{pathValue : path , "setPath" : setPath}}>
                <div className="app">
                    <Header/>
                    {/* if path == / ---> body chahiye */}
                    {/* if path == /about ---> about chahiye */}
                    {/* if path == /resto ---> restro chahiye */}
                    <Outlet/>
                </div>
            </PathContext.Provider>
        </>
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
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            }
        ]
    },
]);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <Provider store={AppStore}>
        <RouterProvider router={appRouter}/>
    </Provider>
);
