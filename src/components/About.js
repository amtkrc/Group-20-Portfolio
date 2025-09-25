import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ 
            color: "#2c3e50",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "3rem",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
          }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid" style={{ textAlign: "center" }}>
                <img
                  height="400px"
                  width="400px"
                  src="images/furkan.jpg"
                  alt="Furkan Profile"
                  style={{ 
                    display: "block", 
                    margin: "40px auto 0 auto",
                    border: "10px solid #fff",
                    borderRadius: "20px",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)",
                    objectFit: "cover",
                    backgroundColor: "#fff",
                    maxWidth: "100%"
                  }}
                />
                <div style={{ marginTop: "30px", textAlign: "center", display: "flex", justifyContent: "center", gap: "20px" }}>
                  <a 
                    href="https://github.com/fmkara25" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#333", 
                      color: "white", 
                      textDecoration: "none", 
                      borderRadius: "50%",
                      fontSize: "24px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/furkan-murat-kara-2ba733382/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#0077b5", 
                      color: "white", 
                      textDecoration: "none", 
                      borderRadius: "50%",
                      fontSize: "24px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                      whiteSpace: "pre-line",
                    }}
                  >
                    <br />
                    <span className="wave">Hei :) </span>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: "<span style=\"font-size: 2em; font-weight: bold;\">Furkan Murat Kara</span>\n<span style=\"font-size: 1.5em; font-weight: bold;\">Rolle:</span> Scrum Master\n<span style=\"font-size: 1.5em; font-weight: bold;\">Ferdigheter:</span> HTML, CSS, Figma, .Net, Docker, MySQL\nJeg heter Furkan og studerer IT og informasjonssystemer ved Universitetet i Agder, hvor jeg nå går tredje året. Gjennom studiene har jeg fått interesse for webutvikling, der jeg jobber både med frontend og backend, og jeg har også erfaring med design og prototyping i Figma. Jeg synes det er spennende å kombinere teknisk kunnskap med kreative løsninger, og jeg liker å lære nye programmeringsspråk og verktøy.\nPå fritiden liker jeg å spille og se på fotball, og jeg følger med på ulike filmer og serier som gir meg inspirasjon og avkobling. Jeg snakker tyrkisk, engelsk og norsk, og jeg ønsker hele tiden å forbedre språkkunnskapene mine, både for studier og fremtidig arbeid.\nSom person ser jeg på meg selv som arbeidsom, hjelpsom og ansvarsbevisst. Jeg er rolig og samarbeidsvillig, men kan også ta en lederrolle når det trengs, og jeg setter pris på god kommunikasjon og samarbeid i prosjekter. I fremtiden ønsker jeg å jobbe som utvikler eller prosjektleder, hvor jeg kan bruke både tekniske ferdigheter og personlige egenskaper for å skape gode løsninger." }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ömer'in Bilgileri */}
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid" style={{ textAlign: "center" }}>
                <img
                  height="400px"
                  width="400px"
                  src="images/omer.jpg"
                  alt="Ömer Profile"
                  style={{ 
                    display: "block", 
                    margin: "40px auto 0 auto",
                    border: "10px solid #fff",
                    borderRadius: "20px",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)",
                    objectFit: "cover",
                    backgroundColor: "#fff",
                    maxWidth: "100%"
                  }}
                />
                <div style={{ marginTop: "30px", textAlign: "center", display: "flex", justifyContent: "center", gap: "20px" }}>
                  <a 
                    href="https://github.com/alfredrose" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#333", 
                      color: "white", 
                      textDecoration: "none", 
                      borderRadius: "50%",
                      fontSize: "24px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="http://www.linkedin.com/in/%C3%B6mer-sen-035737382" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#0077b5", 
                      color: "white", 
                      textDecoration: "none", 
                      borderRadius: "50%",
                      fontSize: "24px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                      whiteSpace: "pre-line",
                    }}
                  >
                    <br />
                    <span className="wave">Hei :) </span>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: "<span style=\"font-size: 2em; font-weight: bold;\">Ömer Sen</span>\n<span style=\"font-size: 1.5em; font-weight: bold;\">Rolle:</span> Frontend-utvikler\n<span style=\"font-size: 1.5em; font-weight: bold;\">Ferdigheter:</span> Figma, UX, UI, HTML, CSS, C#, .NET, Python, MariaDB, MySQL, Docker, AWS\nMitt navn er Ömer Sen, og jeg studerer IT ved Universitetet i Agder. Gjennom studiet har jeg opparbeidet meg erfaring innen frontend- og backendutvikling, databaser og sikkerhet. Jeg er spesielt interessert i hvordan teknologi kan brukes til å utvikle brukervennlige og sikre løsninger.\nJeg har bred erfaring fra gruppearbeid og prosjektarbeid, og trives med å samarbeide for å finne gode og kreative løsninger. For tiden deltar jeg i utviklingen av et webprosjekt i .NET, noe som gir meg praktisk erfaring med både programmering og utviklingsprosesser.\nJeg er motivert av nye utfordringer og ser på bacheloroppgaven som en mulighet til å kombinere faglig kunnskap med praktiske problemstillinger i samarbeid med en bedrift." }} />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid" style={{ textAlign: "center" }}>
                <img
                  height="400px"
                  width="400px"
                  src="images/ahmet.jpg"
                  alt="Ahmet Profile"
                  style={{ 
                    display: "block", 
                    margin: "40px auto 0 auto",
                    border: "10px solid #fff",
                    borderRadius: "20px",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)",
                    objectFit: "cover",
                    backgroundColor: "#fff",
                    maxWidth: "100%"
                  }}
                />
                <div style={{ marginTop: "30px", textAlign: "center", display: "flex", justifyContent: "center", gap: "20px" }}>
                  <a 
                    href="https://github.com/amtkrc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#333", 
                      color: "white", 
                      textDecoration: "none", 
                      borderRadius: "50%",
                      fontSize: "24px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ahmet-kirac-344b4a196/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#0077b5", 
                      color: "white", 
                      textDecoration: "none", 
                      borderRadius: "50%",
                      fontSize: "24px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                      whiteSpace: "pre-line",
                    }}
                  >
                    <br />
                    <span className="wave">Hei :) </span>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: "<span style=\"font-size: 2em; font-weight: bold;\">Ahmet Kirac</span>\n<span style=\"font-size: 1.5em; font-weight: bold;\">Rolle:</span> Backend\n<span style=\"font-size: 1.5em; font-weight: bold;\">Praksis:</span> Sikri\n<span style=\"font-size: 1.5em; font-weight: bold;\">Ferdigheter:</span> Full Stack Developer (Figma, React js, React Native CLI, Dotnet ( Wep API, MVC), Azure, AWS)\n\nMitt navn er Ahmet Kirac, tredjeårsstudent i IT og informasjonssystemer. Jeg har jobbet i flere prosjektgrupper og bygger for tiden mitt eget tverrplattform-prosjekt, Granni, for både mobil og web. I praksis hos Sikri har jeg spesielt fokus på backend-utvikling: .NET Web API/MVC, integrasjoner og skalerbare løsninger i Azure og AWS. Samtidig er jeg komfortabel i hele stacken – fra prototyping i Figma til frontend i React/React Native og produksjonssetting i skyen. Målet mitt er å skape robuste, brukersentrerte tjenester – og jeg gleder meg til å bidra med energi, nysgjerrighet og solide leveranser." }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hatice'nin Bilgileri */}
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid" style={{ textAlign: "center" }}>
                <img
                  height="400px"
                  width="400px"
                  src={profilepic}
                  alt="Profile"
                  style={{ 
                    display: "block", 
                    margin: "40px auto 0 auto",
                    border: "10px solid #fff",
                    borderRadius: "20px",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)",
                    objectFit: "cover",
                    backgroundColor: "#fff",
                    maxWidth: "100%"
                  }}
                />
                <div style={{ marginTop: "30px", textAlign: "center", display: "flex", justifyContent: "center", gap: "20px" }}>
                  <a 
                    href="https://github.com/Haticekiracno" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#333", 
                      color: "white", 
                      textDecoration: "none", 
                      borderRadius: "50%",
                      fontSize: "24px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/hatice-kirac-65169917b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#0077b5", 
                      color: "white", 
                      textDecoration: "none", 
                      borderRadius: "50%",
                      fontSize: "24px",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                      whiteSpace: "pre-line",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: about }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
