import { useState, useEffect } from 'react';



//Hooks Locais
import { useFetch } from '../../hooks/useFetch';



//Router
import { Link } from 'react-router-dom'


import './styles.css'



export default function Home(){

const url = "http://localhost:3000/products";
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

    return(<div>
    
    
    
 <div className="prodct add">

<form onSubmit={handleSubmit}>
<input type="text" value={name} name="value" onChange={(e)=>{setName(e.target.value)}} placeholder="Produto"/>
<input type="number" value={price} name="price" onChange={(e)=>{setPrice(e.target.value)}} placeholder="Preço"/>
{loading && <input type="submit" value="Aguarde" disabled="disabled"/>}
{!loading && <input type="submit" value="Adicionar"/>}

</form>

</div>   





    <div className="prodct list">

{loading && <p>Carregando, por favor aguarde</p>}
{!loading &&    <ul className="allProducts">
    {items && items.map(
      (product)=>(<li key={product.id}>  {product.name}



      <div>
                      <p>R${product.price}</p>
        <Link to={`/product/${product.id}`}>Informações</Link>
   
        
        </div> </li>)
)}          
  </ul>}



</div>




















</div>)


}