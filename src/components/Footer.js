import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer style={{
        background: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        color: "white",
        padding: "60px 0 30px 0",
        marginTop: "80px",
        minHeight: "500px", // Görünürlük için minimum height
        position: "relative"
      }}>
        <div className="container">
          {/* Kontakt Oss Section */}
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h2 style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                marginBottom: "20px",
                color: "white"
              }}>
                Kontakt Oss
              </h2>
              <div style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                margin: "0 auto 40px auto",
                borderRadius: "2px"
              }}></div>
            </div>
          </div>

          {/* Test görünürlük için basit div */}
          <div style={{
            background: "red",
            height: "100px",
            width: "100%",
            color: "white",
            textAlign: "center",
            lineHeight: "100px",
            fontSize: "2rem",
            marginBottom: "30px"
          }}>
            FOOTER TEST - BU GÖRÜNÜYOR MU?
          </div>

          <div className="row justify-content-center">
            {/* Email */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item text-center" style={{
                padding: "30px 20px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>
                <div style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "1.5rem"
                }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <h4 style={{ color: "white", marginBottom: "15px", fontSize: "1.2rem" }}>Email</h4>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: "0", fontSize: "0.9rem" }}>
                  gruppe20@uia.no
                </p>
              </div>
            </div>

            {/* Telefon */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item text-center" style={{
                padding: "30px 20px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>
                <div style={{
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "1.5rem"
                }}>
                  <i className="fas fa-phone"></i>
                </div>
                <h4 style={{ color: "white", marginBottom: "15px", fontSize: "1.2rem" }}>Telefon</h4>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: "0", fontSize: "0.9rem" }}>
                  +47 123 45 678
                </p>
              </div>
            </div>

            {/* Lokasjon */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item text-center" style={{
                padding: "30px 20px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>
                <div style={{
                  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "1.5rem"
                }}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4 style={{ color: "white", marginBottom: "15px", fontSize: "1.2rem" }}>Lokasjon</h4>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: "0", fontSize: "0.9rem" }}>
                  Universitetet i Agder<br />Kristiansand, Norge
                </p>
              </div>
            </div>

            {/* GitHub */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="contact-item text-center" style={{
                padding: "30px 20px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onClick={() => window.open('https://github.com/amtkrc/Group-20-Portfolio', '_blank')}>
                <div style={{
                  background: "linear-gradient(135deg, #24292e 0%, #40444b 100%)",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "1.5rem"
                }}>
                  <i className="fab fa-github"></i>
                </div>
                <h4 style={{ color: "white", marginBottom: "15px", fontSize: "1.2rem" }}>GitHub</h4>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: "0", fontSize: "0.9rem" }}>
                  Group-20-Portfolio
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="row mt-5">
            <div className="col-md-8 mx-auto">
              <div style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "20px",
                padding: "40px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)"
              }}>
                <h3 style={{ 
                  color: "white", 
                  textAlign: "center", 
                  marginBottom: "30px",
                  fontSize: "1.5rem" 
                }}>
                  Send oss en melding
                </h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Ditt navn"
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          border: "1px solid rgba(255,255,255,0.3)",
                          borderRadius: "10px",
                          padding: "15px",
                          color: "white",
                          fontSize: "1rem"
                        }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Din email"
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          border: "1px solid rgba(255,255,255,0.3)",
                          borderRadius: "10px",
                          padding: "15px",
                          color: "white",
                          fontSize: "1rem"
                        }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Emne"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        borderRadius: "10px",
                        padding: "15px",
                        color: "white",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <textarea 
                      className="form-control" 
                      rows="5" 
                      placeholder="Din melding"
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        borderRadius: "10px",
                        padding: "15px",
                        color: "white",
                        fontSize: "1rem",
                        resize: "vertical"
                      }}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button 
                      type="submit" 
                      style={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        border: "none",
                        borderRadius: "50px",
                        padding: "15px 40px",
                        color: "white",
                        fontSize: "1rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.05)";
                        e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      Send Melding
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <div style={{
                borderTop: "1px solid rgba(255,255,255,0.2)",
                paddingTop: "30px",
                marginTop: "30px"
              }}>
                <p style={{ 
                  color: "rgba(255,255,255,0.7)", 
                  margin: "0",
                  fontSize: "0.9rem"
                }}>
                  Copyright © 2025 Gruppe 20 - Universitetet i Agder. Alle rettigheter reservert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;