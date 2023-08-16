import React from "react";
import Card from "../components/cards/Card";
import productos from "../mocks/productos";
import Offsection from "../components/sections/Offsection";
import OffsectionCover from "../components/sections/OffsectionCover";
const Productos = () => {
  return (
    <>
      <div>
        <Offsection />
      </div>
      <div className="container mx-auto px-20 sm:px-4 py-8">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos?.map((producto) => (
              <Card
                id={producto.id}
                imageUrl={producto.image}
                description={producto.description}
                offer={producto.discount}
                price={producto.price}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <OffsectionCover />
      </div>
    </>
  );
};

export default Productos;
