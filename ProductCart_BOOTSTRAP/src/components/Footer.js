import React from 'react'

export default function Footer(props) {
  return (
    <div className='row fixed-bottom' >
        <button  className='col-2 btn btn-danger' onClick={()=>{props.resetQuantity()}}> Reset </button>
        <button  className='col-8 btn btn-dark'>{props.totalamount} </button>
        <button  className='col-2 btn btn-success' > PayNow </button>
    </div>
  )
}
