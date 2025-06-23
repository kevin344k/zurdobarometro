import React from "react";

export default function Deudas({ data }) {
  console.log(data);

  return (
    <div className="lg:grid lg:grid-cols-2">
      {data.map((bono, index) => (
        <div
          key={index}
          className="bg-white w-full text-black px-4 py-2 mb-2 rounded-lg shadow-lg border-l-5 border-yellow-logo-600"
        >
          <p className="font-bold text-md">{bono.nombre}</p>
          <p className="hidden md:flex lg:flex truncate text-sm">
            {bono.descripcion}
          </p>
          <p>
            {Number(bono.gasto_total).toLocaleString("es-EC", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <a
            href={bono.Fuente}
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
