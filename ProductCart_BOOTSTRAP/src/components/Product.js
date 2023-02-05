import React from "react";

export default function Product(props) {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-5">
          <h2>
            {props.product.name}{" "}
            <span className="badge bg-secondary">${props.product.price}</span>
          </h2>
        </div>
        <div
          className="btn-group-md  col-3"
          role="group"
          aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-primary" onClick={()=>{

            props.decrementQuqnt(props.index)}

          }>
            -
          </button>
          <button type="button" className="btn btn-outline-primary m-1">
            {props.product.quantity}
          </button>
          <button 
          type="button" 
          className="btn btn-outline-primary" 
          onClick={()=>{
            props.incrementQuqnt(props.index)
            }} >
            +
          </button>
        </div>

        <div className="col-2">
            <button type="button" className="btn btn-outline-success">{"Total Price"}{props.product.price * props.product.quantity }</button>
        </div>
        <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.remove(props.index);
        }}
      >
        Remove
      </button>
      </div>
    </div>
  );
}
