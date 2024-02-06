import Landing from "../pages/Landing";
import Main from "../pages/Main";
import { RouteObject, createBrowserRouter } from "react-router-dom";


const routes: RouteObject[] = [
    {
        path:'/',
        element:<Landing/>,
    },
    {
        path:'/main',
        element: <Main/>
    }
];

export default createBrowserRouter(routes);