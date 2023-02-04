import { useState, useEffect } from 'react';

import './App.css';

function App() {


const url = "http://localhost:3000/products";
const [products, setProducts] = useState([]);
const [name, setName] = useState("")

//Recebe o objeto json e converte para implementação no codigo
useEffect(()=>{
    async function addProducts(url){
      const res = await fetch(url);
      const json = await res.json();
      setProducts(json);
    }

    addProducts(url);
  
}, [])




const handleSubmit = async (e) =>{
    e.preventDefault();
    const product = {
        name,



    }
    console.log(product)

}

  return (
    <div className="App">

      <div className="prodct list">
          <ul className="allProducts">
            {products.map(
              (product)=>(<li key={product.id}>{product.name}<h2 className="prodInformations">Informações</h2></li>)
            )}          
          </ul>
        </div>
      <div className="prodct add">
        
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Produto"/>
        <button>Adicionar</button>

        </form>

      </div>

    </div>
  );
}

export default App;

