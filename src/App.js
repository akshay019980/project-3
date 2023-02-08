import React from "react";
import { HashRouter,Route,Routes } from "react-router-dom";
import Home from "./home";
import ControlledCarousel from "./image";
import Section from "./header";
import Cart from "./cart";
import Contact from "./contact";
import Login from "./login";
import Signup from "./signup";

function App() {
  return (
    <HashRouter>
      <Routes>
    
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/image" element={<ControlledCarousel/>}/>
        <Route exact path="/section" element={<Section/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="contact" element={<Contact/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
 
      </Routes>
    </HashRouter>
    
  );
}

export default App;
