import {useState} from "react";
import Cart from './components/Cart';
import Product from "./product";
  
function Store(props) {
  const [productList, setProductList] =useState ([
    {name:"Spider Repellant", price:16, id:1},
    {name:"Portable Monitor", price:62, id:2},
    {name:"Lysol", price:6,id:3}
  ]);

  // const addProduct = (newProduct) => {
  //   setProductList([...productList,newProduct]);

  // }
 // Add products to product list using handleInputChange, and handleProduct

 const [newProduct, setNewProduct] = useState({
  name:"",
  price:""
})

//Adding a cart list to our store
const [cartItems, setCartItems] =useState([]);

//handleChange
const handleInputChange = (event) =>{
  setNewProduct({
    ...newProduct,[event.target.name]: event.target.value
  });
};
//handleAddProduct
const handleAddProduct = ()=>{
  if(newProduct.name && newProduct.price) {
    setProductList([...productList, {...newProduct}
    ]);
    setNewProduct({name:"",price:""});
  }  
};
//create a remove product function by name
const handleRemoveProduct = (productName) => {
  setProductList(productList.filter((product) => product.name !== productName))
};

const handleAddToCart= (product) => {
  const existingItem = cartItems.find((item)=> item.name === product.name);
    if(existingItem) {
      const updatedCartItems = cartItems.map((item) => item.name === product.name, {...item, Quantity: item.quantity+1}
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItem([...cartItems, {...product, quantity:1}])
    }
}

  return ( 
    <div>
      <h1>Everything Store</h1>
       {/* { <button onClick={() =>
        addProduct({name:"New Product", price:20, })
        }>
          Add New Product
      </button> } */}

<input
type = "text"
name = "name"
value = {newProduct.name}
onChange= {handleInputChange} />

<input
type = "text"
name = "price"
value = {newProduct.price}
onChange= {handleInputChange} 
/>



<button onClick ={handleAddProduct}>Add New Product</button>  
<button onClick={() => handleRemoveProduct(newProduct.name)}>Remove Product</button>  

      {productList.map((product)=>(
        <Product
        name={product.name}
        price={product.price}
        key={product.id}
        />
   
      ))}

      <button onClick = {()=> handleAddToCart(newProduct)}>Add to Cart</button>
      </div>
  );
};

export default Store;
