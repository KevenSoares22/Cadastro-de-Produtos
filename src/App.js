import { useState, useEffect } from 'react';

import './App.css';

function App() {


const url = "http://localhost:3000/products"
const [products, setProducts] = useState([])


//Recebe o objeto json e converte para implementação no codigo
useEffect(()=>{
    async function addProducts(url){
      const res = await fetch(url)
      const json = await res.json()
      console.log(json)
    }

    addProducts(url)
    
}, [])


  return (
    <div className="App">
      <ul>
        {products.map(
          (product)=>(<li key={product.id}>{product.name}</li>)
        )}          

      </ul>
    </div>
  );
}

export default App;

