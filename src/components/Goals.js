import React, { Component } from "react";

class Goals extends Component {
  render() {
    return (
      <section id="goals" style={{ 
        padding: "80px 20px", 
        backgroundColor: "#000000", // Doğru siyah kod
        minHeight: "500px"
      }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Ana Başlık */}
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#ffffff", // Başlığı beyaz yapalım
            textAlign: "center",
            marginBottom: "50px",
            textShadow: "2px 2px 4px rgba(255,255,255,0.1)"
          }}>
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
              background: "#ffffff",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(255,255,255,0.1)",
              textAlign: "center",
              border: "1px solid #333",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{
                fontSize: "3rem",
                marginBottom: "20px"
              }}>🎯</div>
              <h3 style={{ 
                color: "#2c3e50", 
                marginBottom: "20px",
                fontSize: "1.5rem"
              }}>Innovasjon</h3>
              <p style={{
                color: "#6c757d",
                lineHeight: "1.6",
                fontSize: "1.1rem"
              }}>
                Vi streber etter å utvikle innovative løsninger som setter nye standarder innen teknologi og brukeropplevelse.
              </p>
            </div>

            {/* Mål 2 - Kvalitet */}
            <div style={{
              background: "#ffffff",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(255,255,255,0.1)",
              textAlign: "center",
              border: "1px solid #333"
            }}>
              <div style={{
                fontSize: "3rem",
                marginBottom: "20px"
              }}>🚀</div>
              <h3 style={{ 
                color: "#2c3e50", 
                marginBottom: "20px",
                fontSize: "1.5rem"
              }}>Kvalitet</h3>
              <p style={{
                color: "#6c757d",
                lineHeight: "1.6",
                fontSize: "1.1rem"
              }}>
                Høy kvalitet i alle aspekter av vårt arbeid, fra kode til design og brukergrensesnitt.
              </p>
            </div>

            {/* Mål 3 - Kreativitet */}
            <div style={{
              background: "#ffffff",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(255,255,255,0.1)",
              textAlign: "center",
              border: "1px solid #333"
            }}>
              <div style={{
                fontSize: "3rem",
                marginBottom: "20px"
              }}>💡</div>
              <h3 style={{ 
                color: "#2c3e50", 
                marginBottom: "20px",
                fontSize: "1.5rem"
              }}>Kreativitet</h3>
              <p style={{
                color: "#6c757d",
                lineHeight: "1.6",
                fontSize: "1.1rem"
              }}>
                Kombinere teknisk ekspertise med kreativ tenkning for å skape unike og engasjerende løsninger.
              </p>
            </div>
          </div>

          {/* Ana Açıklama Metni */}
          <div style={{
            background: "#ffffff",
            padding: "50px",
            borderRadius: "20px",
            boxShadow: "0 15px 40px rgba(255,255,255,0.1)",
            textAlign: "center",
            marginBottom: "0"
          }}>
            <p style={{
              fontSize: "1.3rem",
              lineHeight: "1.8",
              color: "#495057",
              maxWidth: "900px",
              margin: "0 auto",
              fontWeight: "300"
            }}>
              Vi i <strong>Gruppe 20</strong> streber etter å levere innovative løsninger som kombinerer 
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