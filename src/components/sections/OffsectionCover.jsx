import React from 'react';
import productos from '../../mocks/productos';

const OffsectionCover = () => {
  const specialOffer = productos[4];

  const sectionStyle = {
    backgroundImage: `url(${specialOffer.image})`,
  };

  return (
    <section className="relative bg-gray-900">
      <div
        className="absolute bg-cover inset-0"
        style={sectionStyle}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            ¡Oferta especial!
          </h2>
          <p className="text-lg text-white mb-8">
            Aprovecha esta oferta limitada y obtén un descuento del {specialOffer.discount}% en todos nuestros productos.
          </p>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Comprar ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default OffsectionCover;
