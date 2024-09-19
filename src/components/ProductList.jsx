import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

export default function ProductList({ title, categoryName, products,addToCart }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    
    console.log('onAddToCart in productlist:', addToCart);
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    };

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    const filteredProducts = products.filter(product => {
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesMinPrice = minPrice === '' || product.price >= parseFloat(minPrice);
        const matchesMaxPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
        return matchesSearchTerm && matchesMinPrice && matchesMaxPrice;
    });
  return (

    <div className=' py-12 text-center bg-gray-300'>
        <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">{categoryName}</h2>
            <div className="mb-4 items-center">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border p-2 rounded-lg mr-4"
                    />
                <input
                    type="number"
                    placeholder="Min price"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="border p-2 rounded-lg mr-4"
                    />
                <input
                    type="number"
                    placeholder="Max price"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="border p-2 rounded-lg"
                    />
            </div>
        </div>
        <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {filteredProducts.map(product => (
                <Card
                    key={product.id}
                    image={product.image}
                    title={product.name}
                    description={product.description}
                    license={product.license}
                    price={product.price}
                    category={product.category}
                    id={product.id}
                    hoverImage={product.hoverImage}
                    product={product}
                    onAddToCart={addToCart}
                />
                ))}
            </div>
        </div>
    </div>
  )
}
