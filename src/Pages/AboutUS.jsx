import React from 'react'

export default function AboutUS() {
    return (
      <div className="bg-gray-100 text-gray-800 min-h-screen py-12">
        {/* Encabezado */}
        <div className="container mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="text-lg mt-4 text-gray-600">
            Learn more about who we are, what we stand for, and our amazing team.
          </p>
        </div>
  
        {/* Sección de Misión y Visión */}
        <div className="container mx-auto mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 flex-1">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to bring joy and inspiration through our wide selection of Funko Pops. We strive to provide top-notch products and excellent customer service.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 flex-1">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                Our vision is to be the go-to platform for all collectors, offering exclusive, rare, and personalized Funko Pops that cater to every fan's passion.
              </p>
            </div>
          </div>
        </div>
  
        {/* Sección de Equipo */}
        <div className="container mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Miembro del equipo */}
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-xs text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team member"
                className="rounded-full mx-auto mb-4 w-32 h-32"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-500 mt-2">
                John leads the vision of Funko World with a passion for pop culture and collectibles.
              </p>
            </div>
            {/* Repite este bloque para más miembros */}
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-xs text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team member"
                className="rounded-full mx-auto mb-4 w-32 h-32"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Marketing Director</p>
              <p className="text-gray-500 mt-2">
                Jane oversees all marketing strategies, ensuring that our customers always find what they love.
              </p>
            </div>
            {/* Puedes agregar más miembros del equipo de manera similar */}
          </div>
        </div>
  
        {/* Sección de Contacto */}
        <div className="container mx-auto mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Get in Touch</h2>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              Do you have any questions? Feel free to reach out to us!
            </p>
            <p className="text-gray-800 font-semibold">Email: contact@funkoworld.com</p>
            <p className="text-gray-800 font-semibold">Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    );
  };
