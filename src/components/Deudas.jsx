import React, { useState } from "react";

export default function Deudas({ data }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.slice(0, expanded ? data.length : 3).map((credito, index) => (
          <div
            key={index}
            className="bg-white text-black px-5 py-4 rounded-lg shadow-lg border-l-4 border-yellow-logo-600 hover:shadow-xl hover:scale-105 transition-all"
          >
            <p className="font-bold text-base md:text-lg">{credito.entidad}</p>
            <p className="text-sm md:text-base text-gray-700 mt-2 line-clamp-3">
              {credito.descripcion}
            </p>
            <p className="font-bold text-base md:text-lg text-yellow-logo-700 mt-3">
              {Number(credito.cantidad).toLocaleString("es-EC", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <a
              href={credito.fuente}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-yellow-logo-950 bg-yellow-logo-300 text-sm font-medium w-fit px-3 py-2 mt-4 rounded-md hover:bg-yellow-logo-500 transition-colors"
            >
              Leer más →
            </a>
          </div>
        ))}
      </div>

      {/* Botón Ver Más */}
      {data.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 w-full bg-yellow-logo-600 hover:bg-yellow-logo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          {expanded ? "Ver menos ▲" : "Ver más ▼"}
        </button>
      )}
    </div>
  );
}
