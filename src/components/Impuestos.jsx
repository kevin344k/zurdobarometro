import React from "react";

export default function Impuestos({ data }) {
  console.log("impuestos", data);

  return (
    <div className="lg:grid lg:grid-cols-2">
      {data.map((impuesto, index) => (
        <div
          key={index}
          className="bg-white w-full text-black px-4 py-2 mb-2 rounded-lg shadow-lg border-l-5 border-yellow-logo-600"
        >
          <p className="font-bold text-md">{impuesto.nombre}</p>
          <p className="hidden md:flex lg:flex truncate text-sm">
            {impuesto.descripcion}
          </p>
          <a
            href={impuesto.fuente}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-shadow-yellow-logo-950 bg-yellow-logo-300 text-sm w-fit p-2 mt-3 rounded-md"
          >
            Leer más 
          </a>
        </div>
      ))}
    </div>
  );
}
