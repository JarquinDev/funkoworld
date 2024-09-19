import React, { useState } from 'react';
import { useParams,useLocation,useNavigate } from 'react-router-dom';
import products from '../data/Products'; // Asegúrate de importar tus productos desde el archivo correspondiente
import discounts from '../data/Discounts';

export default function ProductDetails({ addToCart }) {
    const { productId } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Verificar si la ruta contiene 'discount' para usar la lista de descuentos
    const isDiscountPage = location.pathname.includes('discounts');

    // Buscar el producto en la lista correspondiente
    const productList = isDiscountPage ? discounts : products;
    const product = productList.find(p => p.id === parseInt(productId));

    const [selectedImage, setSelectedImage] = useState(product ? product.image : '');
    const [quantity, setQuantity] = useState(1);

    if (!product) {
      return <div>Product not found</div>;
    }
    
    const handleQuantityChange = (e) => {
      setQuantity(parseInt(e.target.value));
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setIsModalOpen(true);
    };
    const handleContinueShopping = () => {
      setIsModalOpen(false); // Cerrar el modal y seguir comprando
  };
    const handleGoToCart = () => {
      navigate('/cart'); // Redirigir al carrito
    };
    return (
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row gap-6">
      <div className="flex flex-col items-center md:w-1/2">
        <div className="mb-4">
          <img src={selectedImage} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
        </div>
        <div className="flex gap-2">
          <button onClick={() => setSelectedImage(product.image)} className="border p-1 rounded-lg hover:opacity-75">
            <img src={product.image} alt="Default" className="w-20 h-20 object-cover" />
          </button>
          <button onClick={() => setSelectedImage(product.hoverImage)} className="border p-1 rounded-lg hover:opacity-75">
            <img src={product.hoverImage} alt="Hover" className="w-20 h-20 object-cover" />
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center ">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg mb-4 text-slate-500 ">{product.description}</p>
        <p className="text-md mb-4 text-slate-500">Category: {product.category}</p>
        <p className="text-md mb-4 text-slate-500">License: {product.license}</p>
        <p className="text-2xl font-semibold text-black mb-6">${product.price.toFixed(2)}</p>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-16 p-2 border border-gray-300 rounded-lg text-center"
          />
        </div>
        <button onClick={handleAddToCart} className="w-full mt-4 rounded-lg h-10 bg-black hover:bg-gray-600 text-white">
            Add to Cart
          </button>
      </div>
      {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-80 text-center">
                        <h3 className="text-lg font-bold mb-4">¡Added to Cart!</h3>
                        <h3 className="text-lg font-bold">Funko Pop : {product.license} {product.name}</h3>
                        <img
                            src={hovered ? product.hoverImage : product.image}
                            alt={product.title}
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
