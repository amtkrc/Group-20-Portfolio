import React, { Component } from "react";
import { FaGem, FaStar, FaMagic } from "react-icons/fa";

class Goals extends Component {
  render() {
    return (
      <section id="goals" style={{ 
        backgroundColor: "#1F1F1F", // Skills bölümü ile aynı renk
        paddingBottom: "10%",
        minHeight: "200px",
        width: "100%",
        overflow: "hidden"
      }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Ana Başlık */}
          <h2 className="section-title" style={{ color: "#ffffff", marginBottom: "50px" }}>
            Våre Mål og Ambisjoner
          </h2>
          
          {/* Mål Kartları */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginBottom: "50px"
          }}>
            {/* Mål 1 - Innovasjon */}
            <div style={{
              background: "rgba(248, 245, 244, 0.05)", // Skills tiles ile aynı renk
              padding: "40px",
              borderRadius: "15px",
              textAlign: "center",
              border: "1px solid #333",
              transition: "transform 0.3s ease"
            }}>
              <div style={{
                fontSize: "3rem",
                marginBottom: "20px",
                color: "#3498db"
              }}>
                <FaGem />
              </div>
              <h3 style={{ color: "#ffffff", fontWeight: "bold" }}>Innovasjon</h3>
              <p style={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: "200%",
                fontSize: "132%"
              }}>
                Vi streber etter å utvikle innovative løsninger som setter nye standarder innen teknologi og brukeropplevelse.
              </p>
            </div>

            {/* Mål 2 - Kvalitet */}
            <div style={{
              background: "rgba(248, 245, 244, 0.05)", // Skills tiles ile aynı renk
              padding: "40px",
              borderRadius: "15px",
              textAlign: "center",
              border: "1px solid #333"
            }}>
              <div style={{
                fontSize: "3rem",
                marginBottom: "20px",
                color: "#f39c12"
              }}>
                <FaStar />
              </div>
              <h3 style={{ color: "#ffffff", fontWeight: "bold" }}>Kvalitet</h3>
              <p style={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: "200%",
                fontSize: "132%"
              }}>
                Høy kvalitet i alle aspekter av vårt arbeid, fra kode til design og brukergrensesnitt.
              </p>
            </div>

            {/* Mål 3 - Kreativitet */}
            <div style={{
              background: "rgba(248, 245, 244, 0.05)", // Skills tiles ile aynı renk
              padding: "40px",
              borderRadius: "15px",
              textAlign: "center",
              border: "1px solid #333"
            }}>
              <div style={{
                fontSize: "3rem",
                marginBottom: "20px",
                color: "#9b59b6"
              }}>
                <FaMagic />
              </div>
              <h3 style={{ color: "#ffffff", fontWeight: "bold" }}>Kreativitet</h3>
              <p style={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: "200%",
                fontSize: "132%"
              }}>
                Kombinere teknisk ekspertise med kreativ tenkning for å skape unike og engasjerende løsninger.
              </p>
            </div>
          </div>

          {/* Ana Açıklama Metni */}
          <div style={{
            background: "rgba(248, 245, 244, 0.05)", // Skills tiles ile aynı renk
            padding: "50px",
            borderRadius: "20px",
            textAlign: "center",
            marginBottom: "0",
            border: "1px solid #333"
          }}>
            <p style={{
              fontSize: "132%",
              lineHeight: "200%",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "900px",
              margin: "0 auto",
              fontWeight: "300"
            }}>
              Vi i <strong style={{ color: "#ffffff" }}>Gruppe 20</strong> streber etter å levere innovative løsninger som kombinerer 
              teknisk dyktighet med kreativitet. Vårt mål er å skape brukervennlige og effektive 
              applikasjoner som inspirerer og gir verdi til våre brukere. Vi ønsker å være en 
              pålitelig partner som leverer resultater som overgår forventningene.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Goals;