import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/Main.js';
import Footer from './pages/footer/footer.js'
import Contacts from './pages/contacts/contacts.js';
import Portfolio from './pages/portfolio/portfolio.js';
import Gallery from './pages/gallery/gallery.js';
import Header from './pages/header/header.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './pages/services/services.js'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/*",
    element: <Portfolio />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/*",
    element: <Gallery />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/*",
    element: <Services />,
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

