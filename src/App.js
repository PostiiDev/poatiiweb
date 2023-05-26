import * as React from "react";
// import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import './App.scss';

import Login from './pages/login/Login'
import AddService from './pages/addService/AddService'
import AllOffres from './pages/AllOffres/AllOffres'
import Home from './pages/home/Home'
import MyMessages from './pages/messages/MyMessages'
import MyPropositions from './pages/myOrders/MyPropositions'
import OneOffre from './pages/oneOffre/OneOffre'
import NavBar from './component/navbar/NavBar';
import Footer from './component/footer/Footer';
import Aboutus from './pages/aboutus/AboutUs';
import MyServices from './pages/myServices/MyServices'
import AllCat from "./pages/allcat/AllCat";
import RegisterE from "./pages/register2/RegisterE";
import UpdateOffre from "./pages/addService/UpdateService";
import PrivateRoute from './utils/PrivateRoute'
import AllPorpositions from "./component/allPropositons/AllPropositions";

// import { QueryClient,
//    QueryClientProvider } from 'react-query';



function App() {
  const queryClient = new QueryClient();

  const Layout = () =>{
    return (
      <div className="app">
      <QueryClientProvider client={queryClient}>
      <NavBar />
      <Outlet />
      <Footer />
      </QueryClientProvider>
      </div>
    )
  }

const router = createBrowserRouter([
  {
  
    path: "/",
    element: <Layout />,
    
    children: [
      {
       path:"/",
       element:<Home />
      },
      {
        path:"/registerE",
        element:<RegisterE />
      },
      {
       path:"/login",
       element:<Login />
      },{
      path:"/myoffres/:id",
      element: <PrivateRoute><MyServices /></PrivateRoute>
    },
    {
      path:"/addoffre/:id",
      element: <PrivateRoute><AddService /></PrivateRoute>
    },
    {
      path:"/propositions/:id",
      element: <PrivateRoute><MyPropositions /></PrivateRoute>
    },
    {
    path:"/propositions/received/:id" ,
    element:<AllPorpositions />
    },
      {
        path:"/oneoffre/:id",
        element:<OneOffre />
      },
       {
        path:"/editOffre/:id",
        element:<PrivateRoute><UpdateOffre /></PrivateRoute>
       },
       {
        path:"/mymessages",
        element:<PrivateRoute><MyMessages /></PrivateRoute>
       },
       {
        path:"/alloffres",
        element:<PrivateRoute><AllOffres /></PrivateRoute>
       },
       {
        path:"/about",
        element:<Aboutus />
       },
        {
          path:"/allcat",
          element:<PrivateRoute><AllCat /></PrivateRoute>
          },
    ],
  },
]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
