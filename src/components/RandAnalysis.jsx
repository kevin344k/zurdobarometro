import React, { useState } from "react";

export default function RandAnalysis() {
  const [expanded, setExpanded] = useState(false);
  const izquierda = [
    {
      numero: 1,
      titulo: "Subir impuestos a los ricos",
      descripcion: "Cobra más dinero a quien gana más (impuestos progresivos)"
    },
    {
      numero: 2,
      titulo: "Dar bonos y ayudas del gobierno",
      descripcion: "El Estado distribuye dinero a personas que lo necesitan"
    },
    {
      numero: 3,
      titulo: "Regulaciones para empresas",
      descripcion: "El Estado controla lo que las empresas pueden hacer"
    },
    {
      numero: 4,
      titulo: "Buscar igualdad económica",
      descripcion: "Intentar que todos tengan más o menos lo mismo"
    },
    {
      numero: 5,
      titulo: "Estado controla recursos",
      descripcion: "El gobierno decide cómo se invierte el dinero público"
    },
    {
      numero: 6,
      titulo: "Prohibiciones y restricciones",
      descripcion: "Prohibir ciertos negocios o prácticas consideradas dañinas"
    },
    {
      numero: 7,
      titulo: "Énfasis en igualdad",
      descripcion: "La prioridad es que todos tengan oportunidades parecidas"
    },
    {
      numero: 8,
      titulo: "Bienestar colectivo",
      descripcion: "Lo importante es el bien de todos, no de unos pocos"
    }
  ];

  const paisesIzquierda = [
    { nombre: "Cuba 🇨🇺", caracteristicas: "Muy fuerte control estatal, impuestos altos" },
    { nombre: "Venezuela 🇻🇪", caracteristicas: "Control estatal extremo, poca libertad económica" }
  ];

  const derecha = [
    {
      numero: 1,
      titulo: "Bajar impuestos",
      descripcion: "Todos pagan menos impuestos, especialmente los que ganan más"
    },
    {
      numero: 2,
      titulo: "Sin bonos ni ayudas",
      descripcion: "Cada persona debe ganarse su dinero, no vivir de subsidios"
    },
    {
      numero: 3,
      titulo: "Libertad para empresas",
      descripcion: "Las empresas deciden sin interventor del Estado"
    },
    {
      numero: 4,
      titulo: "Libertad económica",
      descripcion: "Cada uno se gana lo que puede según su esfuerzo"
    },
    {
      numero: 5,
      titulo: "Propiedad privada total",
      descripcion: "Lo que ganas es completamente tuyo, el Estado no interviene"
    },
    {
      numero: 6,
      titulo: "Libertad para hacer negocios",
      descripcion: "Las personas pueden iniciar negocios sin permisos complicados"
    },
    {
      numero: 7,
      titulo: "Énfasis en libertad",
      descripcion: "La prioridad es que cada uno haga lo que quiera con su dinero"
    },
    {
      numero: 8,
      titulo: "El éxito personal es bueno",
      descripcion: "Está bien que algunos ganen mucho, es resultado del esfuerzo"
    }
  ];

  const paisesDerecha = [
    { nombre: "Singapur 🇸🇬", caracteristicas: "Impuestos bajos, mercado libre, prosperidad" },
    { nombre: "Estados Unidos 🇺🇸", caracteristicas: "Capitalismo fuerte, menor intervención del Estado" }
  ];

  return (
    <div className="w-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        
        {/* IZQUIERDA */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
             IZQUIERDA/SOCIALISTA
          </h3>
          <div className="space-y-3 mb-3">
            {izquierda.slice(0, expanded ? 8 : 3).map((item) => (
              <div
                key={item.numero}
                className="bg-red-100 border-l-4 border-red-500 p-4 rounded-lg hover:bg-red-200 transition-colors"
              >
                <p className="font-bold text-red-700 text-sm md:text-base">
                  {item.numero}. {item.titulo}
                </p>
                <p className="text-red-600 text-xs md:text-sm mt-1">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>

          {/* Botón Ver Más */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full mb-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            {expanded ? "Ver menos ▲" : "Ver más ▼"}
          </button>

          {/* Ejemplos de Países - Izquierda (Siempre visible) */}
          <div className="bg-gradient-to-br from-red-900 to-red-950 p-4 md:p-6 rounded-xl border border-red-800">
            <h4 className="font-bold text-red-300 mb-4 flex items-center gap-2">
               Ejemplos de Gobiernos de Izquierda
            </h4>
            <div className="space-y-3">
              {paisesIzquierda.map((pais, idx) => (
                <div key={idx} className="bg-red-800 bg-opacity-50 p-3 rounded-lg border border-red-700">
                  <p className="font-bold text-red-200 text-sm">{pais.nombre}</p>
                  <p className="text-red-100 text-xs mt-1">{pais.caracteristicas}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DERECHA */}
        <div>
          <h3 className="text-2xl md:text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2">
             DERECHA/CAPITALISTA
          </h3>
          <div className="space-y-3 mb-6">
            {derecha.slice(0, expanded ? 8 : 3).map((item) => (
              <div
                key={item.numero}
                className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <p className="font-bold text-blue-700 text-sm md:text-base">
                  {item.numero}. {item.titulo}
                </p>
                <p className="text-blue-600 text-xs md:text-sm mt-1">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>

          {/* Botón Ver Más */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full mb-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            {expanded ? "Ver menos ▲" : "Ver más ▼"}
          </button>

          {/* Ejemplos de Países - Derecha (Siempre visible) */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-4 md:p-6 rounded-xl border border-blue-800">
            <h4 className="font-bold text-blue-300 mb-4 flex items-center gap-2">
               Ejemplos de Gobiernos de Derecha
            </h4>
            <div className="space-y-3">
              {paisesDerecha.map((pais, idx) => (
                <div key={idx} className="bg-blue-800 bg-opacity-50 p-3 rounded-lg border border-blue-700">
                  <p className="font-bold text-blue-200 text-sm">{pais.nombre}</p>
                  <p className="text-blue-100 text-xs mt-1">{pais.caracteristicas}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
