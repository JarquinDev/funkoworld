import React from 'react'
import WelcomeSection from '../components/WelcomeSection'
import SectionMovies from '../components/SectionMovies'
import CategoriesSection from '../components/CategoriesSection'
import DiscountSection from '../components/DiscountSection'


export default function Home ({ addToCart }) {
  return (
    <div>
        <WelcomeSection/>
        <SectionMovies onAddToCart={addToCart}/>
        <CategoriesSection/>
        <DiscountSection/>
    </div>
  )
}
