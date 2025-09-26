import React, { Component } from "react";

class About extends Component {
  render() {
    const teamMembers = [
      {
        name: "Hatice Kirac",
        role: "UX Designer",
        internship: "Moment Analyse",
        skills: "Figma, UX, UI, HTML, CSS, C#, React Native, .NET, Docker, Python, MariaDB, MySQL",
        description: "Mitt navn er Hatice, og jeg kommer fra Tyrkia. Som IT-student har jeg opparbeidet meg verdifull erfaring og innsikt innen flere områder av informatikk. Jeg har særlig interesse for både frontend- og backendutvikling, samt sikkerhet som et viktig og spennende felt innen programvareutvikling.\\n\\nGjennom studiet har jeg opparbeidet solid erfaring med samarbeid i grupper, og jeg trives godt med å arbeide sammen med andre for å finne gode løsninger. Jeg er motivert av nye utfordringer og ser alltid etter muligheter for både personlig og faglig utvikling. For tiden deltar jeg i utviklingen av en egen app sammen med en medstudent, noe som gir meg praktisk erfaring og dypere forståelse av utviklingsprosesser.\\n\\nPå fritiden liker jeg å bruke tid på strikking, pilates og sosiale aktiviteter med venner og familie.",
        image: "images/IMG_9932.jpg",
        github: "https://github.com/Haticekiracno",
        linkedin: "https://www.linkedin.com/in/hatice-kirac-65169917b/"
      },
      {
        name: "Furkan Murat Kara",
        role: "Scrum Master",
        internship: "",
        skills: "HTML, CSS, Figma, .Net, Docker, MySQL",
        description: "Jeg heter Furkan og studerer IT og informasjonssystemer ved Universitetet i Agder, hvor jeg nå går tredje året. Gjennom studiene har jeg fått interesse for webutvikling, der jeg jobber både med frontend og backend, og jeg har også erfaring med design og prototyping i Figma. Jeg synes det er spennende å kombinere teknisk kunnskap med kreative løsninger, og jeg liker å lære nye programmeringsspråk og verktøy.\\n\\nPå fritiden liker jeg å spille og se på fotball, og jeg følger med på ulike filmer og serier som gir meg inspirasjon og avkobling. Jeg snakker tyrkisk, engelsk og norsk, og jeg ønsker hele tiden å forbedre språkkunnskapene mine, både for studier og fremtidig arbeid.\\n\\nSom person ser jeg på meg selv som arbeidsom, hjelpsom og ansvarsbevisst. Jeg er rolig og samarbeidsvillig, men kan også ta en lederrolle når det trengs, og jeg setter pris på god kommunikasjon og samarbeid i prosjekter. I fremtiden ønsker jeg å jobbe som utvikler eller prosjektleder, hvor jeg kan bruke både tekniske ferdigheter og personlige egenskaper for å skape gode løsninger.",
        image: "images/furkan.jpg",
        github: "https://github.com/fmkara25",
        linkedin: "https://www.linkedin.com/in/furkan-murat-kara-2ba733382/"
      },
      {
        name: "Ömer Sen",
        role: "Utvikler",
        internship: "",
        skills: "Java, Python, HTML, CSS, JavaScript, React, Node.js",
        description: "Hei! Mitt navn er Ömer og jeg er tredjearsstudent i IT og informasjonssystemer ved Universitetet i Agder. Jeg har en sterk lidenskap for programvareutvikling og liker å jobbe med både frontend- og backend-teknologier. Mine hovedinteresser ligger i å skape effektive og brukervennlige applikasjoner.\\n\\nGjennom studiene har jeg fått erfaring med ulike programmeringsspråk og rammeverk. Jeg liker spesielt å jobbe med moderne webteknologier og er alltid ivrig etter å lære nye verktøy og metoder som kan forbedre utviklingsferdighetene mine.\\n\\nPå fritiden liker jeg å lese om nye teknologier, spille videospill og tilbringe tid med venner og familie. Jeg tror på kontinuerlig læring og ser alltid etter muligheter til å utvide kunnskapen og ferdighetene mine innen informatikk.",
        image: "images/omer.jpg",
        github: "https://github.com/alfredrose",
        linkedin: "http://www.linkedin.com/in/%C3%B6mer-sen-035737382"
      },
      {
        name: "Ahmet Kirac",
        role: "Backend Developer",
        internship: "Sikri",
        skills: "Full Stack Developer (Figma, React js, React Native CLI, Dotnet (Web API, MVC), Azure, AWS)",
        description: "Mitt navn er Ahmet Kirac, tredjeårsstudent i IT og informasjonssystemer. Jeg har jobbet i flere prosjektgrupper og bygger for tiden mitt eget tverrplattform-prosjekt, Granni, for både mobil og web. I praksis hos Sikri har jeg spesielt fokus på backend-utvikling: .NET Web API/MVC, integrasjoner og skalerbare løsninger i Azure og AWS. Samtidig er jeg komfortabel i hele stacken – fra prototyping i Figma til frontend i React/React Native og produksjonssetting i skyen.\\n\\nMålet mitt er å skape robuste, brukersentrerte tjenester – og jeg gleder meg til å bidra med energi, nysgjerrighet og solide leveranser.",
        image: "images/ahmet.jpg",
        github: "https://github.com/amtkrc",
        linkedin: "https://www.linkedin.com/in/ahmet-kirac/"
      }
    ];

    return (
      <section id="about">
        <div className="container-fluid">
          <div className="row">
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
                <span>Om Oss</span>
              </h1>
            </div>
          </div>

          {teamMembers.map((member, index) => (
            <div key={index} className="row justify-content-center mx-auto mb-5" style={{ maxWidth: "1400px" }}>
              <div className="col-md-4 col-lg-3 mb-5 center">
                <div className="polaroid" style={{ textAlign: "center" }}>
                  <img
                    height="400px"
                    width="400px"
                    src={process.env.PUBLIC_URL + "/" + member.image}
                    alt={member.name + " Profile"}
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
                      href={member.github} 
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
                      href={member.linkedin} 
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

              <div className="col-md-8 col-lg-9 center">
                <div className="col-md-12">
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
                      <div style={{ whiteSpace: "pre-line" }}>
                        <span style={{ fontSize: "2em", fontWeight: "bold" }}>{member.name}</span>
                        <br />
                        <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>Rolle:</span> {member.role}
                        <br />
                        {member.internship && (
                          <>
                            <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>Praksis:</span> {member.internship}
                            <br />
                          </>
                        )}
                        <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>Ferdigheter:</span> {member.skills}
                        <br />
                        <br />
                        {member.description.replace(/\\n/g, '\n')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default About;
