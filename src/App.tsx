import React from "react";
import {
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom";
import router from './routes/routes';
import './index.css';




const App = () => {
  
  return(
  <div className="MainContainer">
      <RouterProvider
      router={router}
      />
  </div>
 
 
)
}

export default App;

