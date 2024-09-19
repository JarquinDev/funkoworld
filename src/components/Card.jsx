import React, { useState } from 'react';
import { Link,useNavigate,useLocation  } from 'react-router-dom';


export default function Card({id,image, title, price,license,category,hoverImage,product, onAddToCart }) {
    
    const [hovered, setHovered] = useState(false);
    const [quantity, setQuantity] = useState(1); 
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar el modal
    const navigate = useNavigate();
    const location = useLocation();// Para redirigir al carrito
    const isDiscountPage = location.pathname.includes('discount');
    
    const handleAddToCart = () => {
        onAddToCart(product,quantity);
        setIsModalOpen(true); // Pasar la cantidad al añadir al carrito
      }
      const handleContinueShopping = () => {
        setIsModalOpen(false); // Cerrar el modal y seguir comprando
    };
    const handleGoToCart = () => {
        navigate('/cart'); // Redirigir al carrito
    };
    return (
        <div
            className="max-w-sm w-64 relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
            <Link to={isDiscountPage ? `/discounts/${id}` : `/product/${id}`}>
                <img
                src={hovered ? hoverImage : image}
                alt={title}
                className="w-full h-64 object-cover transition-opacity duration-300"
            />
            </Link>
            <div className="p-4 text-left">
                <h3 className="text-lg font-bold">Funko Pop : {license} {title}</h3>
                <p className="text-lg font-bold">{category}</p>
                <p className="text-primary font-bold">${price}</p>
                <button
                    onClick={handleAddToCart}
                    size="sm" className="w-full mt-4 rounded-lg h-10 bg-black hover:bg-gray-600 text-white"
                >
                    Add to Cart
                </button>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-80 text-center">
                        <h3 className="text-lg font-bold mb-4">¡Added to Cart!</h3>
                        <h3 className="text-lg font-bold">Funko Pop : {license} {title}</h3>
                        <img
                            src={hovered ? hoverImage : image}
                            alt={title}
                            className="w-full h-64 object-cover transition-opacity duration-300"
                        />
                        <div className="flex justify-between">
                            <button
                                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-600"
                                onClick={handleContinueShopping}
                            >
                                Continue Shopping
                            </button>
                            <button
                                className="bg-gray-100 text-black py-2 px-4 rounded border-1 border-transparent hover:border-2 hover:border-black"
                                onClick={handleGoToCart}
                            >
                                View Cart
                            </button>
                        </div>
                    </div>
                </div>
            )} 
        </div>
      );
}
