const data = {
  impuestos_noboa: [
    {
      nombre: "Incremento del IVA",
      descripcion:
        "El IVA subió del 12% al 15% a partir de abril de 2024, mediante el Decreto 198 y ratificado en 2025 con el Decreto 470.",
      fuente:
        "https://www.eluniverso.com/noticias/economia/sube-el-iva-al-15-por-ciento-en-ecuador-desde-abril-de-2024-nota/",
    },
    {
      nombre: "Incremento del ISD",
      descripcion:
        "El Impuesto a la Salida de Divisas subió de 3,5% a 5% en abril de 2024. Luego fue reducido a 0% en enero de 2025 y ajustado a 2,5% desde abril de 2025.",
      fuente:
        "https://www.primicias.ec/noticias/economia/isd-impuesto-salida-divisas-reduccion/",
    },
    {
      nombre: "Impuestos temporales a empresas y bancos",
      descripcion:
        "Incluyen autorretención del Impuesto a la Renta a grandes contribuyentes, contribución temporal de seguridad a empresas con utilidades en 2022 y contribuciones especiales a bancos y cooperativas.",
      fuente:
        "https://www.eluniverso.com/noticias/economia/reforma-tributaria-daniel-noboa-impuestos-empresas-bancos-nota/",
    },
    {
      nombre: "Impuesto a vehículos usados (Ley Antipillos)",
      descripcion:
        "Impuesto de 0,75% a 5% aplicado en la matriculación de vehículos usados de alto valor. Anulado por la Corte Constitucional en enero de 2025.",
      fuente:
        "https://www.primicias.ec/noticias/economia/ley-antipillos-impuesto-vehiculos-derogada/",
    },
    {
      nombre: "Arancel del 27% a productos importados desde México",
      descripcion:
        "Desde febrero de 2025, se impuso un arancel del 27% a bienes importados desde México, como medida de presión en negociaciones comerciales.",
      fuente:
        "https://elpais.com/america/2025-02-03/ecuador-anuncia-que-impondra-el-27-de-aranceles-a-las-importaciones-mexicanas.html",
    },
    {
      nombre: "Impuesto a la venta de bienes inmuebles",
      descripcion:
        "Desde enero de 2024, se aplica Impuesto a la Renta sobre la ganancia en la venta de bienes inmuebles (viviendas, oficinas, locales, terrenos), tanto para personas naturales como jurídicas. Se eliminó la exoneración previa de una venta libre cada cinco años para personas naturales.",
      fuente:
        "https://www.primicias.ec/noticias/economia/reforma-tributaria-viviendas-oficinas-locales/",
    },

    {
      nombre: "Tarifa arancelaria de $20 a las compras por internet",
      descripcion:
        " Tarifa arancelaria de $20 para los paquetes enviados a través del sistema 4x4 mediante servicios de courier o mensajería acelerada..",
      fuente:
        "https://www.expreso.ec/actualidad/economia/nueva-tarifa-20-afectara-envios-courier-sistema-4x4-junio-2025-244621.html",
    },
    {
      nombre: "Fiscalización del SRI a la venta de acciones",
      descripcion:
        "El gobierno de Daniel Noboa impulsó una fiscalización masiva a la compraventa de acciones. El SRI exige el pago del 10 % del Impuesto a la Renta Única (IRU) sobre las ganancias obtenidas por estas transacciones. Se identificaron más de 6 000 contribuyentes como posibles evasores, y se espera recaudar USD 50 millones. Las operaciones ficticias o subvaloradas serán sancionadas, incluso penalmente.",
      fuente:
        "https://www.elcomercio.com/actualidad/negocios/gobierno-ecuador-anuncia-fiscalizacion-utilidades-compra-venta-acciones/",
    },
  ],
  deudas_noboa: [
    {
      entidad: "Fondo Monetario Internacional (FMI)",
      antidad: "4000000000",
      Descripción:
        "Crédito principal aprobado en 2024 para enfrentar el déficit fiscal. Se suma un crédito puente adicional de 9 meses solicitado para evitar problemas de liquidez en 2026–2027.",
      Fuente:
        "https://www.bloomberglinea.com/2024/05/31/ecuador-pide-prestamo-puente-al-fmi-para-evitar-problemas-de-liquidez/",
    },
    {
      entidad: "Créditos Externos Totales (varias entidades multilaterales)",
      antidad: "4383000000",
      Descripción:
        "Créditos recibidos entre enero y noviembre de 2024. El 90% se usó para amortización de deuda previa, y el 10% para cubrir déficit fiscal.",
      Fuente:
        "https://www.primicias.ec/noticias/economia/ecuador-deuda-externa-gasto-amortizacion/",
    },
    {
      entidad: "Bancos chinos (en evaluación)",
      antidad: "No especificado",
      Descripción:
        "Se están negociando nuevos préstamos con bancos chinos para inversión e infraestructura. No se han confirmado montos ni fechas de desembolso.",
      Fuente:
        "https://www.bloomberglinea.com/2024/05/21/ecuador-busca-financiamiento-en-china-ante-falta-de-liquidez/",
    },
  ],

  bonos_y_ayudas: [
    {
      nombre: "Jóvenes en Acción",
      descripcion:
        "Pago de USD 400 mensuales por 5 meses a jóvenes de 18 a 29 años que realicen labores comunitarias.",
      fuente:
        "https://www.primicias.ec/noticias/sociedad/bono-jovenes-accion-daniel-noboa/",
      gasto_total: 48000000,
    },
    {
      nombre: "Ecuatorianos en Acción",
      descripcion:
        "Transferencia de USD 400 mensuales durante 2 meses para personas de 30 a 64 años en provincias afectadas por el Fenómeno de El Niño.",
      fuente:
        "https://www.primicias.ec/noticias/economia/bono-ecuador-accion-monto-fecha-inscripcion/",
      gasto_total: 16000000,
    },
    {
      nombre: "Incentivo Emprende",
      descripcion:
        "Bono único de USD 1.000 para emprendimientos y negocios populares afectados por eventos naturales.",
      fuente:
        "https://www.elcomercio.com/actualidad/negocios/gobierno-anuncia-incentivo-emprende-bono-mil-dolares.html",
      gasto_total: 10000000,
    },
    {
      nombre: "Bono CATTA-Nuevo Ecuador",
      descripcion:
        "Transferencia única de USD 800 para pequeños y medianos productores agropecuarios afectados por lluvias.",
      fuente:
        "https://www.primicias.ec/noticias/economia/bono-agricultores-afectados-catastres-climaticas/",
      gasto_total: 8000000,
    },
    {
      nombre: "Bono de arrendamiento por emergencia",
      descripcion:
        "Subsidio mensual de USD 235 por hasta 6 meses para familias que perdieron su vivienda por desastres naturales.",
      fuente:
        "https://www.elcomercio.com/actualidad/ecuador/bono-arrendamiento-emergencia-invierno-ecuador.html",
      gasto_total: 2000000,
    },
    {
      nombre: "Bono para militares y policías",
      descripcion:
        "Bono único de aproximadamente USD 507 para miembros de la fuerza pública que participaron en el conflicto interno armado.",
      fuente:
        "https://www.eluniverso.com/noticias/politica/bono-para-miembros-de-las-fuerzas-armadas-y-la-policia-nacional-que-participaron-en-conflicto-armado-interno-nota/",
      gasto_total: 30000000,
    },
    {
      nombre: "Bono 1.000 Días",
      descripcion:
        "Apoyo económico de USD 50 mensuales para mujeres embarazadas y madres de niños menores de 3 años.",
      fuente:
        "https://www.elcomercio.com/actualidad/ecuador/bono-1000-dias-embarazadas-ecuador.html",
      gasto_total: 12000000,
    },
  ],
};

export default data;
