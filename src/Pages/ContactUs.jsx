import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContacUs() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-12">
      {/* Encabezado */}
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-lg mt-4 text-gray-600">
          We’d love to hear from you! Get in touch with us for any inquiries.
        </p>
      </div>

      {/* Sección de Información de Contacto */}
      <div className="container mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Teléfono */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <FaPhoneAlt className="text-4xl text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">+123 456 7890</p>
        </div>

        {/* Correo Electrónico */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <FaEnvelope className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">contact@funkoworld.com</p>
        </div>

        {/* Dirección */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Location</h3>
          <p className="text-gray-600">123 Funko Street, Collectors City</p>
        </div>
      </div>

      {/* Formulario de Contacto */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Send Us a Message</h2>
        <form className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
