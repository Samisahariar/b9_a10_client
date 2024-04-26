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
        element: <AllArtAndCraft></AllArtAndCraft>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/myartcraft",
        element: <My_Art_Craft_List></My_Art_Craft_List>
      },
      {
        path: "/addcraftitem",
        element: <Add_Craft_Item></Add_Craft_Item>
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
