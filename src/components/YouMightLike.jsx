import React from 'react'
import Card from './Card';
import products from '../data/Products';

export default function YouMightLike({ onAddToCart }) {
  const limitedProducts = products.slice(0, 4);
  
  return (
    <section className='py-12 text-center bg-gray-300'>
        <div className='container  mx-auto'>
            <h2 className='text-4xl md:text-5xl font-bold text-black mb-4'>You Might like </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {limitedProducts.map((product) => (
                        <Card
                            key={product.id}
                            image={product.image}
                            title={product.name}
                            description={product.description}
                            license={product.license}
                            price={product.price}
                            category={product.category}
                            hoverImage={product.hoverImage}
                            id={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    ))}
            </div>
        </div>
    </section>
  )
}
