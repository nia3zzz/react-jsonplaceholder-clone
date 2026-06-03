import "../styles/pages/AboutUs.css";
import srothitlogo from "../assets/srothitlogo.png";

function AboutPage() {
  return (
    <div>
      <section className="about">
        <div className="about__blob about__blob--tr" aria-hidden="true" />
        <div className="about__blob about__blob--bl" aria-hidden="true" />

        <div className="about__grid">
          <div className="about__left">
            <h1 className="about__heading">Sroth IT</h1>
            <p className="about__tag">This is a portfolio of our agency</p>
            <p className="about__body">
              Helping businesses grow through modern software solutions. We
              specialize in web development, backend systems, mobile & desktop
              applications, UI/UX design, custom AI/ML services, cloud
              infrastructure, cybersecurity, QA, software testing, IT consulting
              and enterprise software solutions. We have a proven record of
              building fast, scalable, and consumer focused products that drive
              real results.
            </p>
            <a
              href="https://www.srothit.com "
              target="_blank"
              className="about__cta"
            >
              Visit Us
            </a>
          </div>

          <div className="about__right">
            <div className="about__img-frame">
              <div className="about__img-placeholder">
                <img
                  src={srothitlogo}
                  alt="Sroth IT Logo"
                  className="about__img"
                />
              </div>
            </div>
            <div className="about__corner-accent" aria-hidden="true" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
