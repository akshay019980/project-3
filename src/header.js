import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
 return(
    <>
    <nav className="navbar navbar-expand-lg bg-light navbar-active fixed-top  ">
  <div className="container-fluid ">
    <a className="navbar-brand text-danger col-lg-5">
    <div className="ms-5">
    <i className="fa fa-globe text-primary"></i> <b>WebWorld.co.in</b>
     
    </div>
    </a>
    
    
    
    <div className="collapse navbar-collapse " >
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-dark me-5 " ><i className="fa fa-home text-primary"></i> Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link active text-dark  me-5 "><i className="fa fa-cart-shopping text-primary"></i> Cart</Link>
        </li>
        <li className="nav-item">
          <Link  to="/login" className="nav-link active text-dark me-5  "><i className="fa fa-user text-primary"></i> Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link active text-dark me-5 "><i className="fa fa-user-plus text-primary"></i> Signup</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active text-dark me-5 "><i className="fa fa-address-card text-primary"></i> Contact</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </>
 )

}
export default Header;