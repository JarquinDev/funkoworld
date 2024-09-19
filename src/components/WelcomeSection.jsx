import React from 'react'
import { Link } from 'react-router-dom'

export default function WelcomeSection({addToCart}) {
  return (
    <div>
        <section className="movie-section bg-slate-50 text-black py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
            
            {/* Texto */}
                <div className="movie-text text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Discover the Latest Funko Pops
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                      Explore our collection of the hottest new Funko Pop figures.
                    </p>
                    <button className="shop-now-button bg-black hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
                      <Link to="/all-products" onAddToCart={addToCart}>
                        Go Shoping
                      </Link>
                    </button>
                </div>
                <div className="info-image  md:w-2/2 flex gap-4">
                    <img
                    src="./img/marvel1.png"
                    alt="Collection"
                    className=" w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg "
                    />
                </div>
            </div>
  </section>
    </div>
  )
}
