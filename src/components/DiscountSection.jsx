import React from 'react'
import { Link } from 'react-router-dom';

export default function DiscountSection() {
  return (
    <section className='discount-section bg-gray-300 py-8' >
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-6'>
            
            <div className="discount-image md:w-1/2 flex gap-4">
                    <img
                    src="./img/flash2.png"
                    alt="Collection"
                    className=" w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg "
                    />
            </div>
            
            <div className="discount-icon md:w-1/2 flex gap-4">
                    <img
                    src="./img/discount-icon.png"
                    alt="Collection"
                    className=" w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg "
                    />
            </div>
            <div className='discount-text text-center md:w-1/2 mb-6 md:mb-0'>
                <h2 className='text-4xl md:text-5xl font-bold text-black mb-4'>Special Discount and Offers</h2>
                <p className="text-lg  mb-6 text-black">
                    Don’t miss out on our exclusive deals! Enjoy special discounts on selected Funko Pop figures. Whether you’re adding to your collection or looking for the perfect gift, our discounted items offer great value. Check out our latest offers and save on your favorite Funko Pops today.
                </p>
                <button className="shop-now-button bg-black hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
                    <Link to="discounts">
                      Go to Discounts
                    </Link>
                    </button>
            </div>
        </div>
    </section>
  )
}
