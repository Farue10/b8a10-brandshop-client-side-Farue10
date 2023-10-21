
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home";
import Product from "../Components/Product";
import Products from "../Components/Products";
import Details from "../Components/Details";
import Cart from "../Components/Cart";
import Update from "../Components/Update";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";
import Errorpage from "../Components/Errorpage";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/data.json')  
        },
        {
            path:'/product',
            element:<Product></Product>,
        },

        {
            path: '/products/:brand',
            element: <Products></Products>,
            loader: ({ params }) => fetch(`https://assignment-10-server-xi-three.vercel.app/user/${params.brand}`)
        },
        {
            path: '/userSingle/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader: ({ params }) => fetch(`https://assignment-10-server-xi-three.vercel.app/userSingle/${params.id}`)
           
        },
        {
            path:'/cart',
            element:<Cart></Cart>,
            // loader:({params})=>fetch(`http://localhost:5000/deatils/${params.}`)
        },
        {
            path:'/update/:id',
            element:<PrivateRoute><Update></Update></PrivateRoute>,
            loader:({params})=>fetch(`https://assignment-10-server-xi-three.vercel.app/update/${params.id}`)
        },
        {
            path:'/login',
            element:<Login> </Login>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        }

      ]
    },
  ]);
    


export default router;