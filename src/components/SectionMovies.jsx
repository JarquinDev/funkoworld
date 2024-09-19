import React from 'react'
import Card from './Card';
import products from '../data/Products';

export default function SectionMovies({ onAddToCart }) {
    const limitedProducts = products.slice(0, 4);
    return (
        <section className="movies-section py-12 text-center bg-gray-300">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Movies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
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
                    <button className="shop-now-button bg-black hover:bg-gray-600 mt-4 text-white font-semibold py-2 px-4 rounded-lg">
                        Show More
                    </button>
            </div>
        </section>
      );
}
