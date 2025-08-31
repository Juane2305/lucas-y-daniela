import cancion from "../assets/song.mp3";
import Countdown from "./Countdown";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DressCode from "./DressCode";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import MusicScreen from "./MusicScreen";
import LugaresPraga from "./LugaresPraga";

const Invitacion = () => {
  const targetDate = new Date("2025-11-14T09:30:00-03:00");

  const colorPrincipal = "#fdba74";
  const colorSecundario = "#fdba74";

  return (
    <div className="w-full relative font-modernaText overflow-hidden">
      <div className="absolute">
        <MusicScreen cancion={cancion} />
      </div>
      <div className="relative flex flex-col items-center justify-center h-screen w-full text-center bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1756596896/Disen%CC%83o_sin_ti%CC%81tulo_51_kivqnu.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div
          data-aos="fade-in"
          className="relative z-10 flex flex-col items-center text-center "
        >
          <p className="text-sm md:text-xl uppercase tracking-widest text-white mb-10 font-montserrat">
            ¡Celebramos nuestra boda civil!
          </p>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-2 font-tangerine">
            Lucas &amp; Daniela
          </h1>
          <p className="text-base md:text-xl text-white font-montserrat">
            14 / 11 / 2025
          </p>
        </div>
      </div>
      <div>
        <section
          id="contador"
          className="bg-beige w-full flex flex-col items-center justify-center gap-y-5 py-10 font-thin"
        >
          <Countdown
            containerClasses={
              "w-full flex flex-col justify-center items-center gap-y-5 font-montserrat"
            }
            targetDate={targetDate}
          />
        </section>

        <LugaresPraga
          linkCeremonia="https://maps.app.goo.gl/Hj2H2XnrJUeqiU8x8"
          nombreIglesia="Avenida Centenario 77"
          horaIglesia="10:00hs"
          linkCivil=""
          linkFiesta="https://maps.app.goo.gl/wA56eQPL6qAEhjAB6"
          nombreSalon="Luna Eventos Mendoza"
          horaFiesta="20:00 hs"
          horaCivil="21:15hs"
          claseContainer="flex flex-col md:flex-row items-center justify-center gap-8 my-8 font-montserrat"
          claseTexto="text-gray-900"
        />
        <div className="py-10 mb-10 border border-gray-700">
        <TextoFinal textClass="text-lg" textoFinal="Ahora permanecen estas tres virtudes: la fé, la esperanza y el amor. Pero lo mas grande de ellas es el amor." />
        <TextoFinal textoFinal="1 de Corintios 13:13" />
        </div>
        <div
          className="text-center text-white relative font-montserrat px-5"
          style={{ backgroundColor: colorPrincipal }}
        >
          <GoogleCalendarButton
            background={{ backgroundColor: colorPrincipal }}
            titleCalendar="Ceremonia Civil de Lucas y Daniela"
            fechaComienzo="20251114T093000"
            fechaFin="20251114T103000"
            salon="Avenida Centenario 77"
            imgClass="text-white"
            buttonClass="bg-white hover:bg-transparent text-gray-800 hover:text-white border-white"
          />
        </div>
        <div className="relative">
          <DressCode dress_code="Formal" />
        </div>
        <DatosBancarios
          texto="Tu presencia es nuestro mejor regalo, pero si de todas formas querés hacer un regalo, te dejamos nuestros datos bancarios."
          claseContenedor=" text-white font-montserrat"
          claseBoton="border-2 border-blue-900 bg-white py-3 px-6 text-gray-800 rounded-full hover:bg-gray-100 hover:text-gray-800 transform transition-transform duration-300 ease-in-out"
          textSize="text-lg"
          background={{ backgroundColor: colorPrincipal }}
          styleBotonModal={{ backgroundColor: "white", borderColor: "white" }}
          claseBotonModal={{
            backgroundColor: colorSecundario,
            borderColor: colorSecundario,
          }}
          styleBorderModal={{ borderColor: colorPrincipal }}
          styleTextColor={{ color: colorPrincipal }}
          cbu="0140072403501253721607"
          alias="trotti.daniela"
          banco=""
          nombre="Daniela,Trotti"
          borderModal="border-blue-500"
          textColor="text-blue-500"
        />
        <Asistencia
          clase="py-10 bg-fondo-banner font-montserrat"
          claseButton="cursor-pointer border-2 py-3 px-6 rounded-full border-gray-800 hover:border-gray-700 hover:bg-white hover:text-gray:800"
          linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSdUQPLX11qD7LmmWqpauHF44YLBYIjdeUDxDqwJ_xcOUiRvDQ/viewform?usp=header"
        />
        <div className="py-10">
        <TextoFinal textClass="text-lg" textoFinal="Por motivos de organización y por la capacidad del lugar, esta invitación es válida únicamente para las personas mencionadas" />
        <TextoFinal textClass="text-lg" textoFinal="Gracias, los esperamos." />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
