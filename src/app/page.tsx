
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Tu sitio web listo en un día, con soporte 24/7 para que digitalices tus ventas sin complicaciones." cta1="Comienza Ahora" />
<How step1Title="Contáctanos Hoy" step1Desc="Habla con nuestro equipo sobre tu negocio." step2Title="Recibe Propuesta" step2Desc="Te enviamos un plan personalizado en 12 horas." step3Title="Web Activa Ya" step3Desc="Tu sitio de ventas listo en 24 horas." />
<Aboutus headline="WebGo: Potencia tus ventas online" subheadline="Digitaliza tu negocio sin complicaciones ni tiempo perdido. WebGo lo hace por ti." beneficiotitulo1="Gestión Rápida" beneficio1="Optimiza y agiliza ventas online." beneficiotitulo2="Innovación Garantizada" beneficio2="Destácate con tecnología avanzada." />
<Services heading="Digitaliza Tu Negocio en 24 Horas" description="Rapidez, compromiso e innovación para aumentar tus ventas online." services={[{"name":"Diseño Express","icon":"rocket","description":"Tu web lista en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Atención continua para tu tranquilidad."},{"name":"Optimización SEO","icon":"search","description":"Aparece primero en los resultados de búsqueda."},{"name":"Gestión de Contenido","icon":"edit","description":"Contenido atractivo que vende."},{"name":"Tienda Online","icon":"shopping-cart","description":"Configura y vende productos fácilmente."},{"name":"Integración de Pagos","icon":"credit-card","description":"Cobro seguro y rápido."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en proyectos digitales impresionantes y exitosos." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio rápidamente?","respuesta":"En WebGo nos especializamos en digitalizar tus ventas de manera rápida para que no pierdas tiempo. Creamos un sitio web optimizado y atractivo que atrae a más clientes en poco tiempo."},{"pregunta":"¿Qué beneficios obtengo al elegir WebGo para gestionar mi presencia online?","respuesta":"Con WebGo, obtienes innovación, compromiso y rapidez. Nos encargamos de todo, desde crear hasta gestionar tu sitio web, para que tú te concentres en hacer crecer tu negocio."},{"pregunta":"¿Puedo confiar en WebGo si no tengo experiencia en ventas online?","respuesta":"¡Por supuesto! WebGo está aquí para ayudarte. Nos encargamos de todo el proceso digital para que no te preocupes, incluso si no tienes experiencia. Somos tu socio de confianza en digitalización."},{"pregunta":"¿Cómo maneja WebGo la falta de tiempo que tengo para gestionar un sitio web?","respuesta":"En WebGo entendemos que tu tiempo es valioso. Nos ocupamos de todo el manejo de tu sitio web, permitiéndote centrarte en tus principales tareas empresariales sin estrés."},{"pregunta":"¿Es muy costoso trabajar con WebGo para mejorar mis ventas online?","respuesta":"WebGo ofrece soluciones accesibles y efectivas. Invertir en nuestra tecnología asegura un rápido retorno al aumentar tus ventas online con nuestra experiencia en rapidez, compromiso e innovación."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio Hoy" 
                      description="Atrae más clientes con rapidez y compromiso. Contáctanos y digitaliza tus ventas ahora mismo."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
