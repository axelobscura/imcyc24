import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function CoWorking() {
  return (
    <div>
      <div className="flex items-center p-0 gap-16 sm:p-0 font-[family-name:var(--font-geist-sans)] bg-[url('/qs1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat">
        <div className="mx-auto w-full max-w-screen-xl p-4 pt-20 sm:pt-80 pb-0 lg:py-20">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start z-0 w-full">
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr] gap-0 items-center justify-items-stretch pt-20 w-full">
              <div className="bg-gray-900 bg-opacity-80 bg-blend-multiply w-full p-5 sm:pl-2 md:pl-2 lg:pl-2 xl:pl-50 sm:mb-5">
                <h1 className="font-montserrat text-4xl text-white pt-0 sm:pl-50 uppercase font-bold flex">
                  <FaRegArrowAltCircleRight  className="mr-3"/> Aviso de Privacidad
                </h1>
              </div>
              <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr]">
                <p className="font-montserrat text-justify"><strong>El Instituto Mexicano del Cemento y del Concreto A.C. está comprometida a proteger su privacidad</strong>. Además de lo dispuesto en la ley mexicana correspondiente en la materia, seguimos las mejores prácticas internacionales en el manejo y administración de datos personales. En todo caso, <strong>manejaremos sus datos personales con altos estándares de ética, responsabilidad y profesionalismo</strong>.<br/><br/>En la recolección de datos personales <strong>seguimos todos los principios que marca la ley mexicana (artículo 6): Licitud, calidad, consentimiento, información, finalidad, lealtad, proporcionalidad y responsabilidad</strong>.<br/><br/>Este aviso de privacidad cumple con los requisitos que marca la Ley Federal de Protección de Datos Personales en Posesión de Particulares, su Reglamento y los Lineamientos del Aviso de Privacidad del IFAI.<br/><br/>En atención a la Ley aplicable, usted acepta que el tratamiento de sus datos personales se realice de conformidad con el siguiente Aviso de Privacidad Integral:</p>
                <h2 className="font-montserrat py-5 text-2xl font-bold">1. Identidad y domicilio del responsable:</h2>
                <div className="flex flex-col w-full justify-center items-center">
                  <Image
                    src="/logo_imcyc_alto.svg"
                    alt="Instituto Mexicano del Cemento y del Concreto A.C. México"
                    width={200}
                    height={0}
                    layout="intrinsic"
                  />
                  <p className="font-montserrat text-center mt-3"><strong>Instituto Mexicano del Cemento y del Concreto A.C.</strong><br/>Av. Insurgentes Sur #1846, Col. Florida,<br/>C.P. 01030 Del. Álvaro Obregón<br/>Ciudad de México</p>
                </div>
                <h2 className="font-montserrat pt-5 text-2xl font-bold">2. Finalidades del tratamiento de datos:</h2>
                <h3 className="font-montserrat pb-5 text-1xl pl-3">2.1. Recopilamos y/o tratamos los tipos de datos siguientes:</h3>
                <div className="flex flex-col w-full justify-center items-center">
                  <Image
                    src="/privacidad.jpg"
                    alt="Instituto Mexicano del Cemento y del Concreto A.C. México"
                    width={700}
                    height={0}
                    layout="intrinsic"
                  />
                </div>
                <h3 className="font-montserrat pb-5 text-1xl mt-10 pl-3">2.1.1 Usted se compromete a que los datos que proporciona a El Instituto Mexicano del Cemento y del Concreto A.C. sean verídicos, completos y exactos. Cualquier dato falso, incompleto o inexacto será de su exclusiva responsabilidad.</h3>
                <h3 className="font-montserrat pb-5 text-1xl pl-3">2.2. No tratamos datos personales sensibles.</h3>
                <h3 className="font-montserrat pb-5 text-1xl pl-3">2.3. Dependiendo de la relación que tengamos con usted, usamos sus datos personales para:</h3>
                <ul className="font-montserrat pl-10 list-disc">
                  <li>Dar cumplimiento a la relación jurídica, comercial o laboral que tengamos con usted, lo cual puede implicar: la firma de contratos o acuerdos, envío de órdenes de compra, contacto para fines de cobranza y otros fines análogos orientados a la administración de la relación que tengamos con usted</li>
                  <li>Para analizar si es viable tener con usted una relación jurídica, comercial o laboral</li>
                  <li>Para invitarlo a eventos, cursos, certificaciones o servicios de ensayes de aptitud</li>
                  <li>Para promocionar los servicios del Instituto Mexicano del Cemento y del Concreto A.C.</li>
                  <li>Para administrar la relación laboral que tengamos con nuestros empleados</li>
                  <li>Por motivos de identificación y seguridad</li>
                </ul>
                <h3 className="font-montserrat pb-5 text-1xl pl-3">2.4. No tratamos datos personales para finalidades derivadas o secundarias.</h3>
                <h3 className="font-montserrat pb-5 text-1xl pl-3">2.5. Tal como lo señalamos en el punto 2.3, si daremos tratamiento mercadotécnico, publicitario o de prospección comercial a sus datos personales. Si usted desea que sus datos no sean tratados para estos fines, favor de comunicarlo a nuestro departamento de protección de datos personales o marcar esta casilla (en caso de que esté leyendo una versión impresa de nuestro aviso de privacidad integral).</h3>
                <h2 className="font-montserrat pt-5 text-2xl font-bold">3. Las opciones y medios que el responsable ofrece al titular para limitar el uso o divulgación de los datos personales:</h2>
                <h3 className="font-montserrat pb-5 text-1xl pl-3 py-5">3.1. El responsable de protección de datos personales de IMCYC es el Departamento de Difusión. Poniéndose en contacto con él, usted podrá limitar el uso o divulgación de sus datos personales, a través del ejercicio de sus Derechos ARCO, tal como se indica en el siguiente punto.</h3>
                <h2 className="font-montserrat pt-5 text-2xl font-bold">4. Medios para ejercer los derechos ARCO (acceso, rectificación, cancelación y oposición):</h2>
                <h3 className="font-montserrat pb-5 text-1xl pl-3 pt-5">4.1. Usted podrá ejercer sus derechos ARCO (acceso, rectificación, cancelación y/u oposición) contactando directamente al Departamento de Difusión en el correo electrónico: privacidad@imcyc.com o presentándose en las oficinas de IMCYC ubicadas en el domicilio señalado para tal efecto en el punto 1.</h3>
                <h3 className="font-montserrat pb-5 text-1xl pl-3">4.2. La solicitud ARCO deberá contener y acompañar lo que señala la Ley Federal de Protección de Datos Personales en Posesión de Particulares en sus artículos 29 y demás aplicables. Copiamos el artículo 29 a continuación solamente como referencia (es obligación del Titular cerciorarse cuáles son los requisitos vigentes para ejercer correctamente sus Derechos ARCO):</h3>
                <h3 className="font-montserrat pb-5 text-1xl pl-3">Artículo 29.- La solicitud de acceso, rectificación, cancelación u oposición deberá contener y acompañar lo siguiente:</h3>
                <ul className="font-montserrat pl-10 list-disc">
                  <li>El nombre del titular y domicilio u otro medio para comunicarle la respuesta a su solicitud</li>
                  <li>Los documentos que acrediten la identidad o, en su caso, la representación legal del titular</li>
                  <li>La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados</li>
                  <li>Cualquier otro elemento o documento que facilite la localización de los datos personales</li>
                </ul>
                <h3 className="font-montserrat pb-5 text-1xl pl-3">4.3. Los mecanismos y procedimientos para que, en su caso, el titular pueda revocar su consentimiento al tratamiento de sus datos personales.</h3>
                <h3 className="font-montserrat pb-5 text-1xl pl-3">4.3.1. De conformidad con lo establecido por el artículo 21 del Reglamento de la Ley Federal de Protección de Datos Personales en Posesión de Particulares:</h3>
                <ul className="font-montserrat pl-10 list-disc">
                  <li>En cualquier momento, el titular podrá revocar su consentimiento para el tratamiento de sus datos personales, para lo cual el responsable deberá establecer mecanismos sencillos y gratuitos, que permitan al titular revocar su consentimiento al menos por el mismo medio por el que lo otorgó, siempre y cuando no lo impida una disposición legal</li>
                </ul>
                <h3 className="font-montserrat pb-5 text-1xl pl-3">4.3.2. El Instituto Mexicano del Cemento y del Concreto A.C. pone a su disposición los datos de contacto de nuestro Departamento Difusión en los anteriores puntos 3.1 y 4.1. Usted puede ponerse en contacto con él a través de los medios disponibles y mediante un escrito libre puede solicitar la revocación de su consentimiento al tratamiento de sus datos personales.</h3>
                <h2 className="font-montserrat pt-5 text-2xl font-bold">5. La cláusula que indique si el titular acepta o no la transferencia, cuando así se requiera.</h2>
                <h3 className="font-montserrat pb-5 text-1xl pl-3 pt-5">5.1. El Instituto Mexicano del Cemento y del Concreto A.C. no transfiere datos personales.</h3>
                <h2 className="font-montserrat pt-5 text-2xl font-bold">6. La información sobre el uso de mecanismos en medios remotos o locales de comunicación electrónica, óptica u otra tecnología (tales como cookies o web beacons), que permitan recabar datos personales de manera automática y simultánea al tiempo que el titular hace contacto con los mismos, en su caso; y IMCYC no hace uso de cookies.</h2>
                <h2 className="font-montserrat pt-5 text-2xl font-bold">7. Los procedimientos y medios a través de los cuales el responsable comunicará a los titulares los cambios al aviso de privacidad.</h2>
                <p className="font-montserrat text-justify pt-5"><strong>El Instituto Mexicano del Cemento y del Concreto A.C. se reserva el derecho de cambiar este aviso de privacidad en cualquier momento</strong>. En caso de que exista algún cambio en este aviso de privacidad, IMCYC lo comunicará de la siguiente manera: (a) enviándole un correo electrónico a la cuenta que tengamos registrada y/o (b) publicando una nota visible en nuestro sitio web (www.imcyc.com). IMCYC no será responsable si usted no recibe la notificación de cambio en el aviso de privacidad si existiere algún problema con su cuenta de correo electrónico o de transmisión de datos por internet. Por su seguridad y tranquilidad, revise en todo momento que así lo desee el contenido de este aviso de privacidad integral en nuestro portal (www.imcyc.com).<br/><br/>En caso de que se presente una controversia que se derive del presente aviso de privacidad, las partes intentarán primero resolverla a través de negociaciones de buena fe, pudiendo ser asistidos por un mediador profesional. Si después de un máximo de 30 días de negociación las partes no llegaren a un acuerdo, se estará a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de Particulares, aceptando las partes la intervención que pudiere tener el Instituto Federal de Acceso a la Información y Protección de Datos Personales.<br/><br/><strong>Al aceptar este Aviso de Privacidad, usted renuncia a cualquier otro fuero y legislación que le pudiere corresponder. Este Aviso de Privacidad está regido por las leyes mexicanas, y cualquier controversia será resuelta frente a las autoridades mexicanas competentes</strong>.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
