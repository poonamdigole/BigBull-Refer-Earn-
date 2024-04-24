import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import SignUp from './views/SignUp/SignUp';
// import Login from './views/Login/Login'
// import Plans from './views/Plans/Plans'
import Contact from './views/Contact/Contact';
// import Home from './views/Home/Home'
// import About from './views/About/About'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Home/>
  // },
  // {
  //   path: '/about',
  //   element: <About />
  // },
  // {
  //   path: '/login',
  //   element: <Login />
  // },
  // {
  //   path: '/plans',
  //   element: <Plans/>
  // },

  {
    path: '/signup',
    element: <SignUp />
  },
 
  {
    path:"/contact",
    element:<Contact/>
  }
])

root.render(<RouterProvider router={router} />);



