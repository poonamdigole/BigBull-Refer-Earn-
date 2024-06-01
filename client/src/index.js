import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
//import SignUp from './views/SignUp/SignUp';
import Login from './views/Login/Login'
import Plans from './views/Plans/Plans'
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home'
import About from './views/About/About'
import reportWebVitals from './reportWebVitals';
import Dashboard from './views/Dashboard/Dashboard';
import Admin from './views/Admin/Admin';
import TermsAndConditions from './views/Privacy/Tercondi';
import PrivacyPolicy from './views/Privacy/Privacy';
//import Contact from './views/Contact/Contact'


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/plans',
    element: <Plans/>
  },

  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/admin",
    element:<Admin/>
  },
  {
    path:"/terms&conditions",
    element:<TermsAndConditions/>
  }, {
    path:"/privacy",
    element:<PrivacyPolicy/>
  }
])

root.render(<RouterProvider router={router}/>)
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();