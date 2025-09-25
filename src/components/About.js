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

    // Dil kontrolü - İngilizce içerikler
    const isEnglish = sectionName === "About Us";
    
    const furkanContent = isEnglish 
      ? "<span style=\"font-size: 2em; font-weight: bold;\">Furkan Murat Kara</span>\n<span style=\"font-size: 1.5em; font-weight: bold;\">Role:</span> Scrum Master\n<span style=\"font-size: 1.5em; font-weight: bold;\">Skills:</span> HTML, CSS, Figma, .Net, Docker, MySQL\n\nMy name is Furkan and I study IT and Information Systems at the University of Agder, where I am now in my third year. Through my studies, I have developed an interest in web development, working with both frontend and backend, and I also have experience with design and prototyping in Figma. I find it exciting to combine technical knowledge with creative solutions, and I like learning new programming languages and tools.\n\nIn my free time, I like to play and watch football, and I follow various movies and series that give me inspiration and relaxation. I speak Turkish, English and Norwegian, and I constantly want to improve my language skills, both for studies and future work.\n\nAs a person, I see myself as hardworking, helpful and responsible. I am calm and cooperative, but can also take a leadership role when needed, and I appreciate good communication and collaboration in projects. In the future, I want to work as a developer or project manager, where I can use both technical skills and personal qualities to create good solutions."
      : "<span style=\"font-size: 2em; font-weight: bold;\">Furkan Murat Kara</span>\n<span style=\"font-size: 1.5em; font-weight: bold;\">Rolle:</span> Scrum Master\n<span style=\"font-size: 1.5em; font-weight: bold;\">Ferdigheter:</span> HTML, CSS, Figma, .Net, Docker, MySQL\nJeg heter Furkan og studerer IT og informasjonssystemer ved Universitetet i Agder, hvor jeg nå går tredje året. Gjennom studiene har jeg fått interesse for webutvikling, der jeg jobber både med frontend og backend, og jeg har også erfaring med design og prototyping i Figma. Jeg synes det er spennende å kombinere teknisk kunnskap med kreative løsninger, og jeg liker å lære nye programmeringsspråk og verktøy.\nPå fritiden liker jeg å spille og se på fotball, og jeg følger med på ulike filmer og serier som gir meg inspirasjon og avkobling. Jeg snakker tyrkisk, engelsk og norsk, og jeg ønsker hele tiden å forbedre språkkunnskapene mine, både for studier og fremtidig arbeid.\nSom person ser jeg på meg selv som arbeidsom, hjelpsom og ansvarsbevisst. Jeg er rolig og samarbeidsvillig, men kan også ta en lederrolle når det trengs, og jeg setter pris på god kommunikasjon og samarbeid i prosjekter. I fremtiden ønsker jeg å jobbe som utvikler eller prosjektleder, hvor jeg kan bruke både tekniske ferdigheter og personlige egenskaper for å skape gode løsninger.";

    const omerContent = isEnglish
      ? "<span style=\"font-size: 2em; font-weight: bold;\">Ömer Kirac</span>\n<span style=\"font-size: 1.5em; font-weight: bold;\">Role:</span> Developer\n<span style=\"font-size: 1.5em; font-weight: bold;\">Skills:</span> Java, Python, HTML, CSS, JavaScript, React, Node.js\n\nHello! My name is Ömer and I am a third-year IT and Information Systems student at the University of Agder. I have a strong passion for software development and enjoy working on both frontend and backend technologies. My main interests lie in creating efficient and user-friendly applications.\n\nThroughout my studies, I have gained experience in various programming languages and frameworks. I particularly enjoy working with modern web technologies and am always eager to learn new tools and methodologies that can improve my development skills.\n\nIn my free time, I enjoy reading about new technologies, playing video games, and spending time with friends and family. I believe in continuous learning and am always looking for opportunities to expand my knowledge and skills in the field of computer science."
      : "<span style=\"font-size: 2em; font-weight: bold;\">Ömer Kirac</span>\n<span style=\"font-size: 1.5em; font-weight: bold;\">Rolle:</span> Utvikler\n<span style=\"font-size: 1.5em; font-weight: bold;\">Ferdigheter:</span> Java, Python, HTML, CSS, JavaScript, React, Node.js\n\nHei! Mitt navn er Ömer og jeg er tredjearsstudent i IT og informasjonssystemer ved Universitetet i Agder. Jeg har en sterk lidenskap for programvareutvikling og liker å jobbe med både frontend- og backend-teknologier. Mine hovedinteresser ligger i å skape effektive og brukervennlige applikasjoner.\n\nGjennom studiene har jeg fått erfaring med ulike programmeringsspråk og rammeverk. Jeg liker spesielt å jobbe med moderne webteknologier og er alltid ivrig etter å lære nye verktøy og metoder som kan forbedre utviklingsferdighetene mine.\n\nPå fritiden liker jeg å lese om nye teknologier, spille videospill og tilbringe tid med venner og familie. Jeg tror på kontinuerlig læring og ser alltid etter muligheter til å utvide kunnskapen og ferdighetene mine innen informatikk.";

    const ahmetContent = isEnglish
      ? "<span style=\"font-size: 2em; font-weight: bold;\">Ahmet Kirac</span>\n<span style=\"font-size: 1.5em; font-weight: bold;\">Role:</span> Backend Developer\n<span style=\"font-size: 1.5em; font-weight: bold;\">Internship:</span> Sikri\n<span style=\"font-size: 1.5em; font-weight: bold;\">Skills:</span> Full Stack Developer (Figma, React js, React Native CLI, .NET Web API, MVC, Azure, AWS)\n\nMy name is Ahmet Kirac, a third-year student in IT and Information Systems. I have worked in several project groups and am currently building my own cross-platform project, Granni, for both mobile and web. In my internship at Sikri, I have a particular focus on backend development: .NET Web API/MVC, integrations and scalable solutions in Azure and AWS. At the same time, I am comfortable throughout the entire stack – from prototyping in Figma to frontend in React/React Native and production deployment in the cloud. My goal is to create robust, user-centered services – and I look forward to contributing with energy, curiosity and solid deliveries."
      : "<span style=\"font-size: 2em; font-weight: bold;\">Ahmet Kirac</span>\n<span style=\"font-size: 1.5em; font-weight: bold;\">Rolle:</span> Backend\n<span style=\"font-size: 1.5em; font-weight: bold;\">Praksis:</span> Sikri\n<span style=\"font-size: 1.5em; font-weight: bold;\">Ferdigheter:</span> Full Stack Developer (Figma, React js, React Native CLI, Dotnet ( Wep API, MVC), Azure, AWS)\n\nMitt navn er Ahmet Kirac, tredjeårsstudent i IT og informasjonssystemer. Jeg har jobbet i flere prosjektgrupper og bygger for tiden mitt eget tverrplattform-prosjekt, Granni, for både mobil og web. I praksis hos Sikri har jeg spesielt fokus på backend-utvikling: .NET Web API/MVC, integrasjoner og skalerbare løsninger i Azure og AWS. Samtidig er jeg komfortabel i hele stacken – fra prototyping i Figma til frontend i React/React Native og produksjonssetting i skyen. Målet mitt er å skape robuste, brukersentrerte tjenester – og jeg gleder meg til å bidra med energi, nysgjerrighet og solide leveranser.";

    const helloText = isEnglish ? "Hi :)" : "Hei :)";

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
                    <span className="wave">{helloText} </span>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: furkanContent }} />
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
                    <span className="wave">{helloText} </span>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: omerContent }} />
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
                    <span className="wave">{helloText} </span>
                    <br />
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: ahmetContent }} />
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
                    <span className="wave">{helloText} </span>
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
