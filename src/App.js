import { useState, useEffect } from 'react';



//Hooks Locais
import { useFetch } from './hooks/useFetch';



//Rotas React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Paginas
import Home from './pages/Home'
import Product from './pages/Product'

//Components
import NavBar from './components/NavBar'



//CSS
import './App.css';

function App() {



  return (
    <div className="App">
        <BrowserRouter>



            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/product/:id" element={<Product />}/>

            </Routes>
        </BrowserRouter>




    </div>
  
  
  
  
  );
}

export default App;

