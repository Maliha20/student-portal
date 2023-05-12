import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './Pages/MyRegistration/Registration.jsx';
import Account from './Pages/MyAccount/Account.jsx';
import Reports from './Pages/MyReports/REports.jsx';
import RoadMap from './Pages/MyRoadMap/RoadMap.jsx';
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/SignUp/Signup.jsx';
import Home from './Pages/Home/Home.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import LoginLayout from './Pages/Layout/LoginLayout.jsx';
import Main from './Pages/Layout/Main';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
     path: '/',
     element:<LoginLayout></LoginLayout>,
     children: [
      {
        path: '/',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element:<Signup></Signup>
      }
     ]
  },
  {
    path:'/home',
    element:<PrivateRoute><Main></Main></PrivateRoute>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      },
      {
        path: 'account',
        element: <Account></Account>
      },
      {
        path: 'report',
        element: <Reports></Reports>
      },
      {
        path: 'roadmap',
        element: <RoadMap></RoadMap>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
