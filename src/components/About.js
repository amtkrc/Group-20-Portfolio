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
          <h1 style={{ color: "black" }}>
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
                    href="https://github.com/furkanmuratkar" 
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
