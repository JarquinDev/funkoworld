import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Header = ({addToCart}) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Buscar:', search);
  };

  return (
    <header className="bg-zinc-900 text-primary-foreground py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">
            <a href="/" className="text-white hover:text-gray-400">FunkoStop</a>
          </div>
        </div>

        {/* Icono Hamburguesa */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-400">
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú de navegación */}
        <nav className={`flex-col lg:flex-row lg:flex items-center gap-4 absolute lg:static left-0 top-16 w-full lg:w-auto bg-zinc-900 lg:bg-transparent z-10 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <div
            className="relative inline-block text-left"onClick={openDropdown}>
            <button className="text-white hover:text-gray-400">
              Products
            </button>
            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg"
              onMouseLeave={closeDropdown}>
                <div className="py-1">
                  <Link
                    to="/all-products"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/categories"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Categories
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/discounts" className="text-white hover:text-gray-400">Discounts</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About Us</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
          <Link to="/cart" className="text-white hover:text-gray-400 lg:hidden">
            <FaShoppingCart className="w-6 h-6" />
          </Link>
        </nav>

        {/* Barra de búsqueda */}
        <form onSubmit={handleSearchSubmit} className="hidden lg:flex flex-grow mx-4 max-w-xs">
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange}
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"/>
          <button
            type="submit"
            className="bg-gray-700 p-2 rounded-r-md hover:bg-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 10.65A5.95 5.95 0 0112 18a5.95 5.95 0 01-5.65-7.35A5.95 5.95 0 0112 6a5.95 5.95 0 014.65 4.65z"></path>
            </svg>
          </button>
        </form>

        {/* Carrito de compras */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/cart" className="text-white hover:text-gray-400">
            <FaShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </div>
  </header>
  );
};

export default Header;
