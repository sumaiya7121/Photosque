import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";
import Register from "../../Register/Register";

const router =createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/blogs',
            element:<Blog></Blog>
        },
        {
            path:'/services',
        element: <Services></Services>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }


    ]
    
  }
])

export default router;