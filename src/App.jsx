import "./App.css";
import logo_jaguar from "./assets/bg-yellow-jaguar-no-text.jpeg";
import { useState } from "react";

import data from "./data/data.js";
import NavBar from "./components/NavBar";
import Impuestos from "./components/Impuestos";
import Deudas from "./components/Deudas.jsx";
import BonosyAyudas from "./components/BonosyAyudas.jsx";
import RandAnalysis from "./components/RandAnalysis.jsx";
import Zurdobarometro from "./components/ZurdoBarometro";

// Función para calcular el nivel del barómetro
const calculateBarometer = (dataObj) => {
  // Puntos por impuestos (cada impuesto suma puntos)
  const impuestosScore = dataObj.impuestos_noboa.length * 8;

  // Puntos por deuda (suma total en miles de millones)
  const deudaTotal = dataObj.deudas_noboa.reduce((sum, debt) => {
    const monto =
      typeof debt.cantidad === "string"
        ? parseFloat(debt.cantidad.replace(/\D/g, ""))
        : debt.cantidad;
    return sum + monto / 1e9; // Convertir a miles de millones
  }, 0);
  const deudaScore = Math.min(deudaTotal * 3, 30); // Máximo 30 puntos

  // Puntos por bonos (suma gastos)
  const bonosTotal = dataObj.bonos_y_ayudas.reduce(
    (sum, bono) => sum + (bono.gasto_total || 0),
    0,
  );
  const bonosScore = Math.min((bonosTotal / 1e8) * 10, 20); // Máximo 20 puntos

  // Score total: 0-100
  const totalScore = Math.min(
    Math.round(impuestosScore + deudaScore + bonosScore),
    100,
  );
  return totalScore;
};

// Función para calcular la deuda total en miles de millones
const calculateTotalDebt = (dataObj) => {
  const total = dataObj.deudas_noboa.reduce((sum, debt) => {
    if (debt.cantidad === "No especificado") return sum;
    const monto =
      typeof debt.cantidad === "string"
        ? parseFloat(debt.cantidad.replace(/\D/g, ""))
        : debt.cantidad;
    return sum + monto;
  }, 0);
  return (total / 1e9).toFixed(2);
};

function App() {
  const barometroLevel = calculateBarometer(data);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Impuestos", icon: "" },
    { id: 1, label: "Endeudamiento", icon: "" },
    { id: 2, label: "Bonos", icon: "" },
  ];

  const tabContent = [
    {
      title: `Impuestos Nuevos/Modificados (${data.impuestos_noboa.length})`,
      component: <Impuestos data={data.impuestos_noboa} />,
    },
    {
      title: "Endeudamiento Externo",
      component: <Deudas data={data.deudas_noboa} />,
    },
    {
      title: "Bonos y Programas de Transferencia",
      component: <BonosyAyudas data={data.bonos_y_ayudas} />,
    },
  ];

  return (
    <>
      <NavBar />

      <main className=" w-full grid lg:grid-cols-2 p-2 md:p-6 lg:p-8 pt-25 md:pt-20 md:grid-cols-1 gap-4 lg:pt-16 z-20  mx-auto">
        {/* SECCIÓN 1: ANÁLISIS IDEOLÓGICO */}
        <section className="flex items-center justify-center">
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 md:p-10 lg:p-5 rounded-2xl border border-gray-700 shadow-2xl hover:shadow-3xl transition-shadow duration-300 lg:w-[700px]">
            <h2 className="text-xl md:text-4xl lg:text-xl font-bold text-white mb-3 flex items-center gap-3">
              Análisis Ideológico
            </h2>
            <RandAnalysis />
          </div>
        </section>

        {/* SECCIÓN 2: BARÓMETRO E ÍNDICE */}
        <section className="md:pt-6">
          <div className="mb-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black p-5 md:p-10 lg:p-3 rounded-2xl border border-gray-700 shadow-2xl hover:shadow-3xl transition-shadow duration-300  text-center  hover:shadow-3xl ">
            <p className="text-white text-left font-black text-xl md:text-2xl lg:text-xl  tracking-tight">
              Verdugo de Turno
            </p>
            <div className="flex gap-12 justify-center items-center flex-col">
              <div className="flex flex-col mb-4 items-center">
                <img
                  className="rounded-full border-4 border-white w-24 h-24 md:w-32 md:h-32 lg:w-20 lg:h-20 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                  src="https://www.metroecuador.com.ec/resizer/v2/QKXLTQNLD5AOLIHKTNU7N5CH6E.jpg?auth=7ca55d9cdc3c1f20d01bd7387d01fbc6a4899116b5342145aea8d519e90183b9&width=800&height=533"
                  alt="foto Daniel Noboa"
                />
                <p className="font-black text-lg md:text-2xl lg:text-lg text-white tracking-tight">
                  Daniel Noboa
                </p>
              </div>

            </div>
            {/* ESTADÍSTICAS RESUMEN */}
            <div className="mb-2 mt-2 col-span-2">
              <div className="flex w-full items-center justify-center gap-12 divide-x divide-neutral-500">
                <div className=" text-center p-2 md:p-8 lg:p-2   hover:shadow-2xl transition-all duration-300  shadow-lg hover:scale-105 hover:from-yellow-800">
                  <p className="text-yellow-300 text-xl md:text-xl lg:text-xl font-black">
                    + {data.impuestos_noboa.length}
                  </p>
                  <p className="text-gray-300 text-sm md:text-base lg:text-sm mt-1 font-medium">
                    Impuestos
                  </p>
                </div>
                <div className=" p-2 md:p-8 lg:p-2  text-center hover:shadow-2xl transition-all duration-300  shadow-lg hover:scale-105 hover:from-orange-800">
                  <p className="text-orange-300 text-xl md:text-xl lg:text-xl font-black">
                    + ${calculateTotalDebt(data)}B
                  </p>
                  <p className="text-gray-300 text-sm md:text-base lg:text-sm mt-1 font-medium">
                     Deuda{" "}
                  </p>
                </div>
                <div className=" p-2 md:p-8 lg:p-2  text-center hover:shadow-2xl transition-all duration-300  border-green-800 shadow-lg hover:scale-105 hover:from-green-800">
                  <p className="text-green-300 text-xl md:text-xl lg:text-xl font-black">
                    + $126M
                  </p>
                  <p className="text-gray-300 text-sm md:text-base lg:text-sm mt-1 font-medium">
                    En Bonos
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {/* Botones de Tabs */}
            <div className="flex gap-3 mb-4 flex-wrap items-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm md:text-base whitespace-nowrap transition-all duration-300 border ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-yellow-400 shadow-lg shadow-yellow-500/50"
                      : "bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700 hover:border-gray-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenido del Tab Active */}
            <div className="transition-all duration-300 opacity-100 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg">
              <div className="p-6 md:p-8 lg:p-10 rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                {tabContent[activeTab].component}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
