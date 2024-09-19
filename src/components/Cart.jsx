import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import YouMightLike from './YouMightLike';

export default function Cart({ removeFromCart,addToCart }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(items);
    }, []);

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const shippingCost = 3.99;

    const calculateTotal = () => {
        return calculateSubtotal() + shippingCost;
    };

    const handleRemoveFromCart = (id) => {
        // Obtén el carrito actual desde localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        // Busca el producto en el carrito por su id
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                // Si la cantidad es mayor a 1, resta 1 a la cantidad
                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    // Si la cantidad es 1, retorna null para eliminar el producto
                    return null;
                }
            }
            return item; // Si no es el producto, devuélvelo tal cual
        }).filter(item => item !== null); // Filtra los elementos nulos (productos eliminados)
    
        // Actualiza localStorage con los nuevos valores del carrito
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
        // Actualiza el estado del carrito
        setCartItems(updatedCartItems);
    };
    const handleIncreaseQuantity = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };
    
    const handleDecreaseQuantity = (id) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0); // Elimina el item si la cantidad es 0
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <div>
            <div className="max-w-screen-lg mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center">
                        <p>Your cart is empty.</p>
                        <Link to="/all-products" className="text-blue-500 underline">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
    {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg shadow relative">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
            <div className="flex-1 ml-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.license}</p>

                {/* Mostrar la cantidad del producto */}
                <div className="flex items-center mt-2">
                    <button
                        onClick={() => handleDecreaseQuantity(item.id)}  
                        className="px-2 py-1 bg-gray-200 rounded-l text-gray-700 hover:bg-gray-300"
                    >
                        -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>  {/* Mostrar la cantidad actual */}
                    <button
                        onClick={() => handleIncreaseQuantity(item.id)} 
                        className="px-2 py-1 bg-gray-200 rounded-r text-gray-700 hover:bg-gray-300"
                    >
                        +
                    </button>
                </div>

                {/* Botón para eliminar el producto */}
                <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="absolute top-2 right-2 text-red-500 font-bold text-xl hover:text-red-700"
                >
                    &times;
                </button>
            </div>
            <div className="text-lg font-semibold">
                ${((item.price) * item.quantity).toFixed(2)}  {/* Mostrar el precio total por la cantidad */}
            </div>
        </div>
    ))}
</div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                            <div className="mb-2 flex justify-between">
                                <span>Subtotal</span>
                                <span>${calculateSubtotal().toFixed(2)}</span>
                            </div>
                            <div className="mb-2 flex justify-between">
                                <span>Shipping</span>
                                <span>${shippingCost.toFixed(2)}</span>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between text-xl font-semibold">
                                <span>Total</span>
                                <span>${calculateTotal().toFixed(2)}</span>
                            </div>
                            <hr className="my-4" />
                            <span>By clicking checkout, I agree toterms & conditions and understand that all sales are final.</span>
                            <hr className="my-4" />
                            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                                <Link to={'/checkOut'}>Proceed to Checkout</Link>
                            </button>
                            <hr className="my-4" />
                            <p className="text-1xl mb-4">accepted payment methods</p>
                            <div className="payment-methods flex items-center space-x-4">
                                <img src='/img/cards/visa-logo.webp' alt="Visa" className="w-12 h-auto payment-icon2" />
                                <img src='/img/cards/master-card-logo.png' alt="MC" className="w-12 h-auto payment-icon2" />
                                <img src='/img/cards/American_Express-Logo.wine.png' alt="AE" className="w-12 h-auto payment-icon2" />
                                <img src='/img/cards/paypal-logo.png' alt="paypal" className="w-12 h-auto payment-icon2" />
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
            <hr className="my-4" />
            <YouMightLike onAddToCart={addToCart}/>
        </div>
    );
}
