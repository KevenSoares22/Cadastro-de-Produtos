import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch'
import './App.css';

function App() {


const url = "http://localhost:3000/products";
const [products, setProducts] = useState([]);
const [name, setName] = useState("")
const [price, setPrice] = useState("")
const { data: items, httpConfig, loading } = useFetch(url)






const handleSubmit = async (e) =>{
    e.preventDefault();
    const product = {
        name,
        price,
      
    }
    console.log(product)
    


    httpConfig(product, "POST")
    setName("")
    setPrice("")


}

  return (
    <div className="App">
      <div className="prodct list">

        {loading && <p>Carregando, por favor aguarde</p>}
        {!loading &&    <ul className="allProducts">
            {items && items.map(
              (product)=>(<li key={product.id}>{product.name}<div>
                              <p>R${product.price}</p>
              <h2 className="prodInformations" onClick={(e)=>{console.log(e)}}>Informações</h2>
           
                
                </div> </li>)
 )}          
          </ul>}


       
        </div>
      <div className="prodct add">
        
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} name="value" onChange={(e)=>{setName(e.target.value)}} placeholder="Produto"/>
        <input type="number" value={price} name="price" onChange={(e)=>{setPrice(e.target.value)}} placeholder="Preço"/>
        {loading && <input type="submit" value="Aguarde" disabled="disabled"/>}
        {!loading && <input type="submit" value="Adicionar"/>}

        </form>

      </div>

    </div>
  );
}

export default App;

