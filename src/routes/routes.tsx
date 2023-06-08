
import React from "react";
import {
    createBrowserRouter
  } from "react-router-dom";

import { MainLayout } from '../views/layouts/mainLayout';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
      },
      
    ],
  },
  
]);

export default router;