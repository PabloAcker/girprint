import React from "react";

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
      "Efectos metalizados y holográficos",
      "Gigantografías"
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
      "Lápices de color"
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
      "Stands y módulos para exhibición",
      "Armables y juegos didácticos",
      "Rompecabezas",
      "Bolsas ecológicas impresas"
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
                material promocional y material de exhibición
                para empresas, instituciones y eventos en Bolivia.
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
                <li>Impresión UV DTF y textil</li>
                <li>Material promocional a medida</li>
                <li>Confección textil corporativa</li>
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
                consultas sobre nuestros servicios.
              </p>
            </header>

            <div className="contact">
              <div className="contact__item">
                <h3>Correo electrónico</h3>
                <a href="mailto:gircandebol.srl@gmail.com">
                  gircandebol.srl@gmail.com
                </a>
              </div>

              <div className="contact__item">
                <h3>Teléfonos</h3>
                <p>+591 63969724</p>
                <p>+591 2 2486253</p>
              </div>

              <div className="contact__item">
                <h3>Dirección</h3>
                <p>C. Nicolás Acosta 260, zona San Pedro</p>
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
