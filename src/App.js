import { useState, useEffect } from 'react';

import './App.css';

function App() {


const url = "http://localhost:3000/products";
const [products, setProducts] = useState([]);
const [name, setName] = useState("")
const [price, setPrice] = useState("")




//Recebe o objeto json e converte para implementação no codigo
useEffect(()=>{
    async function addProducts(){
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }

    addProducts();
  
}, [])




const handleSubmit = async (e) =>{
    e.preventDefault();
    const product = {
        name,
        price,
      
    }
    console.log(product)
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          
        },
        body: JSON.stringify(product)

    })


    //Altera a string json para objeto
    const addedProduct = await res.json()

   console.log(addedProduct)
    setProducts((prevProducts)=>[...prevProducts, addedProduct])
    setName("")
    setPrice("")


}

  return (
    <div className="App">

      <div className="prodct list">
          <ul className="allProducts">
            {products.map(
              (product)=>(<li key={product.id}>{product.name} <p>R${product.price}</p><h2 className="prodInformations" onClick={(e)=>{console.log(e)}}>Informações</h2></li>)
            )}          
          </ul>
        </div>
      <div className="prodct add">
        
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} name="value" onChange={(e)=>{setName(e.target.value)}} placeholder="Produto"/>
        <input type="number" value={price} name="price" onChange={(e)=>{setPrice(e.target.value)}} placeholder="Preço"/>

        <input type="submit" value="Adicionar"/>

        </form>

      </div>

    </div>
  );
}

export default App;

