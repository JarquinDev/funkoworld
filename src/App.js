import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Categories from './Pages/Categories';
import ProductList from './components/ProductList';
import CategoryPage from './components/CategoryPage';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Discounts from './Pages/Discounts';
import AllProducts from './Pages/AllProducts';
import AboutUS from './Pages/AboutUS';
import ContactUs from './Pages/ContactUs';
import CheckOut from './Pages/CheckOut';

function App() {

    const loadCartFromLocalStorage = () => {
      return JSON.parse(localStorage.getItem('cartItems')) || [];
    };

    // Función para agregar productos al carrito
    const addToCart = (product, quantity) => {
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      
      const existingItem = existingCartItems.find(item => item.id === product.id);
      
      if (existingItem) {
          // Si el producto ya existe, actualiza la cantidad
          existingItem.quantity += quantity;
      } else {
          // Si el producto no existe, agrégalo al carrito
          existingCartItems.push({ ...product, quantity });
      }
      
      // Guarda el carrito actualizado en localStorage
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  };

   const removeFromCart = (id) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        const updatedCartItems = existingCartItems.filter(item => item.id !== id);
        
        // Guarda el carrito actualizado en localStorage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

  return (
    <Router basename='/funkoworld'>
      <Header addToCart={addToCart} />
      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path='/categories' element={<Categories />}/>
          <Route path='all-products' element={<AllProducts addToCart={addToCart}/>}/>
          <Route path='/productlist' element={<ProductList addToCart={addToCart}/>}/>
          <Route path="/categorypage/:category" element={<CategoryPage addToCart={addToCart}/>} />
          <Route path="/product/:productId" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart removeFromCart={removeFromCart} addToCart={addToCart}/>} />
          <Route path="/discounts" element={<Discounts removeFromCart={removeFromCart} addToCart={addToCart}/>} />
          <Route path="/discounts/:productId" element={<ProductDetails addToCart={addToCart} />} />
          <Route path='checkOut' element={<CheckOut/>}/>
          <Route path='about' element={<AboutUS/>}/>
          <Route path='contact' element={<ContactUs/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
