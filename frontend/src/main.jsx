import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';
import StudentProfile from './pages/StudentProfile.jsx';
import AskDoubt from './pages/AskDoubt.jsx';
import EditInfo from './pages/EditInfo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/login',
    element:<Login />
  }, 
  {
    path:'/signup',
    element:<Signup />
  },
  {
    path:'/profile',
    element:<Profile />
  },
  {
    path:'/studentprofile',
    element:<StudentProfile />
  },
  {
    path:'/askdoubt',
    element:<AskDoubt />
  },
  {
    path:'/editInfo',
    element:<EditInfo />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
