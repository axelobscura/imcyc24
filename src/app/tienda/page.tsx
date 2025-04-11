//FLOWBITE - https://flowbite.com/docs/components/navbar/

export default function Tienda() {
  const libros = [
    {
      id: "1",
      tipo: "EXPERTOS",
      titulo: "MANUAL DE PISOS POSTENSADOS 2",
      imagen: "libro_pisos_postentados2.jpg",
      archivo: "libro_pisos_postentados2.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
    {
      id: "2",
      tipo: "EXPERTOS",
      titulo: "MANUAL EL CONCRETO EN LA GEOTECNÍA",
      imagen: "el_concreto_en_la_geotecnica.jpg",
      archivo: "el_concreto_en_la_geotecnica.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
    {
      id: "3",
      tipo: "EMPRESAS",
      titulo: "MANUAL DE PISOS POSTENSADOS 1",
      imagen: "libro_pisos_postentados1.jpg",
      archivo: "libro_pisos_postentados1.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
    {
      id: "4",
      tipo: "EXPERTOS",
      titulo: "MANUAL EVOLUCIÓN Y GESTIÓN ESTRUCTURAL DE UN PROYECTO",
      imagen: "manual_evolucion_y_gestion_estructural_de_un_proyecto.png",
      archivo: "manual_evolucion_y_gestion_estructural_de_un_proyecto.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
    {
      id: "5",
      tipo: "EXPERTOS",
      titulo: "PAVIMENTOS DE CONCRETO",
      imagen: "pavimentos_de_concreto.jpg",
      archivo: "pavimentos_de_concreto.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
    {
      id: "6",
      tipo: "MANUALES",
      titulo: "ANÁLISIS Y DISEÑO ESTRUCTURAL PISOS INDUSTRIALES",
      imagen: "analisis_y_diseno_estructural_pisos.jpg",
      archivo: "analisis_y_diseno_estructural_pisos.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
    {
      id: "7",
      tipo: "MANUALES",
      titulo: "MANUAL DE EVALUACIÓN FORENSE ESTRUCTURAS DE CONCRETO",
      imagen: "manual_de_evaluacion_forense.jpg",
      archivo: "manual_de_evaluacion_forense.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
    {
      id: "8",
      tipo: "MANUALES",
      titulo: "MANUAL DE INSPECCIÓN Y MANTENIMIENTO DE PUENTES DE CONCRETO",
      imagen: "inspeccion_de_puentes.jpg",
      archivo: "inspeccion_de_puentes.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
    {
      id: "9",
      tipo: "MANUALES",
      titulo: "MANUAL DE MANTENIMIENTO Y REPARACIÓN DE PISOS INDUSTRIALES",
      imagen: "manual_de_mantenimiento_de_pisos.jpg",
      archivo: "manual_de_mantenimiento_de_pisos.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
    {
      id: "10",
      tipo: "MANUALES",
      titulo:
        "EVALUACIÓN DE CAUSAS Y RECOMENDACIONES AGRIETAMIENTOS EN MUROS DE VIVIENDA",
      imagen: "manual_de_viviendas.jpg",
      archivo: "manual_de_viviendas.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
    {
      id: "11",
      tipo: "LIBRO",
      titulo: "ACCIÓN DE LOS AGENTES QUÍMICOS Y FÍSICOS SOBRE EL CONCRETO",
      imagen:
        "ACCION_DE_LOS_AGENTES_QUIMICOS_Y_FISICOS_SOBRE_EL_CONCRETO_CONSULTA.jpg",
      archivo:
        "ACCION_DE_LOS_AGENTES_QUIMICOS_Y_FISICOS_SOBRE_EL_CONCRETO_PRESERVACION.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "120.00",
    },
    {
      id: "12",
      tipo: "LIBRO",
      titulo: "CORROSIÓN EN ESTRUCTURAS DE CONCRETO ARMADO CONSULTA",
      imagen: "CORROSION_EN_ESTRUCTURAS_DE_CONCRETO_ARMADO_CONSULTA.jpg",
      archivo:
        "CORROSION_EN_ESTRUCTURAS_DE_CONCRETO_ARMADO_PRESERVACION.pdf",
      checkoutId: "1bbe0be29d664bd6a90172a84d96e2ba",
      precio: "200.00",
    },
    {
      id: "13",
      tipo: "LIBRO",
      titulo:
        "MANUAL DE IDENTIFICACION PRACTICAS DE MINERALES Y ROCAS PARA SU USO COMO AGREGADOS PARA CONCRETO",
      imagen:
        "MANUAL_DE_IDENTIFICACION_PRACTICAS_DE_MINERALES_Y_ROCAS_PARA_SU_USO_COMO_AGREGADOS_PARA_CONCRETO_CONSULTA.jpg",
      archivo:
        "MANUAL_DE_IDENTIFICACION_PRACTICAS_DE_MINERALES_Y_ROCAS_PARA_SU_USO_COMO_AGREGADOS_PARA_CONCRETO_PRESERVACION.pdf",
      checkoutId: "de70137feb954a0d95856be2364158e1",
      precio: "400.00",
    },
    {
      id: "14",
      tipo: "LIBRO",
      titulo: "SUELO CEMENTO CONSULTA",
      imagen: "SUELO_CEMENTO_CONSULTA.jpg",
      archivo: "SUELO_CEMENTO_PRESERVACION.pdf",
      checkoutId: "85b96178b4e74b51bd38de03c344c140",
      precio: "240.00",
    },
    {
      id: "15",
      tipo: "LIBRO",
      titulo:
        "DURABILIDAD DE ESTRUCTURAS DE CONCRETO EN_MÉXICO CONSULTA.jpg",
      imagen:
        "DURABILIDAD_DE_ESTRUCTURAS_DE_CONCRETO_EN_MEXICO_CONSULTA.jpg",
      archivo:
        "DURABILIDAD_DE_ESTRUCTURAS_DE_CONCRETO_EN_MEXICO_PRESERVACION.pdf",
      checkoutId: "78fb39bfc29e4dac91bfbea31f790918",
      precio: "250.00",
    },
    {
      id: "16",
      tipo: "LIBRO",
      titulo: "EVALUACION DE ESTRUCTURAS DE CONCRETO.jpg",
      imagen: "EVALUACION_DE_ESTRUCTURAS_DE_CONCRETO_CONSULTA.jpg",
      archivo: "EVALUACION_DE_ESTRUCTURAS_DE_CONCRETO_PRESERVACION.pdf",
      checkoutId: "9303b0583d904f73ac6baf726fedbada",
      precio: "300.00",
    },
    {
      id: "17",
      tipo: "LIBRO",
      titulo: "TEMAS FUNDAMENTALES DEL CONCRETO PRESFORZADO CONSULTA.jpg",
      imagen: "TEMAS_FUNDAMENTALES_DEL_CONCRETO_PRESFORZADO_CONSULTA.jpg",
      archivo:
        "TEMAS_FUNDAMENTALES_DEL_CONCRETO_PRESFORZADO_PRESERVACION.pdf",
      checkoutId: "98d5cc24c9cc4287b1b5126c656075f1",
      precio: "390.00",
    },
    {
      id: "18",
      tipo: "LIBRO",
      titulo: "CONCRETO PARA TÉCNICOS DE LA CONSTRUCCIÓN CONSULTA.jpg",
      imagen: "CONCRETO_PARA_TECNICOS_DE_LA_CONSTRUCCION_CONSULTA.jpg",
      archivo: "CONCRETO_PARA_TECNICOS_DE_LA_CONSTRUCCION_PRESERVACION.pdf",
      checkoutId: "7dfa6c7fb7ee4b3980b94de30e603710",
      precio: "305.00",
    },
    {
      id: "19",
      tipo: "LIBRO",
      titulo: "EDIFICIOS ALTOS CONSTRUIDOS EN MEXICO CONSULTA.jpg",
      imagen: "EDIFICIOS_ALTOS_CONSTRUIDOS_EN_MEXICO_CONSULTA.jpg",
      archivo: "EDIFICIOS_ALTOS_CONSTRUIDOS_EN_MEXICO_PRESERVACION.pdf",
      checkoutId: "8f4cb7f483a34a4ab5e6cdd663b27da1",
      precio: "200.00",
    },
    {
      id: "20",
      tipo: "LIBRO",
      titulo:
        "GUIA PARA EL ANALISIS Y DISENO SISMICO DE LAS ESTRUCTURAS DE CONCRETO REFORZADO PARA CONTENER LIQUIDOS CONSULTA.jpg",
      imagen:
        "GUIA_PARA_EL_ANALISIS_Y_DISENO_SISMICO_DE_LAS_ESTRUCTURAS_DE_CONCRETO_REFORZADO_PARA_CONTENER_LIQUIDOS_CONSULTA.jpg",
      archivo:
        "GUIA_PARA_EL_ANALISIS_Y_DISENO_SISMICO_DE_LAS_ESTRUCTURAS_DE_CONCRETO_REFORZADO_PARA_CONTENER_LIQUIDOS_PRESERVACION.pdf",
      checkoutId: "9567629da9c54a2f9c17be0468a87d88",
      precio: "365.00",
    },
    {
      id: "21",
      tipo: "LIBRO",
      titulo:
        "INFRAESTRUCTURA DE CONCRETO ARMADO DETERIORO Y OPCIONES DE PRESERVACION CONSULTA.jpg",
      imagen:
        "INFRAESTRUCTURA_DE_CONCRETO_ARMADO_DETERIORO_Y_OPCIONES_DE_PRESERVACION_CONSULTA.jpg",
      archivo:
        "INFRAESTRUCTURA_DE_CONCRETO_ARMADO_DETERIORO_Y_OPCIONES_DE_PRESERVACION_PRESERVACION.pdf",
      checkoutId: "43400845b6614c86a6976e22fb487617",
      precio: "160.00",
    },
    {
      id: "22",
      tipo: "PUBLICACION",
      titulo: "EVALUACION DE ESTRUCTURAS DE CONCRETO.jpg",
      imagen: "t1.png",
      archivo: "IT1.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "23",
      tipo: "PUBLICACION",
      titulo: "EVALUACION DE ESTRUCTURAS DE CONCRETO.jpg",
      imagen: "t2.png",
      archivo: "IT2.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "24",
      tipo: "PUBLICACION",
      titulo: "EVALUACION DE ESTRUCTURAS DE CONCRETO.jpg",
      imagen: "n1.png",
      archivo: "NE1.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "25",
      tipo: "PUBLICACION",
      titulo: "EVALUACION DE ESTRUCTURAS DE CONCRETO.jpg",
      imagen: "n2.png",
      archivo: "NE2.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "26",
      tipo: "PUBLICACION",
      titulo: "EVALUACION DE ESTRUCTURAS DE CONCRETO.jpg",
      imagen: "n3.png",
      archivo: "NE3.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "27",
      tipo: "AUTOCONSTRUCCION",
      titulo: "SERIE DE AUTO CONSTRUCCIÓN 1",
      imagen: "manual_de_auto_construccion1.jpg",
      archivo: "manual_de_auto_construccion1.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "28",
      tipo: "AUTOCONSTRUCCION",
      titulo: "SERIE DE AUTO CONSTRUCCIÓN 2",
      imagen: "manual_de_auto_construccion2.jpg",
      archivo: "manual_de_auto_construccion2.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "29",
      tipo: "LABORATORIO",
      titulo:
        "ANÁLISIS Y GUÍA DE ESTUDIO PARA LAS PRUEBAS BÁSICAS AL CONCRETO EN ESTADO FRESCO",
      imagen:
        "analisis_y_guia_de_estudio_para_las_pruebas_basicas_al_concreto_en_estado_fresco.jpg",
      archivo:
        "analisis_y_guia_de_estudio_para_las_pruebas_basicas_al_concreto_en_estado_fresco.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "30",
      tipo: "LABORATORIO",
      titulo:
        "ANÁLISIS Y GUÍA DE ESTUDIO PARA TÉCNICO EN PRUEBAS DE AGREGADOS",
      imagen:
        "analisis_y_guia_de_estudio_para_tecnico_en_pruebas_de_agregados.jpg",
      archivo:
        "analisis_y_guia_de_estudio_para_tecnico_en_pruebas_de_agregados.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "31",
      tipo: "LABORATORIO",
      titulo:
        "ANÁLISIS Y GUÍA DE ESTUDIO PARA TÉCNICO EN PRUEBAS DE CEMENTO",
      imagen:
        "analisis_y_guia_de_estudio_para_tecnico_en_pruebas_de_cemento.jpg",
      archivo:
        "analisis_y_guia_de_estudio_para_tecnico_en_pruebas_de_cemento.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "32",
      tipo: "LABORATORIO",
      titulo:
        "ANÁLISIS Y GUÍA DE ESTUDIO PARA TÉCNICO EN PRUEBAS DE RESISTENCIA",
      imagen:
        "analisis_y_guia_de_estudio_para_tecnico_en_pruebas_de_resistencia.jpg",
      archivo:
        "analisis_y_guia_de_estudio_para_tecnico_en_pruebas_de_resistencia.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "33",
      tipo: "LABORATORIO",
      titulo: "GUÍA PARA TÉCNICO LABORATORISTA NIVEL 2",
      imagen: "guia_para_tecnico_laboratorista_nivel_2.jpg",
      archivo: "guia_para_tecnico_laboratorista_nivel_2.pdf",
      checkoutId: null,
      precio: null,
    },
    {
      id: "34",
      tipo: "SOSTENIBILIDAD",
      titulo: "MANUAL DE DE DISEÑO BIOCLIMÁTICO 1",
      imagen: "manual_de_diseno_bioclimatico1.jpg",
      archivo: "manual_de_diseno_bioclimatico1.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
    {
      id: "35",
      tipo: "SOSTENIBILIDAD",
      titulo: "MANUAL DE DE DISEÑO BIOCLIMÁTICO 2",
      imagen: "manual_de_diseno_bioclimatico2.jpg",
      archivo: "manual_de_diseno_bioclimatico2.pdf",
      checkoutId: "22592ccd527a4d0aa49e767a037bc3e1",
      precio: "150.00",
    },
  ];

  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <main className="grid grid-cols-5 gap-8 row-start-2 items-center sm:items-start z-0" style={{
          marginTop: "100px",
          marginBottom: "100px",
          padding: "20px",
        }}>
          {libros
            .filter((libro) => libro.tipo !== "PUBLICACION")
            .map((libro) => (
              <div
                key={libro.id}
                className="flex flex-col sm:flex-col gap-3 items-center justify-center bg-gray-800 bg-opacity-80 rounded-lg p-4 shadow-lg w-full max-w-[600px]"
              > 
                <img
                  src={`https://libreriaimcyc.com/images/libros/${libro.imagen}`}
                  alt={libro.titulo}
                  className="w-full object-cover rounded-lg"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold text-white">{libro.titulo}</h2>
                  <p className="text-gray-300">Tipo: {libro.tipo}</p>
                  <p className="text-gray-300">Precio: ${libro.precio}</p>
                  <a
                    href={`/libros/${libro.archivo}`}
                    download
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    COMPRAR
                  </a>
                </div>
              </div>
            ))}
        </main>
      </div>
    </div>
  );
}
