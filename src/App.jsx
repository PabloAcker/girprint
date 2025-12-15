import React from "react";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import { Phone, MessageCircle, MapPin, Instagram } from "lucide-react";

const serviceSections = [
  {
    id: "impresiones",
    title: "Impresiones",
    description:
      "Soluciones en impresión para productos promocionales y textiles.",
    items: [
      "UV DTF",
      "DTF Textil",
      "Vinil textil",
      "Serigrafía",
      "Tampografía",
      "Sublimación",
      "Gigantografías",
      "Armables",
      "Juegos didácticos",
      "Rompecabezas",
      "Bolsas ecológicas"
    ]
  },
  {
    id: "promocional",
    title: "Material promocional",
    description:
      "Artículos para reforzar tu marca en eventos, ferias y campañas.",
    items: [
      "Bolígrafos y lápices",
      "Llaveros",
      "Ambientadores",
      "Antiestrés",
      "Resaltadores",
      "Globos y frisbees",
      "Manillas",
      "Sombrillas",
      "Mouse pads",
      "Botones",
      "Tazas y tomatodos",
      "Lanyards",
      "Abanicos",
      "Alcancías promocionales",
      "Lápices de color",
      "Herramientas 5 en 1"
    ]
  },
  {
    id: "confeccion",
    title: "Confección",
    description:
      "Confección textil personalizada para tu empresa, eventos y equipo.",
    items: [
      "Poleras",
      "Poleras tipo polo",
      "Gorras",
      "Chalecos",
      "Chamarras",
      "Óveroles",
      "Mochilas",
      "Maletines",
      "Bolsas ecológicas"
    ]
  },
  {
    id: "exhibicion",
    title: "Material de exhibición",
    description:
      "Elementos para destacar tu marca en puntos de venta y ferias.",
    items: [
      "Rollers",
      "Banderolas",
      "Inflables publicitarios",
      "Backboard publicitario",
    ]
  }
];

function App() {
  return (
    <div className="app">
      {/* Header / Navbar */}
      <header className="header">
        <div className="container header__content">
          <div className="header__logo">
            <span className="header__logo-mark">GP</span>
            <div className="header__logo-text">
              <span className="header__logo-title">GIRPRINT</span>
              <span className="header__logo-subtitle">
                Soluciones integrales en impresión y confección
              </span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero__content">
            <div className="hero__text">
              <h1>
                Confeccionamos y fabricamos
                <br />
                los productos que estabas buscando.
              </h1>
              <p>
                GIRPRINT ofrece soluciones completas en confección, impresión,
                material promocional y material de exhibición en Bolivia.
                No tercializamos ninguno de nuestros procesos.
              </p>
              <div className="hero__actions">
                <a href="#servicios" className="btn btn--primary">
                  Ver servicios
                </a>
                <a href="#contacto" className="btn btn--ghost">
                  Solicitar más información
                </a>
              </div>
            </div>

            <div className="hero__highlight">
              <p className="hero__tag">La Paz · Bolivia</p>
              <ul className="hero__list">
                <li>Impresión DTF UV y serigrafía</li>
                <li>Personalización de poleras, canguros y más</li>
                <li>Material promocional y de exhibición a medida</li>
                <li>Confección textil</li>
                <li>Impresiones troqueladas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services overview */}
        <section id="servicios" className="section section--alt">
          <div className="container">
            <header className="section__header">
              <h2>Nuestros servicios</h2>
              <p>
                Acompañamos todo el proceso: diseño, impresión, confección y
                entrega de material promocional y de exhibición para tu marca.
              </p>
            </header>

            <div className="grid">
              {serviceSections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="card card--service"
                >
                  <h3>{section.title}</h3>
                  <p className="card__description">{section.description}</p>
                  <ul className="card__list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            {/* ✅ Carrusel debajo de servicios */}
            <ImageCarousel
              title="Galería de servicios"
              subtitle="Ejemplos visuales de lo que realizamos: confección, serigrafía, impresiones y más."
              autoPlay={true}
              interval={3200}
            />
          </div>
        </section>

        {/* CTA simple */}
        <section className="section section--cta">
          <div className="container section__cta-content">
            <div>
              <h2>¿Tienes un producto en mente?</h2>
              <p>
                Contáctanos y lo hacemos realidad. Podemos ayudarte a elegir los materiales y formatos adecuados
                para que tu marca destaque en cada punto de contacto con tus
                clientes.
              </p>
            </div>
            <a href="#contacto" className="btn btn--light">
              ¡Comunícate con nosotros!
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contacto" className="section">
          <div className="container">
            <header className="section__header">
              <h2>Contacto</h2>
              <p>
                Escríbenos o llámanos para cotizaciones, pedidos especiales o
                consultas sobre nuestros servicios y catálogo.
              </p>
            </header>

            <div className="contact">
              <div className="contact__item">
                <h3>Redes sociales</h3>

                <p className="contact__line">
                  <Instagram size={18} />
                  <a
                    href="https://www.instagram.com/girprint_bo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @girprint_bo
                  </a>
                </p>
              </div>

              <div className="contact__item">
                <h3>Teléfonos</h3>

                <p className="contact__line">
                  <MessageCircle size={18} />
                  <a
                    href="https://wa.me/59163969724"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +591 63969724
                  </a>
                </p>

                <p className="contact__line">
                  <Phone size={18} />
                  <a href="tel:+59122486253">
                    +591 2 2486253
                  </a>
                </p>
              </div>

              <div className="contact__item">
                <h3>Dirección</h3>
                <p className="contact__line">
                  <MapPin size={18} />
                  <a>C. Nicolás Acosta 260, zona San Pedro</a>
                </p>
                <p>La Paz - Bolivia</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__content">
          <p>© {new Date().getFullYear()} GIRPRINT. Todos los derechos reservados.</p>
          <p className="footer__secondary">
            Sitio informativo basado en el catálogo corporativo de GirPrint.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
