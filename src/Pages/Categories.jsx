import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../data/Categories'

export default function Categories({ addToCart }) {
  return (
    <div className="py-8 px-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(category => (
          <Link
            key={category.id}
            to={`/categorypage/${category.namepath}`}
            category={category.name}
            onAddToCart={addToCart}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-72 object-cover transition-opacity duration-300"
            />
            <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
