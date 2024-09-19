import React, { useState, useEffect } from 'react';



export default function CheckOut() {
    const [cartItems, setCartItems] = useState([]);
    const [province, setProvince] = useState([]);
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    // Obtener los artículos del carrito desde el localStorage cuando el componente se monta
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(items);
    }, []);

    // Calcular el subtotal de los artículos en el carrito
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Cálculos adicionales si es necesario (envío, impuestos, total)
    const shippingCost = 3.99;  // Ejemplo de costo de envío
    const total = subtotal + shippingCost;

    return (
        <div className="container max-w-screen-lg mx-auto p-4">
            <h2 className="text-3xl font-bold mb-8">Checkout</h2>
            {cartItems.length === 0 ? (
                <p className="text-xl">Your cart is empty.</p>
            ) : (
                <div>
                    <div className="mb-6">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center border-b py-4">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                                <div>
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                                </div>
                                <div className="text-lg font-semibold">
                                    ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-right">
                        <p className="text-lg font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
                        <p className="text-lg font-semibold">Shipping: ${shippingCost.toFixed(2)}</p>
                        <p className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</p>
                    </div>
                    
                    <div className="mb-6">
                        <label className="block text-lg font-semibold mb-2">Province</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setProvince(e.target.value)}
                            className="w-full border p-2 rounded-lg"
                            placeholder="Enter your Province"
                            required
                        />
                    </div>        

                    <div className="mb-6">
                        <label className="block text-lg font-semibold mb-2">City</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full border p-2 rounded-lg"
                            placeholder="Enter your city"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-semibold mb-2">Shipping Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full border p-2 rounded-lg"
                            placeholder="Enter your address"
                            required
                        />
                    </div>


                    <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                        Proceed to Payment
                    </button>
                </div>
            )}
        </div>
    );

}
