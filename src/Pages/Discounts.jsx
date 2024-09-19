import React, { useState } from 'react';
import Card from '../components/Card';
import discounts from '../data/Discounts';

export default function Discounts({addToCart}) {
    const discountItem = discounts;
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
  return (
    <div className=' py-12 text-center bg-gray-300'>
        <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">Discounts</h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {discountItem.map(discount => (
                <Card
                    key={discount.id}
                    image={discount.image}
                    title={discount.name}
                    description={discount.description}
                    license={discount.license}
                    price={discount.price}
                    category={discount.category}
                    id={discount.id}
                    hoverImage={discount.hoverImage}
                    discount={discount.discount}
                    product={discount}
                    onAddToCart={addToCart}
                />
                ))}
            </div>
        </div>
    </div>
  )
}
