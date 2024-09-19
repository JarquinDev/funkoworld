import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import products from '../data/Products';

export default function CategoryPage({ addToCart }) {
     // Extrae el parámetro 'category' de la URL
     const { category } = useParams();
     console.log('onAddToCart in CategoryPage:', addToCart);
    // Filtra los productos según la categoría
    const filteredProducts = products.filter(product => product.category === category);
    console.log('Filtered Products:', filteredProducts);
    return (
    <div>
      <ProductList
        title={`Products in ${category}`}
        categoryName={category}
        products={filteredProducts}
        addToCart={addToCart}
      />
    </div>
  )
}
