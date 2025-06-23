import "./App.css";
import logo_jaguar from "./assets/bg-yellow-jaguar-no-text.jpeg";

import data from "./data/data.js";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Impuestos from "./components/Impuestos";
import Deudas from "./components/Deudas.jsx";
import BonosyAyudas from "./components/BonosyAyudas.jsx";
import Zurdobarometro from "./components/ZurdoBarometro";
function App() {
  const [categorias, setCategorias] = useState(0);

  const arr = [
    <Impuestos data={data.impuestos_noboa} />,
    <Deudas data={data.deudas_noboa} />,<BonosyAyudas data={data.bonos_y_ayudas} />
  ];
  console.log("categorias", categorias);
  

  return (
    <>
      <NavBar />

      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-3 z-1"
        src={logo_jaguar}
        alt="logo jaguar"
      />

      <main className="relative w-full  p-2 pt-20 z-20">
        <div>
          <div className="flex font-fm-family-Kumbh-Sans justify-center items-center gap-3">
            <p>Como identificar a un zurdo/resentido social?</p>
          
          </div>
          <ol className="my-3 grid  grid-cols-2 gap-2">
            <li className="p-2 bg-neutral-100 border border-neutral-200 text-xs  rounded-md text-neutral-700">
              <span className="text-black">1. </span><b>Habla de “los ricos” como los malos</b> <br /> Siempre dice
              que los millonarios joden al pueblo.
            </li>
           <li className="p-2 bg-neutral-100 border border-neutral-200 text-xs  rounded-md text-neutral-700">
              <span>2. </span>
              <b>Promete todo “gratis” </b><br />
              Salud, educación, bonos… como si el dinero saliera de un árbol.
            </li>
          <li className="p-2 bg-neutral-100 border border-neutral-200  text-xs  rounded-md text-neutral-700">
              <span>3. </span><b>Sube impuestos a lo bestia</b> <br /> Según ellos, “los que
              más tienen deben pagar más”... pero joden a todos.
            </li>
           <li className="p-2 bg-neutral-100 border border-neutral-200 text-xs  rounded-md text-neutral-700">
              <span>4. </span><b>Ama al Estado</b>  <br /> Cree que el gobierno tiene que
              meterse en todo y controlar todo.
            </li>
           <li className="p-2 bg-neutral-100 border border-neutral-200 text-xs  rounded-md text-neutral-700">
              <span>5. </span><b>Culpa al “imperio” o al capitalismo </b> <br />  Todo lo malo
              es culpa de EE.UU., de los bancos, o de los empresarios.
            </li>
             <li className="p-2 bg-neutral-100 border border-neutral-200 text-xs  rounded-md text-neutral-700">
              <span>6. </span><b>No le gusta la empresa privada</b>  <br /> Si puede, las
              estatiza o las exprime con regulaciones.
            </li>
            <li className="p-2 bg-neutral-100 border border-neutral-200 text-xs  rounded-md text-neutral-700">
              <span>7. </span><b>Promueve luchas de clases </b> <br /> Divide a la gente:
              pueblo vs. élites, pobres vs. ricos.
            </li>
          <li className="p-2 bg-neutral-100 border border-neutral-200 text-xs  rounded-md text-neutral-700">
              <span>8. </span><b>Le gusta endeudar al país </b> <br /> Se gasta todo en
              subsidios, bonos y campañas, y luego tu pagas la factura de ese gasto.
            </li>
          </ol>
        </div>
     <div className="bg-black mt-12 p-4 rounded-sm text-center">  <p className=" text-white font-bold font-fm-family-Kumbh-Sans">Calificación de Daniel Noboa</p></div>
        <div className="flex w-full flex-col md:flex-row justify-center items-center mt-8  ">
          <div className="flex flex-col items-center ">
            <img
              className="rounded-full border-3 border-neutral-300 w-20 h-20 object-cover"
              src="https://www.metroecuador.com.ec/resizer/v2/QKXLTQNLD5AOLIHKTNU7N5CH6E.jpg?auth=7ca55d9cdc3c1f20d01bd7387d01fbc6a4899116b5342145aea8d519e90183b9&width=800&height=533"
              alt="foto Daniel Noboa"
            />
            <p className="font-bold text-xl ">Daniel Noboa</p>
          </div>
          <Zurdobarometro nivel={98} />
        </div>


          <ul className="  w-full text-center mt-12 grid grid-cols-3 border-b border-b-yellow-logo-950 rounded-tl-md rounded-tr-md text-sm font-bold text-yellow-logo-950">
            <li onClick={() => setCategorias(0)} className="h-[56px] bg-yellow-logo-300 p-1 py-2 flex justify-center items-center rounded-tl-md active:bg-yellow-logo-600 hover:cursor-pointer">Impuestos</li>
            <li onClick={() => setCategorias(1)}  className="bg-yellow-logo-300 h-[56px] p-1 py-2 flex justify-center items-center  active:bg-yellow-logo-600 hover:cursor-pointer" >Endeudamiento</li>
            <li onClick={() => setCategorias(2)} className="bg-yellow-logo-300 h-[56px] p-1 py-2 flex justify-center items-center rounded-tr-md active:bg-yellow-logo-600 hover:cursor-pointer">Dinero gratis(Bonos)</li>
          </ul>
         <section className="w-full py-4  px-4 bg-yellow-logo-300  ">
          {arr[categorias]}
        </section>
      </main>
      <footer className="text-center bottom-0 p-2">
        <p>
          made by <span className="text-white font-bold">kevin344k</span>
        </p>
      </footer>
    </>
  );
}

export default App;
