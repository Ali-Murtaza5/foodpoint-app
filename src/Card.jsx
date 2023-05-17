import React from "react";

const Card = (props)=>{
    return(
        <>
<div className="col-lg-4 col-md-6  mx-auto">
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.img} className="img-fluid rounded-start" alt={props.title}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fw-bolder">{props.title}</h5>
        <p className="card-text">{props.dec}</p>
        <div className="row mt-5">
            <div className="col-lg-4 col-md-12 col-sm-12">
            <p className="card-text fw-bold">{props.price}</p>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
            <button className="btn btn-outline-primary">Order Now</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
        </>
    );
}

export default Card;