import React from "react";
import Section from "./header";



const Signup=()=>{
    return(
        <>
        <Section/>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="card mt-5">
                        <div className="card-header text-white bg-danger text-center">
                         <h5> <i className="fa fa-plus"></i> sign-Up</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
        </>
        
    )


}
export default Signup;