import React from 'react'
import Product from './Product.js'

export default function ProductList(props) {
 
  return props.products.length > 0 ?(
        props.products.map((product,i)=>{
            return <Product 
            product={product}  
            key={i} 
            incrementQuqnt= {props.incrementQuqnt} 
            decrementQuqnt={props.decrementQuqnt}
            remove={props.remove}
            index={i}/>
        })
  ): <h1 className="font-weight-bold" >No Products</h1>
}
