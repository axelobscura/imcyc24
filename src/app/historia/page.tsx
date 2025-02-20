import CardHorizontal from "../components/Card";

export default function Historia() {

  const historia = [
    {
      "ano": "2024",
      "descripcion": "Ampliación de la Acreditación en <strong>Análisis Químico de Agua para Fabricación de Concreto y como Laboratorio de calibración de temperatura</strong>.",
      "imagen": "/historia/2020.jpg"
    },
    {
      "ano": "2022",
      "descripcion": "El PEA cumple 15 años acreeditado.",
      "imagen": "/historia/2021.jpg"
    },
    {
      "ano": "2021",
      "descripcion": "Se amplió el alcance acreditado del laboratorio para ensayar concreto reforzado con fibras. Se implementaron los métodos de prueba estáticos para durmientes de concreto.",
      "imagen": "/historia/2020.jpg"
    },
    {
      "ano": "2019 | Sesenta Aniversario",
      "descripcion": "<strong>El IMCYC surgió en 1923</strong> como un «Comité para Propagar el Uso del Cemento Portland». Ya en 1959 se constituyó como Instituto Mexicano del Cemento y del Concreto, A.C., <strong>con el objetivo de investigar y promover métodos constructivos y soluciones técnicas que permitan un uso más económico y racional del concreto en la construcción</strong>, para ofrecer el concreto al diseñador, al constructor y al propietario como la alternativa más ventajosa frente al empleo de otros materiales, además de crear más y mejores satisfactores para los asociados y sus clientes.<br/><br/>Se obtuvo la acreditación del OCP.",
      "imagen": "/historia/2019.jpg"
    },
    {
      "ano": "2018",
      "descripcion": "Luego de un turbulento, sorpresivo y dinámico año, nos preparamos para bajar la cortina del 2018 con la última edición de nuestra revista. Este número lo hemos dedicado, primordialmente, a la supervisión de obra, un tema que resulta fundamental porque es en esta área que recae, quizá, la responsabilidad más grande a la hora de “cortar el listón” de una obra, sea esta pequeña, mediana, grande o de infraestructura.",
      "imagen": "/historia/2018_1.jpg"
    },
    {
      "ano": "2017",
      "descripcion": "IMCYC inicia este 2017 con una gran transformación, entusiasmo y con grandes celebraciones. No sólo estamos estrenando y poniendo a su disposición instalaciones de capacitación y de laboratorios totalmente renovadas y con excelente estándares de calidad para darles un mejor servicio y confort, sino que además cumpliremos 58 años de haber sido fundados y de servir a la industria del cemento y del concreto. Años llenos de experiencia, crecimiento, aprendizaje y de desarrollo para que cada uno de nuestros servicios sea cada vez más eficiente, de calidad y con el propósito de ser un organismo que de soluciones y alternativas a la industria.",
      "imagen": "/historia/2017.jpg"
    },
    {
      "ano": "2016",
      "descripcion": "Con gran orgullo este 2016 el IMCYC cumplió 57 años de haber sido fundado y de servir a la industria del cemento y del concreto. Años llenos de experiencia, crecimiento, aprendizaje y de desarrollo para que cada uno de nuestros servicios sea cada vez más eficiente, de calidad y con el propósito de ser un organismo que de soluciones y alternativas a la industria. En este año se consolidan y refuerzan una serie de cambios que han dado lugar a la evolución y crecimiento del IMCYC para seguir siendo a nivel nacional e internacional, el organismo que aglutine y promueva los intereses de las empresas del sector.",
      "imagen": "/historia/2016.jpg"
    },
    {
      "ano": "2015",
      "descripcion": "LLEGA ESTE 2015 como un año lleno de retos por cumplir y dificultades por remontar. Tras un 2014 que estuvo lleno de incertidumbres y cambios, el año que comienza promete ser uno de oportunidades y logros.<br/><br/>Durante este año el IMCYC cumplir, con gran orgullo, 56 años de haber sido fundado y de servir a la industria del cemento y del concreto. Años llenos de experiencia, crecimiento, aprendizaje y de desarrollo para que nuestro historial de prestigio, calidad y opinión siga siendo respetada y buscada. Para que cada uno de nuestros servicios sean cada vez más eficientes y finalmente, para que se consolide al instituto a nivel nacional e internacional como el organismo que armonice los intereses de nuestros clientes y la industria.",
      "imagen": "/historia/2015.jpg"
    },
    {
      "ano": "2014",
      "descripcion": "El año pasado nuestra revista cumplió 50 años de haber nacido como un sencillo Boletín. Hoy les presentamos con mucho orgullo una imagen renovada que busca, desde los más diversos ángulos, ser un órgano difusor de las bondades, innovaciones y tecnologías de nuestro material preferido: el concreto. Así, Construcción y Tecnología en Concreto, presenta a partir de este mes de enero de 2014, un diseño que ofrece secciones claramente diferenciadas; elementos de diseño para una lectura más fácil para guiar al lector de manera más directa, a la información. Busca, asimismo, complementar los artículos con bellas fotografías y gráficos de gran calidad. En cuanto a los temas, buscamos ampliar el amplio escaparate de secciones con el fin de focalizar y especializar los múltiples tópicos que devienen de nuestros principales protagonistas: el cemento y el concreto. Esperamos que esta visión renovada de nuestra querida revista, sea de su agrado.",
      "imagen": "/historia/2014.jpg"
    },
    {
      "ano": "2013",
      "descripcion": "En el mes de enero de 1963, hace exactamente cincuenta años, el Instituto Mexicano del Cemento y del Concreto A.C. –que ese a.o cumplía cuatro a.os de haber sido fundado− iniciaba un nuevo proyecto vinculado no s.lo al mundo del concreto, sino dentro del campo editorial. Nacía as. la Revista del IMCYC, una publicación que buscaba presentar a sus lectores, aspectos importantes dentro del sector en que el Instituto había emanado.",
      "imagen": "/historia/2013.jpg"
    },
    {
      "ano": "2012",
      "descripcion": "Después del reciente sismo acaecido el 10 de diciembre del aЦo pasado, –cuyo epicentro fue localizado en el estado de Guerrero–, qué mejor que tener en nuestra portada a un experto en el tema, el dr. Roberto Meli Piralla, reconocido en México y en el extranjero como uno de los más importantes especialistas en el tema de sismos y rehabilitación de inmuebles dañados por este tipo de fenómenos de la naturaleza. Décadas de arduo trabajo de investigación –dispuesta ésta en la teoría y en la práctica– avalan la labor del doctor Meli, a quien le agradecemos que nos haya permitido entrevistarlo para conocer un poco más del tema del cual es especialista.",
      "imagen": "/historia/2012.jpg"
    },
    {
      "ano": "2011",
      "descripcion": "En el marco del Foro Internacional del Concreto 2011, El IMCYC organiza por primera vez en México el “Primer concurso Nacional de Diseño de mezclas”.",
      "imagen": "/historia/2011.jpg"
    },
    {
      "ano": "2010",
      "descripcion": "En el 2006 iniciamos un proceso de innovación y mejora del Instituto reflejado en algunos avances importantes como lo son: el incremento del número y calidad de cursos de enseñanza y capacitación en el interior de la República, con lo que acercamos nuestros servicios a los lugares en que más se requieren. Asi mismo se incrementó la cantidad de nuestro fondo editorial.<br/><br/>Logramos mayor especialización en los servicios de asesoría e investigación; se firmaron convenios de colaboración con agrupaciones de profesionales y empresas especializadas; entre otros, con los que extendemos nuestros servicios en beneficio de otros sectores de la construcción.",
      "imagen": "/historia/2010.jpg"
    },
    {
      "ano": "2009",
      "descripcion": "Consolidación. Con esta palabra podemos describir la materia prima de los trabajos realizados en 2005. Con gran satisfacción, en el mes de agosto, en el editorial de la revista Construcción y Tecnología (CyT) publicamos que el sitio IMCYC llegó al millón de hits mensuales, un promedio de vistas que mantuvo su vigencia hasta el mes de diciembre, en tanto en el análisis que realizan nuestros editores a fin de año resultó que el mayor número de consultas lo registró la edición correspondiente al mes de diciembre 2004 donde se hizo la compilación de los reportajes técnicos publicitarios.",
      "imagen": "/historia/2009.jpg"
    },
    {
      "ano": "2008",
      "descripcion": "La creación de este espacio resultaba fundamental pues el aula existente con anterioridad tenía 30 años de uso y era obsoleta en muchos aspectos. Hoy, el nuevo auditorio de usos múltiples cuenta con todo lo necesario para impartir cursos, seminarios, charlas y videoconferencias. Se cuenta, por ejemplo, con lo necesario para implementar un sistema de traducción, así como con una terraza en la cual se puede, desde tomar un café durante unos minutos de descanso de algún evento, hasta organizar una comida formal. Cabe señalar que en el aula pueden estar 50 personas, con sus mesas si se trata por ejemplo de una actividad de certificación o 100 personas, si se trata de alguna conferencia.",
      "imagen": "/historia/2008.jpg"
    },
    {
      "ano": "2007",
      "descripcion": "Uno de los principales objetivos del IMCYC es el de renovarse y actualizarse constantemente para llegar más lejos, pero al mismo tiempo trabajar y esforzarnos para estar cada vez más cerca de los ingenieros, arquitectos, constructores, desarrolladores, estudiantes, etc. En fin, cerca de toda persona y empresa involucrada en el campo del Cemento y del Concreto, para así brindarles los servicios y apoyos que requieren para su desarrollo profesional y un desempeño de vanguardia.<br/><br/>El IMCYC le abre sus puertas y lo invita a ir de la mano hacia un futuro con mayor conocimiento, tecnología y actualización",
      "imagen": "/historia/2007.jpg"
    },
    {
      "ano": "2006",
      "descripcion": "En el 2006 iniciamos un proceso de innovación y mejora del Instituto reflejado en algunos avances importantes como lo son: el incremento del número y calidad de cursos de enseñanza y capacitación en el interior de la República, con lo que acercamos nuestros servicios a los lugares en que más se requieren. Asi mismo se incrementó la cantidad de nuestro fondo editorial.<br/><br/>Logramos mayor especialización en los servicios de asesoría e investigación; se firmaron convenios de colaboración con agrupaciones de profesionales y empresas especializadas; entre otros, con los que extendemos nuestros servicios en beneficio de otros sectores de la construcción.",
      "imagen": "/historia/2006.jpg"
    },
    {
      "ano": "2005",
      "descripcion": "Consolidación. Con esta palabra podemos describir la materia prima de los trabajos realizados en 2005. Con gran satisfacción, en el mes de agosto, en el editorial de la revista Construcción y Tecnología (CyT) publicamos que el sitio IMCYC llegó al millín de hits mensuales, un promedio de vistas que mantuvo su vigencia hasta el mes de diciembre, en tanto en el análisis que realizan nuestros editores a fin de año resultó que el mayor número de consultas lo registró la edición correspondiente al mes de diciembre 2004 donde se hizo la compilación de los reportajes técnicos publicitarios.<br/><br/>Continuando con la difusión, se publicaron nueve nuevos libros IMCYC y se tuvo la presencia en 25 eventos y exposiciones de distintas entidades del país.<br/><br/>En lo que se refiere a los cursos, se organizaron aproximadamente 30, mismos que se impartieron en varios estados de la República Mexicana, y en materia de conferencias no podemos pasar por alto la destacada participación que el IMCYC desempeño en este renglón durante el desarrollo de World of Concrete México.<br/><br/>Finalmente, y no por esto menos importante el laboratorio IMCYC refrendó las siguientes acreditaciones que hablan por si mismas de la calidad de su trabajo: IAS renovación certificado de acreditación del laboratorio de cemento y concreto, EMA renovación acreditación del laboratorio de metrología en el área de fuerza, y masa ISO900: renovación del certificado de calidad ISO9000.",
      "imagen": "/historia/2005.jpg"
    },
    {
      "ano": "2004",
      "descripcion": "En este año cambia la imagen y formato de la revista Construcción y Tecnología, buscando modernizar su formato y dedicar sus contenidos a difundir los logros de la industria de la construcción con concreto a nivel nacional. Se inicia la sección Conceptos Básicos que pretende llenar un hueco para la difusión del conocimiento básico de la tecnología del concreto, normas y aplicaciones. En este año también se da el cambio del logotipo y del símbolo del IMCYC el cual refleja el cambio que internamente se ha gestado buscando enfocar más los esfuerzos del Instituto hacia la colaboración con las comunidades relacionadas con el concreto.<br/><br/>Otro parteaguas importante en este año es la realización de World of Concrete México 2004 en asociación con Hanley Wood Exhibitions y E.J. Krause en el Centro Banamex con 27 conferencias soportadas en la gran experiencia técnica del IMCYC y contándose con más de 5,700 asistentes a la exposición. Los laboratorios del IMCYC reciben la certificación IAS e ISO 9000:2000 habiéndose adquirido equipos para pruebas de deformación a largo plazo (Creep) para concretos de alta resistencia y equipos para la prueba rápida de permeabilidad a cloruros (RCPT) entre otros. Se realiza el Primer Encuentro Internacional de Concreto y Aditivos.",
      "imagen": "/historia/2004.jpg"
    },
    {
      "ano": "2003",
      "descripcion": "El IMCYC vive una reestructuración en la que se les da la más cordial bienvenida como Presidente del IMCYC al Lic. Jorge Sánchez Laparade cuyo propósito personal es el de impulsar ideas y proyectos que permitan nuevos avances en el conocimiento de la materia y mayor pertinencia en su aplicación. En la Dirección General contamos con la valiosa colaboración del Ing. José Lozano Ruy Sánchez, y en la Gerencia Técnica al Ingeniero José Daniel Dámazo Juárez.",
      "imagen": "/historia/2003.jpg"
    },
    {
      "ano": "2002",
      "descripcion": "El 24 de abril del 2002 en Mérida, Yucatán, el Instituto Mexicano del Cemento y del Concreto y el Colegio de Ingenieros Civiles de Yucatán constituyeron la Asociación Latinoamericana de Control de Calidad, Patología y Recuperación de la Construcción -delegación México (Alconpat). A finales de ese mismo año se realiza la entrega del Premio IMCYC Popol Vuh 2002 que fue instituído para motivar la publicación de libros inéditos que sirvan como valiosos auxiliares en la edificación de estructuras de concreto para los futuros profesionales de la construcción.",
      "imagen": "/historia/2002.jpg"
    },
    {
      "ano": "2001",
      "descripcion": "El 3 de Julio, el IMCYC y el Instituto Salvadoreño del Cemento y del Concreto (ISCYC) se celebró el convenio donde ambos se comprometieron a realizar un intercambio de apoyo profesional y operativo, y dar a conocer los últimos avances en la tecnología del cemento y del concreto y desarrollar sus capacidades para diseñar, realizar y supervisar obras y productos de concreto de alta calidad.<br/><br/>El 5 de Septiembre se inauguró Concreto 2001 en el hotel Royal del Pedregal, al sur de la ciudad de México con una asistencia de aproximadamente 600 personas. Comienza a funcionar el servicio de Comercio Electrónico dentro de la Tienda virtual.",
      "imagen": "/historia/2001.jpg"
    },
    {
      "ano": "2000",
      "descripcion": "El IMCYC recibió el certificado de acreditaciÓn que otorgó a su laboratorio el Servicio de Evaluación de la International Conference of Building Officials (ICBO) en español, Conferencia Internacional de Funcionarios de la Construcción.<br/><br/>Ese mismo año el IMCYC y la Asociación Nacional de Directores Responsables de Obra y Corresponsables (ANDROC) firman un convenio de colaboración con el fin de crear cursos para la formación y actualización de profesionistas relacionados con la industria de la construcción.",
      "imagen": "/historia/2000.jpg"
    },
    {
      "ano": "1998",
      "descripcion": "El Instituto se encuentra de la mano con la tecnología y se crea www.imcyc.com logrando atraer un número impresionante de usuarios al mundo del cemento y del concreto. Ese mismo año surge la Biblioteca Digital del IMCYC contando con más de 3065 archivos que comprenden libros, revistas y artículos referentes a la construcción, el cemento y el concreto.",
      "imagen": "/historia/1998.jpg"
    },
    {
      "ano": "1997",
      "descripcion": "Se instala la red de equipo en los edificios de las oficinas generales y de el laboratorio para así mantener una comunicación directa y dar un servicio más rápido y eficiente a todos los usuarios.",
      "imagen": "/historia/1997.jpg"
    },
    {
      "ano": "1994",
      "descripcion": "El IMCYC trabaja en la aprobación de la Norma ISO 9000, además con el propósito de multiplicar y hacer mas eficiente la propuesta educativa, el Instituto diseña el proyecto IMCYC Dimensión 2000, Educación sin Fronteras.",
      "imagen": "/historia/1994.jpg"
    },
    {
      "ano": "1990",
      "descripcion": "El IMCYC instituye la entrega del Registro, un reconocimiento a los mejores trabajos especializados sobre Cemento y Concreto en los campos de la investigación, la docencia, la difusión, el diseño y la construcción, para lo cual se lanzan convocatorias anuales.",
      "imagen": "/historia/1990.jpg"
    },
    {
      "ano": "1989",
      "descripcion": "En este año, el IMCYC cumple su XXX aniversario, contando con dos direcciones, la de Desarrollo y la Técnica con sus departamentos de:<br/><ul><li>Enseñanza</li><li>Asesorías Técnicas</li><li>Revista IMCYC</li><li>Centro de Documentación</li><li>Análisis Técnico</li><li>Publicaciones</li><li>Laboratorio de Cemento</li></ul>",
      "imagen": "/historia/1989.jpg"
    },
    {
      "ano": "1988",
      "descripcion": "El departamento de Desarrollo de mercados se transformó en el Departamento de Análisis e Informática del IMCYC y ese mismo año el IMCYC se incorpora como miembro organizador de la Portland Cement Association (PCA). También el Laboratorio recibe la acreditación de la Secretaría de Comercio y Fomento Industrial.",
      "imagen": "/historia/1988.jpg"
    },
    {
      "ano": "1987",
      "descripcion": "A principios de 1987 se realiza una reestructuración completa del IMCYC con el propósito de superar su labor de por si intensiva en la promoción del concreto y de apoyar más rotundamente a la industria de la construcción. El IMCYC firma convenios importantes con instancias federales y privadas.",
      "imagen": "/historia/1987_1.jpg"
    },
    {
      "ano": "1985",
      "descripcion": "En Septiembre de 1985 se marca una línea divisora de las actividades del Instituto. Tras celebrar La Semana de la Construcción del 9 al 13 de Septiembre, suceden los sismos del 19 y el 20 del mismo mes y lógicamente la atención de las actividades del IMCYC se reorienta a revisar el reglamento 1983 de construcciones, y a estudiar más profundamente la manera de supervisar las obras y de analizar los daños causados por los sismos. Se abren los concursos IMCYC-ASINEA de apoyos didácticos, IMCYC-ANFEI de Máxima resistencia del Concreto Medida en Cubos, y los premios PCA para edificios de concreto. El 19 de Noviembre de ese mismo año el IMCYC organizó el Seminario Evaluación y Reparación de estructuras dañadas por sismos, al que asistieron 170 personas y fue impartido por siete especialistas mexicanos.",
      "imagen": "/historia/1985.jpg"
    },
    {
      "ano": "1983",
      "descripcion": "El IMCYC estuvo presente en diferentes actividades de difusión y en diversas ciudades del país y del mundo. Los temas que más interés despiertan por sus conferencias y acciones, son los relativos a la vivienda, el control de calidad, la supervisión de las obras y el reglamento 1983 de construcciones.",
      "imagen": "/historia/1983.jpg"
    },
    {
      "ano": "1982",
      "descripcion": "Se lleva a cabo la Primera confrontación IMCYC - ASINEA de proyectos de estudiantes de Arquitectura, con el tema Módulo para Cooperatividad de Producción. También se celebra anualmente Expoconcreto, importante muestra en la que participan las principales empresas, intitutos y organizaciones del ramo. De 333 personas que están involucardas activamente con el IMCYC para estas fechas, 191 son nuevos participantes. Solamente 7 son mujeres. También se hacen regulares en el Instituto los cursos de 2 días, los avanzados, los especiales y los regionales.",
      "imagen": "/historia/1982.jpg"
    },
    {
      "ano": "1981",
      "descripcion": "A partir de este año se hizo una transformación radical de los cursos que se impartieron durante 10 años en el interior del país. Se logró la transformación de cursos locales impartidos en alrededor de 20 ciudades, a cursos regionales que se impartirían inicialmente en 8 ciudades y que por su alta calidad empezaron a atraer asistentes de numerosas ciudades, además de los de la propia sede. En ese mismo año abre su Departamento de Desarrollo de Mercado buscando un nuevo flanco para rastrear los acaeceres del concreto en la industria y la economía.",
      "imagen": "/historia/1981.jpg"
    },
    {
      "ano": "1979",
      "descripcion": "Se realiza la Primera Semana Nacional del Concreto del 2 al 6 de Julio en el Hotel Presidente Chapultepec organizada por el IMCYC, conformada por dos eventos: El Segundo Simposio Nacional para la enseñanza del concreto y la Expo Concreto 79.",
      "imagen": "/historia/1979.jpg"
    },
    {
      "ano": "1978",
      "descripcion": "En Abril de 1978 en Toronto, Canadá, el Comité de Nominaciones del American Concrete Institute ha designado al Ingeniero Cutberto Díaz, Director del IMCYC como uno de los nuevos cuatro miembros de su consejo directivo. Por tratarse de una asociación muy importante, formada actualmente por 15,600 miembros de 102 países, para el IMCYC es muy satisfactorio.<br/>br/>El IMCYC abre sus puertas a pasantes de diversas Universidades para realizar sus tésis sobre diversos temas relacionados con el cemento y el concreto.",
      "imagen": "/historia/1978.jpg"
    },
    {
      "ano": "1976",
      "descripcion": "El IMCYC actúa como copatrocinador de la Convención de Otoño de 1976 del Instituto Americano del Concreto, llevada a cabo del 24 al 29 de Octubre en el Hotel Camino Real. Para este magno evento el personal del IMCYC durante todo el año dedicó un porcentaje importante de su tiempo en labores de organización. A este evento asistieron 900 personas provenientes de 24 países. Ese mismo año se realiza el Primer Simposio Panamericano sobre la Enseñanza del Concreto. Continúan los cursos especiales Concreto Reforzado con fibras cortas, Control del agrietamiento y de las deflexiones de estructuras de concreto, Supervisión de Obras de Concreto, Modelos de estructuras de concreto, Productos de concreto, etc.",
      "imagen": "/historia/1976.jpg"
    },
    {
      "ano": "1975",
      "descripcion": "En Febrero de 1975, la Revista IMCYC llega a 11,000 ejemplares. En el mismo mes del 10 al 14 se lleva a cabo el Primer Curso Especial IMCYC sobre Concretos Polimerizados, tal vez el primero de este tipo en el mundo. Su duración fué de una semana del 10 al 14 de Febrero y con él se inició una serie de CURSOS ESPECIALES IMCYC entre los que se encuentran: Pavimentos de Concreto, Métodos Modernos de Diseños de Estructuras de Concreto Reforzado, Proyecto de Construcción de Muros de Bloques de Concreto, Tecnología del Concreto.",
      "imagen": "/historia/1975.jpg"
    },
    {
      "ano": "1974",
      "descripcion": "La Revista IMCYC llega a los 10 mil ejemplares. El Rector de la UNAM Dr. Guillermo Soberón Acevedo presidió la ceremonia de la clausura simbólica de los cursos, seminarios y conferencias IMCYC. El IMCYC organiza aproximadamente 100 eventos en 20 ciudades de la República Mexicana y 2 de Honduras, además de 58 cursos y seis seminarios.",
      "imagen": "/historia/1974.jpg"
    },
    {
      "ano": "1973",
      "descripcion": "El IMCYC fue nombrado miembro correspondiente del prestigiado Instituto Eduardo Torroja de la Construcción y del Cemento de Madrid.<br/><br/>A los 10 años de haberse fundado la Revista IMCYC llega a un tiraje de 6,000 ejemplares.",
      "imagen": "/historia/1973.jpg"
    },
    {
      "ano": "1972",
      "descripcion": "El 6 de Junio de 1972 el Consejo directivo reelige como presidente al Ingeniero Rodolfo F. Barrera. El miércoles 28 de Junio del mismo año el canal 4 de las 18:30 a las 19:00 horas transmite a nivel nacional el documental “Hablando en Concreto”, preparado por el Conacyt, con la colaboración del IMCYC particularmente del departamento de información.",
      "imagen": "/historia/1972.jpg"
    },
    {
      "ano": "1971",
      "descripcion": "Comienza a circular gratuitamente el boletín del cemento y del concreto. El IMCYC consciente del esfuerzo que dedicaban los profesionales mexicanos para realizar grandes proyectos donde se haya aplicado el concreto decidió crear el Premio Anual IMCYC que consistía en ese entonces de $50,000.00 pesos mexicanos y Mención Honorífica a quien hubiera recibido mayor cantidad de premios. El 20 de Agosto de 1971, el Consejo directivo del IMCYC elige como nuevo presidente al Ingeniero Rodolfo F. Barrera. El IMCYC se amplía con el establecimiento y operación de Laboratorios para control de calidad del concreto.",
      "imagen": "/historia/1971.jpg"
    },
    {
      "ano": "1967",
      "descripcion": "En 1967 nace el Departamento de análisis técnico del IMCYC, que es el responsable de la investigación de los campos de materiales, construcción y estructuras; de fungir como órgano de consulta para el público en general y de generar recursos humanos de muy alto nivel, de especialistas que forman la cartera de profesores y asesores del Instituto.",
      "imagen": "/historia/1967.jpg"
    },
    {
      "ano": "1965",
      "descripcion": "Se realiza el Primer Simposio Nacional sobre la Enseñanza del Concreto organizado por el IMCYC el 24 y el 25 de Febrero. La International Association for Shell Structures pide al IMCYC su colaboración para la organización del Congreso Internacional sobre la aplicación de Estructuras Laminares en Arquitectura.",
      "imagen": "/historia/1965.jpg"
    },
    {
      "ano": "1964",
      "descripcion": "En Julio de 1964 el IMCYC inicia la publicación del texto IMCYC de Concreto Reforzado De Roger Díaz de Cossí, Francisco Robles Fernández y Juan Casillas García de León.",
      "imagen": "/historia/1964.jpg"
    },
    {
      "ano": "1963",
      "descripcion": "En los primeros meses de ese mismo año nace la Revista del IMCYC que inicia una larga carrera de publicaciones mensuales con una información técnica avanzada y de primera. También como hecho trascendental se realiza la primera traducción del reglamento ACI-18.",
      "imagen": "/historia/1963.jpg"
    },
    {
      "ano": "1959",
      "descripcion": "Con el fin de propagar el uso del Cemento Portland (1923), la Comisión Reguladora del Cemento (1942) y la Cámara Nacional del Cemento (1948) , el 23 de Septiembre de 1959 nace el Instituto Mexicano del Cemento y del Concreto, A.C. IMCYC.",
      "imagen": "/historia/1959.jpg"
    }
  ];


  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-0 pb-20 gap-16 sm:p-10 sm:pt-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-slate-800 to-slate-950 z-10 bg-cover bg-fixed bg-no-repeat">
      <main className="flex flex-col gap-2 row-start-2 sm:items-start z-0 mx-auto w-full max-w-screen-xl px-5 my-20">
        <h1 className="font-montserrat text-4xl font-bold pb-0 mb-0 text-white">Historia</h1>
        <p className="font-montserrat text-small text-white">Instituto Mexicano del Cemento y del Concreto A.C.</p>
        {historia.map((contenido, index) => (
          <div key={index} className="w-full">
            <CardHorizontal titulo={contenido.ano} desc={contenido.descripcion} imagen={contenido.imagen} />
          </div>
        ))}
      </main>
    </div>
  );
}
