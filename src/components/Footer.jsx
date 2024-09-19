import React from 'react'
import { Link } from 'react-router-dom';
import { FaSquareFacebook ,FaXTwitter,FaSquareInstagram } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sección de Enlaces */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
              <li className="mb-2"><Link to="/"className="hover:underline">Home</Link></li>
              <li className="mb-2"><Link to="/categories"className="hover:underline">Categories</Link></li>
              <li className="mb-2"><Link to="/about"className="hover:underline">About Us</Link></li>
              <li className="mb-2"><Link to="/contact"className="hover:underline">Contact Us</Link></li>
              </ul>
            </div>
    
            {/* Sección de Contacto */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">123 Funko Street, Pop City</p>
              <p className="mb-2">Phone: +123 456 7890</p>
              <p className="mb-2">Email: support@funkoworld.com</p>
            </div>
    
            {/* Sección de Redes Sociales */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-500">
                  <FaSquareFacebook    className="w-6 h-6 fill-current" />
                </a>
                <a href="#" className="hover:text-pink-500">
                  <FaSquareInstagram   className="w-6 h-6 fill-current" />
                </a>
                <a href='#' className='hover:text-sky-700'>
                  <FaXTwitter   className="w-6 h-6 fill-current" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500">&copy; 2024 FunkoStop. All rights reserved.</p>
          </div>
        </footer>
      );
}
