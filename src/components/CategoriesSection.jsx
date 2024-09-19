import React from 'react'
import { Link } from 'react-router-dom';

export default function CategoriesSection({addToCart}) {
  return (
    <section className="categories-section py-8 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-section md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Categories!</h2>
          <p className="text-lg md:text-xl mb-6">
            Discover our diverse range of Funko Pop categories. From Sci-Fi and Anime to Music and Video Games, our collection offers something for every fan. Whether you’re a collector or just looking for a unique gift, you’ll find an extensive selection of Funko Pops to suit your interests.
          </p>
          
          <button className="shop-now-button bg-black hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
            <Link to="/categories" onAddToCart={addToCart}>
              Go to Categories
            </Link>
            </button>
        </div>
        <div className="images-section md:w-1/2 flex gap-4">
          <img
            src="./img/malthael1.png"
            alt="Category Image 1"
            className="w-1/2 h-auto object-cover"
          />
          <img
            src="./img/snoop1.png"
            alt="Category Image 2"
            className="w-1/2 h-auto object-cover"
          />
        </div>
        
      </div>
    </section>
  )
}
