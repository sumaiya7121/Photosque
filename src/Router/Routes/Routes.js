import { createBrowserRouter } from "react-router-dom";
import AddService from "../../AddService/AddService";
import AllServices from "../../AllServices/AllServices";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import Register from "../../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        },
        {
        path:'/services/:id',
      
        element:<ServiceDetails></ServiceDetails> ,
        loader: ({params}) =>
         
        fetch (`https://photosque-server.vercel.app/services/${params.id}`)
        
        },
        {
            path:'/myreviews',
            element:<PrivateRoute><MyReviews/></PrivateRoute>
        },
        {
            path:'/allservices',
            element:<AllServices></AllServices>,
            loader:()=>{
         return fetch ("https://photosque-server.vercel.app/services")
            }
        },
        {
            path:'/addservice',
            element:<PrivateRoute><AddService/></PrivateRoute>
         },


        


    ]
    
  }
])

export default router;