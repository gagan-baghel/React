import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'
import Footer from './components/Footer.js'
import React,{useState} from 'react';
import AddItem from './components/AddItems';

function App() {
  const products = [
    {id: 1,
    name: 'Product 1',
    price: 10.00, 
    quantity:0},
    {id: 2,
    name: 'Product 2',
    price: 20.00,
    quantity:0}
]

let [ productList , setProductList ] = useState(products)
let [ totalamount , setamount ] = useState(0)
let [ addeditems , setaddeditems ] = useState(products.length)

 const incrementQuqnt = (index) => {
  let newProductList = [...productList];
  let newtotal = totalamount;
  newProductList[index].quantity++;
  newtotal += newProductList[index].price;
  setamount(newtotal);
  setProductList(newProductList);
 };

 const decrementQuqnt = (index) =>{
  let newProductList = [...productList];
  let newtotal = totalamount;
  if (newProductList[index].quantity > 0) { 
    newProductList[index].quantity-- ;
    newtotal -= newProductList[index].price;
  }
  else newProductList[index].quantity=0;
  setamount(newtotal);
  setProductList(newProductList);
 };


 const resetQuantity = () => {
 let newproductlist = [...productList]
 newproductlist.map((product) => {
  product.quantity=0})
  
 setProductList(newproductlist);
 setamount(0);
 }

 const remove = (index) => {
 let newproductlist = [...productList]
 let newTotalAmount = totalamount;
 newTotalAmount-=newproductlist[index].price*newproductlist[index].quantity;
 newproductlist.splice(index,1);
 setProductList(newproductlist);
 setamount(newTotalAmount);
 }


 const addItem = ( name , price) =>{
  let newproductlist = [...productList]
  newproductlist.push({
    id : (productList.length )++,
    name: name,
    price: price,
    quantity:0
  })
  let newlenaddeditem = addeditems;
  newlenaddeditem++;
  setaddeditems(newlenaddeditem)
  setProductList(newproductlist);
 }


return (
    <>
<Navbar addeditems={addeditems}/>
<main className="container mt-5" >
<AddItem addItem={addItem}/>
<ProductList products={productList} incrementQuqnt= {incrementQuqnt} decrementQuqnt={decrementQuqnt} remove={remove} />
</main>

<Footer totalamount={totalamount} resetQuantity ={resetQuantity} />

    </>
  );
}

export default App;
