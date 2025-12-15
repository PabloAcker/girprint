import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import "./imageCarousel.css";

/**
 * ImageCarousel
 * - Carrusel simple, accesible, modular y fácil de reemplazar con imágenes reales.
 * - Autoplay opcional (activado por defecto).
 * - Pausa en hover y se reanuda al salir (UX pro).
 */
export default function ImageCarousel({
  title = "Inspiración GIRPRINT",
  subtitle = "Algunas ideas de productos y técnicas que hacemos en GIRPRINT.",
  items,
  autoPlay = true,
  interval = 3200
}) {
  const data = useMemo(
    () =>
      items?.length
        ? items
        : [
            {
              title: "Poleras personalizadas",
              image:
                "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80",
              tag: "Confección"
            },
            {
              title: "Serigrafía / impresión",
              image:
                "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=1400&q=80",
              tag: "Impresiones"
            },
            {
              title: "Gorras corporativas",
              image:
                "https://images.unsplash.com/photo-1520975693411-4352d1d1d9b1?auto=format&fit=crop&w=1400&q=80",
              tag: "Merchandising"
            },
            {
              title: "Material promocional",
              image:
                "https://images.unsplash.com/photo-1555529669-2269763671c0?auto=format&fit=crop&w=1400&q=80",
              tag: "Promocional"
            }
          ],
    [items]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    const nextIndex = (idx + data.length) % data.length;
    setActiveIndex(nextIndex);
  };

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  const stopAuto = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startAuto = () => {
    // Evita intervalos duplicados
    stopAuto();

    if (!autoPlay || data.length <= 1) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % data.length);
    }, interval);
  };

  // Autoplay (se inicia y se reinicia si cambian interval/autoPlay/data)
  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, interval, data.length]);

  return (
    <section className="carousel">
      <div className="carousel__header">
        <div className="carousel__headerText">
          <h2 className="carousel__title">{title}</h2>
          <p className="carousel__subtitle">{subtitle}</p>
        </div>

        <div className="carousel__controls">
          <button
            className="carousel__btn"
            type="button"
            onClick={() => {
              stopAuto();
              prev();
              startAuto();
            }}
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            className="carousel__btn"
            type="button"
            onClick={() => {
              stopAuto();
              next();
              startAuto();
            }}
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        className="carousel__viewport"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {data.map((item, idx) => (
            <article className="carousel__slide" key={`${item.title}-${idx}`}>
              <div className="carousel__imageWrap">
                <img
                  className="carousel__image"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="carousel__overlay">
                  {item.tag ? (
                    <span className="carousel__tag">{item.tag}</span>
                  ) : null}
                  <h3 className="carousel__slideTitle">{item.title}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="carousel__dots" role="tablist" aria-label="Paginación">
        {data.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`carousel__dot ${idx === activeIndex ? "is-active" : ""}`}
            onClick={() => {
              stopAuto();
              goTo(idx);
              startAuto();
            }}
            aria-label={`Ir a slide ${idx + 1}`}
          >
            <Dot size={28} />
          </button>
        ))}
      </div>
    </section>
  );
}
