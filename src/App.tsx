import "./App.css";

function App() {
const days = [
  { name: "Luni", hours: "08:30 – 17:30" },
  { name: "Marți", hours: "08:30 – 17:30" },
  { name: "Miercuri", hours: "08:30 – 17:30" },
  { name: "Joi", hours: "08:30 – 17:30" },
  { name: "Vineri", hours: "08:30 – 17:30" },
  { name: "Sâmbătă", hours: "09:00 – 13:00", weekend: true },
  { name: "Duminică", hours: "Închis", closed: true },
];

const todayIndex = new Date().getDay();

// getDay() => 0=Duminică, 1=Luni, ..., 6=Sâmbătă
const dayMap = {
  1: "Luni",
  2: "Marți",
  3: "Miercuri",
  4: "Joi",
  5: "Vineri",
  6: "Sâmbătă",
  0: "Duminică",
};

const todayName = dayMap[todayIndex];



  return (
    <main className="page">
      <section className="hero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <nav className="navbar">
          <div className="brand">
            <span className="brandMark">M</span>
            <div>
              <strong>Premier Motors</strong>
              <small>Mazda Arad</small>
            </div>
          </div>

          <div className="navLinks">
            <a href="#despre">Despre</a>
            <a href="#service">Service</a>
            <a href="#recenzii">Recenzii</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="navButton" href="tel:0357431955">
            Sună acum
          </a>
        </nav>



        <div className="heroContent">
          <div className="heroText">
            <div className="eyebrow">Dealer Mazda autorizat · Arad</div>

            <h1>
              Experiență Mazda premium, cu servicii profesioniste în Arad.
            </h1>

            <p>
              Premier Motors - Mazda Arad oferă consultanță, vânzări și service
              Mazda într-un spațiu modern, cu o echipă apreciată pentru
              seriozitate, promptitudine și atenție la detalii.
            </p>

            <div className="heroActions">
              <a
                className="primaryButton"
                href="https://wa.me/40357431955?text=Bun%C4%83%20ziua%21%20A%C8%99%20dori%20s%C4%83%20programez%20o%20vizit%C4%83%20la%20Premier%20Motors%20-%20Mazda%20Arad."
                target="_blank"
                rel="noreferrer"
              >
                Programează o vizită
              </a>

              <a
                className="secondaryButton"
                href="https://www.google.com/maps/search/?api=1&query=Calea+Zimandului+km5%2B200+310206+Arad"
                target="_blank"
                rel="noreferrer"
              >
                Vezi locația
              </a>
            </div>

            <div className="trustRow">
              <div>
                <strong>4,8</strong>
                <span>rating Google</span>
              </div>

              <div>
                <strong>338</strong>
                <span>recenzii</span>
              </div>

              <div>
                <strong>Mazda</strong>
                <span>dealer autorizat</span>
              </div>
            </div>
          </div>

          <div className="heroCard">
            <div className="carVisual">
              <div className="carTop" />
              <div className="carBody" />
              <div className="carLight carLightLeft" />
              <div className="carLight carLightRight" />
              <div className="wheel wheelLeft" />
              <div className="wheel wheelRight" />
            </div>

            <div className="openingHours">
              <div className="hoursHeader">
                <span className="pulseDot" />
                <strong>Program showroom & service</strong>
              </div>

             <div className="hoursList">
  {days.map((day) => (
    <div
      key={day.name}
      className={`hoursRow
        ${day.weekend ? "weekend" : ""}
        ${day.closed ? "closed" : ""}
        ${day.name === todayName ? "today" : ""}
      `}
    >
      <span>{day.name}</span>
      <strong>{day.hours}</strong>
    </div>
  ))}
</div>

            </div>
          </div>
        </div>
      </section>

      <section className="section intro" id="despre">
        <div className="sectionLabel">Despre afacere</div>

        <div className="split">
          <div>
            <h2>
              Un partener Mazda pentru clienți care vor servicii fără compromis.
            </h2>
          </div>

          <div>
            <p>
              Situat pe Calea Zimandului, Premier Motors - Mazda Arad combină
              experiența de dealer auto cu servicii de mentenanță și suport
              pentru proprietarii Mazda. Clienții apreciază abordarea
              profesionistă, explicațiile clare și modul atent în care echipa
              gestionează fiecare interacțiune.
            </p>
          </div>
        </div>
      </section>

      <section className="section services" id="service">
        <div className="sectionHeader">
          <span className="sectionLabel">Servicii</span>
          <h2>Tot ce ai nevoie pentru mașina ta Mazda.</h2>
        </div>

        <div className="serviceGrid">
          <article className="serviceCard">
            <span>01</span>
            <h3>Vânzări Mazda</h3>
            <p>
              Consultanță pentru alegerea modelului potrivit, configurare și
              suport pe tot parcursul achiziției.
            </p>
          </article>

          <article className="serviceCard">
            <span>02</span>
            <h3>Service autorizat</h3>
            <p>
              Intervenții realizate profesionist, cu atenție la detalii și
              comunicare clară cu clientul.
            </p>
          </article>

          <article className="serviceCard">
            <span>03</span>
            <h3>Ridicare comenzi</h3>
            <p>
              Posibilitate de ridicare a comenzilor în magazin, direct din
              locația Premier Motors Arad.
            </p>
          </article>

          <article className="serviceCard">
            <span>04</span>
            <h3>Experiență premium</h3>
            <p>
              O echipă apreciată pentru seriozitate, răbdare, promptitudine și
              amabilitate.
            </p>
          </article>
        </div>
      </section>

      <section className="section reviews" id="recenzii">
        <div className="reviewSummary">
          <span className="sectionLabel">Recenzii Google</span>
          <h2>4,8 din 5, bazat pe 338 de recenzii.</h2>
          <p>
            Clienții descriu experiența ca fiind profesionistă, serioasă și
            prietenoasă, cu servicii pentru care unii revin chiar și de la
            distanță.
          </p>
        </div>

        <div className="reviewGrid">
          <article className="reviewCard">
            <div className="stars">★★★★★</div>
            <p>“Service profesional. Pe bune. Mai rar.”</p>
            <strong>Sandoiu Bogdan</strong>
            <span>Local Guide</span>
          </article>

          <article className="reviewCard featuredReview">
            <div className="stars">★★★★★</div>
            <p>
              “Foarte serioși, profesioniști, au răbdare, explică toate
              detaliile. Bravo!”
            </p>
            <strong>Ionel Boldura</strong>
            <span>Local Guide</span>
          </article>

          <article className="reviewCard">
            <div className="stars">★★★★★</div>
            <p>
              “Personal amabil, profesionist, prompt. De fiecare dată suntem
              plăcut impresionați.”
            </p>
            <strong>Condei Izabela</strong>
            <span>Client Mazda</span>
          </article>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contactCard">
          <div>
            <span className="sectionLabel">Contact</span>
            <h2>Programează următoarea vizită la Mazda Arad.</h2>
            <p>
              Ai nevoie de consultanță, service sau detalii despre un model
              Mazda? Echipa Premier Motors - Mazda Arad te poate ajuta direct în
              showroom.
            </p>
          </div>

          <div className="contactDetails">
            <a href="tel:0357431955">0357 431 955</a>
            <span>Calea Zimandului km5+200, 310206 Arad</span>
            <span>Deschis până la 17:30</span>

            <a
              className="primaryButton full"
              href="https://www.google.com/maps/search/?api=1&query=Calea+Zimandului+km5%2B200+310206+Arad"
              target="_blank"
              rel="noreferrer"
            >
              Obține indicații
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
