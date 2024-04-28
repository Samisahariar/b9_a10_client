import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import AllArtAndCraft from './components/allartandcraftitem/AllArtAndCraft.jsx';
import Login from './components/login-page/Login.jsx';
import My_Art_Craft_List from './components/myartandcraftlist/My_Art_Craft_List.jsx';
import Add_Craft_Item from './components/addcraftitem/Add_Craft_Item.jsx';
import AuthContextData from './components/authcontextdata/AuthContextData.jsx';
import Register from './components/register/Register.jsx';
import Private from './components/private/Private.jsx';
import CardDetails from './components/cardDetails/CardDetails.jsx';
import UpDatePage from './components/updatepage/UpDatePage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allartandcraft",
        element: <AllArtAndCraft></AllArtAndCraft>,
        loader: () => fetch("http://localhost:5000/alldata")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/myartcraft/:email",
        element: <Private><My_Art_Craft_List></My_Art_Craft_List></Private>,
        loader: ({params}) => params.email
      },
      {
        path: "/addcraftitem",
        element: <Add_Craft_Item></Add_Craft_Item>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/carddetails/:id",
        element: <Private><CardDetails></CardDetails></Private>,
        loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`)
      },
      {
        path: "/updatepage/:id",
        element: <UpDatePage></UpDatePage>,
        loader: ({params}) => params.id
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextData>
      <RouterProvider router={router} />
    </AuthContextData>
  </React.StrictMode>,
)
