import React from "react";
import Section from "./header";

const Login=()=>{
    return(
        <>
        <Section/>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="card mt-5">
                        <div className="card-header text-center text-white bg-secondary ">
                            <b><i className="fa fa-plus"></i> Login</b>
                        </div>
                        <div className="card-body">
                            <div className="m-1">
                                <b className="text-primary">Add Email-Id</b>
                                <input className="form-control" type="email"/>
                            </div>
                            <div className="m-1">
                                <b className="text-primary">Password</b>
                                <input className="form-control" type="password"/>
                            </div>

                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-success">Login</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    
                </div>
            </div>
        </div>
        </>
    )


}
export default Login;