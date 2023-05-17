import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Card from "./Card";
import Sdata from "./Sdata";
import Footer from "./Footer";


const App = ()=>{
  const Btn = ["Morning", "Lunch","Dinner"];
  const [items, setItems] = useState(Sdata);
  const filterItem = (catg)=>{
    const updatedItems = Sdata.filter((curntCatg)=>{
      return curntCatg.category ===catg;
    });
    setItems(updatedItems);
  }
  return(
    <>
    <div className="my-5">
      <h1 className="text-center fw-bold">Order your favourite dish</h1>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
          <hr/>
          <div className=" header d-flex justify-content-center">
            {Btn.map((btnName)=>{
              return <button className="btn btn-warning mb-5 m-2" onClick={()=>filterItem(btnName)}>{btnName}</button>
            })}
            <button className="btn btn-warning mb-5 m-2" onClick={()=> setItems(Sdata)}>All</button>
      </div>
            <div className="row gy-4">
              {
                items.map((data, index)=>{
                  return <Card key={index} title={data.name} img={data.image} dec={data.description} price={data.price}/>
                })
              }
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;