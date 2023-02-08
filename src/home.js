import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ControlledCarousel from "./image";
import Section from "./header";



const Home = () => {
    const [brand, pickBrands] = useState([]);
    const [category, pickCategory] = useState([]);
    const [Product, pickProduct] = useState([]);

    const getbrand = () => {  //brand 

        fetch("https://www.medicalplanet.in/webapi/Brand/getall")
            .then(response => response.json())
            .then(data => {
                pickBrands(data)
            })
    }


    const getcategory = () => {
        const url = "https://www.medicalplanet.in/webapi/Category/getall";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                pickCategory(data)
            })


    }

    const getproduct = (brandid) => {
        let input = { "categoryid": "", "vendorid": "", "brandid": brandid };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        };
        fetch('https://www.medicalplanet.in/webapi/Product/searchproduct', requestOptions)
            .then(response => response.json())
            .then(data => {
                pickProduct(data);
            });

    }
    const save=(Product)=>{
      const url="http://localhost:1234/product";
       const post={
        headers :{'content-type' : 'application/json'},
        method : 'POST',
        body:JSON.stringify(Product)
       }
 fetch(url,post)
 .then(response=>response.json())
 .then(data=>{
    console.log(data)
 })
    }

    useEffect(() => {
        getbrand();
        getcategory();
        getproduct();
    }, [1]);



    return (
        <>
           
           <Section/>

            <ControlledCarousel />

            <div className="container-fluid">
                <div className="row mt-2 ">
                    <div className="col-lg-3 ">
                        <div className="card ">
                            <div className="card-header bg-secondary text-white text-center">
                                <label>Brand List</label>
                            </div>
                            <div className="card-body shadow p-3 bg-body rounded border-dark">

                                <ul className="list-group id" >
                                    {
                                        brand.map((brand, index) => {
                                            return (
                                                <li className="list-group-item"  key={index}>
                                                    <button className="btn" onClick={getproduct.bind(this,brand.brandid)}> 
                                                     {brand.brandname}
                                                     </button>   

                                                </li>

                                            )
                                        })
                                    }
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-9">
                        <div className="row d-flex text-center">

                            <div className="row  m-4">
                                {
                                    Product.map((Product, index) => {
                                        return (
                                            <>
                                                <div className="col-lg-2 mb-2 m-2 p-1 text-center card  shadow">
                                                    <b className="text-primary">{Product.productname}</b>
                                                    <p><img id="imgpro" src={Product.photo} /> </p>
                                                    <label className=" price text-danger">{parseInt(Product.price) + (Product.price * 10) / 100}</label>
                                                    <label> Rs.{(Product.price) * (Product.offer) / 10}</label>
                                                    <p>its Good</p>
                                                    <div>
                                                    <Link to="/cart" className="btn btn-danger m-2"onClick={()=>save(Product) }>Add to Cart</Link>
                                                    <Link to="/login" className="btn btn-warning m-2 sm">shopp now</Link>
                                                    </div>
                                                </div>
                                                {/* <div className="text-secondary  text-start mt-4 ">
                                                  <h3>Deals of the Day</h3>
                                                  
                                                  <b className="text-danger">Best Selling Laptops,Mobiles & Shoes</b>
                                                </div> */}
                                                {/* <div className="card-body ms-4 ">
                                                    <img  src="1.jpg" id="wonder"></img>
                                                    <img src="2.jpg" id="wonder"></img>
                                                    <img src="3.jpg" id="wonder"></img>
                                                    <img src="4.jpg" id="wonder"></img>
                                          
                                                    <img src="5.jpg" id="wonder"></img>
                                                    <img src="6.jpg" id="wonder"></img>
                                                    <img src="7.jpg" id="wonder"></img>
                                                    <img src="8.jpg" id="wonder"></img>
                                                    
                                                </div> */}
                                            </>
                                        )

                                    })
                                }

                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="card-header text-center text-white bg-secondary">
                                <label>Category List</label>
                            </div>
                            <div className="card-body shadow p-3 bg-body rounded border-dark">
                                <ul className="list-group id ">
                                    {
                                        category.map((category, index) => {
                                            return (
                                                <li className="list-group-item" key={index} value={category.categoryid}>
                                                    {category.categoryname}
                                                </li>
                                            )

                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-8">
                    </div>
                </div>
            </div>
          
        </>

    );

}
export default Home;