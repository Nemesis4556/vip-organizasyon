import { useState } from "react";
import { services } from "../data/services";
import Reveal from "../components/Reveal";

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id);

  return (
    <section className="section" id="hizmetler">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-number">02 — Hizmetler</span>
          <h2 className="section-title">
            ORGANİZASYONUN
            <br />
            <em>DETAYLARI.</em>
          </h2>
        </Reveal>

        <div className="services-grid">
          <div className="services-list">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-row ${activeId === service.id ? "is-active" : ""}`}
                onMouseEnter={() => setActiveId(service.id)}
                onFocus={() => setActiveId(service.id)}
                tabIndex={0}
              >
                <div className="service-row-top">
                  <span className="service-index">{service.index}</span>
                  <span className="service-name">{service.name}</span>
                </div>
                <p className="service-desc">{service.description}</p>
                <div className="service-figure">
                  <img src={service.image} alt="" loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          <div className="services-sticky-figure" aria-hidden="true">
            {services.map((service) => (
              <img
                key={service.id}
                src={service.image}
                alt=""
                className={activeId === service.id ? "is-active" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
