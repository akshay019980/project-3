import React, { useEffect, useState } from "react";
import Section from "./header";
import { Link } from "react-router-dom";

const Home = () => {

    const [product, pickProduct] = useState([]);
     // itmes increment
    const [qty,pickQty] = useState(1);

    const getbrand = () => {

        const url = "http://localhost:1234/product";
        fetch(url)
            .then(response => response.json())
            .then(serverArray => {
                
                pickProduct(serverArray)

            })
    }
    const DeletePro = (id) => {

        const url = "http://localhost:1234/product/"+id;

        var postdata = {
            headers: { 'Content-Type': 'application/json' },
            method: "DELETE"
        }
        fetch(url, postdata)
            .then(response => response.json())
            .then(serverArray => {
                getbrand();


            })


    }
    const one = (index) =>{
        var pdata = product[index];
        console.log(pdata);
        console.log("-----------------------------");
        var pid = product[index].id;
        var a = parseInt(pdata.quantity)+1;
        console.log(a);
        console.log(pid);
        pdata['quantity'] = a;
        
        const url = "http://localhost:1234/product"+pid;

        var postdata = {
            headers: { "Content-Type": "application/json" },
            method: "PUT",
            body:JSON.stringify(pdata)
          };
      
          fetch(url, postdata)
            .then((response) => response.json())
            .then((serverdata) => {
                getbrand();
            });
    }
    const two = (index) =>{
        var pdata = product[index];
        console.log(pdata);
        console.log("-----------------------------");
        var pid = product[index].id;
        var a = parseInt(pdata.quantity)-1;
        console.log(a);
        console.log(pid);
        pdata['quantity'] = a;
        
        const url = "  http://localhost:1234/product"+pid;
    
        var postdata = {
          headers: { "Content-Type": "application/json" },
          method: "PUT",
          body:JSON.stringify(pdata)
        };
    
        fetch(url, postdata)
          .then((response) => response.json())
          .then((serverdata) => {
            getbrand();
          });
      }
    useEffect(() => {
        getbrand();

    }, [1])

    //quantity//

   
   

    return (
        <div>
            <Section />

            <>

                <div className="container mt-3">

                    <div className="row bg-light my-5 shadow">

                        <div className=" col-lg-7 mt-2">
                            <h3 className="text-center text-info "><i className="fa fa-shopping-cart mt-5 m-2   ">
                                </i>Proceed to Buy-({product.length})</h3>
                            <div className=" row  card shadow ms-2">

                                {
                                    product.map((product, index) => {
                                        return (
                                            <>


                                                <div className=' row m-3' key={index}>
                                                    <div className='col-lg-3 m-2 p-2 d-flex  justify-content-center align-items-center '>
                                                        <img className='cart-image' src={product.photo} id="productimg" />
                                                    </div>
                                                    <div className='  col-lg-8  '>
                                                        <div className="row">
                                                            <div className="col-lg-4 ms-4 m-4">
                                                            <div>
                                                            <h4 className=' text-dark'>{product.productname}</h4>
                                                        </div>
                                                        <div >
                                                            <b >{product.details}</b>
                                                        </div>
                                                        <div>
                                                            <span>
                                                                You Saved Rs.
                                                                {(product.price * product.offer) / 100}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className='text-danger'>{product.offer}% OFF</span>
                                                        </div>

                                                        <div>
                                                            <h4 className=' text-dark'>
                                                                <i className="fa fa-indian-rupee-sign text-primary"></i>{product.price * product.quantity}.oo</h4>
                                                        </div>
                                                       
                                                        <div>
                                                            <button className="btn btn-white border-danger" onClick={DeletePro.bind(this, product.id)}>Delete</button>
                                                        </div>

                                                            </div>
                                                            <div className="col-lg-6 m-3  ">
                                                            <div >
                                                            <i className="fa fa-truck text-success "></i> Eligible for Free Shipping
                                                        </div>
                                                        {/* <ul className="pagination justify-content-end">
                                                            <li className="page-item">
                                                                <button className="page-link"
                                                                onClick={() => (product.id)}>
                                                                    <i className="fa fa-minus"></i>

                                                                </button>
                                                            </li>
                                                            <li className="page-item">
                                                                <input type="text"
                                                                name="quantity"
                                                                value={product.quantity}
                                                                onChange={(e)=>pickQty(e.target.value)}
                                                                className="page-link"/>

                                                            </li>
                                                            <li className="page-item">
                                                                <button className="page-link"
                                                                 onClick={() => (product.id)}>
                                                                  < i className="fa fa-plus"></i>
                                                                </button>

                                                            </li>

                                                        </ul> */}
                                                         <div className="input-group incress">
                                                 <button onClick={one.bind(this, index)} className="input-group-text">+</button>

                                                  <input type="number" className="form-control text-center bg-white"
                                                 value={product.quantity} onChange={e =>pickQty(e.target.value)}/> 

                                                    <button onClick={two.bind(this, index)} className="input-group-text">-</button>

                                                     </div>
                                                            </div>
                                                        

                                                        
                                                    </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </>

                                        )
                                    })

                                }

                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="row mt-5">
                                <div className="card body m-5 shadow">
                                    <div className="card mt-5">
                                        <div className="header text-center m-1 text-primary">
                                            <h4> Total-Amount </h4>
                                        </div>
                                        <div className="card-body">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        </div>

    );

}
export default Home;




