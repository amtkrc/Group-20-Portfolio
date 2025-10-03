import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer style={{
        background: "#1F1F1F",
        color: "white",
        paddingBottom: "5%",
        width: "100%",
        minHeight: "200px",
        overflow: "hidden"
      }}>
        {/* Kontakt Başlığı */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 className="section-title" style={{ color: "white" }}>
            Kontakt Oss
          </h2>
        </div>

        {/* Basit Kontakt Kartları */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          margin: "0 auto",
          maxWidth: "1200px"
        }}>
          {/* Email */}
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center",
            minWidth: "250px",
            cursor: "pointer"
          }}>
            <div style={{
              background: "#fff",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "24px"
            }}>
              📧
            </div>
            <h4 style={{ color: "white" }}>Email</h4>
            <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>
              fmkara.25@gmail.com
            </p>
          </div>

          {/* Telefon */}
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center",
            minWidth: "250px",
            cursor: "pointer"
          }}>
            <div style={{
              background: "#fff",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "24px"
            }}>
              📞
            </div>
            <h4 style={{ color: "white" }}>Telefon</h4>
            <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>
              +47 973 24 025
            </p>
          </div>

          {/* Lokasjon */}
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center",
            minWidth: "250px",
            cursor: "pointer"
          }}>
            <div style={{
              background: "#fff",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "24px"
            }}>
              📍
            </div>
            <h4 style={{ color: "white" }}>Lokasjon</h4>
            <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>
              UiA Kristiansand
            </p>
          </div>

          {/* GitHub */}
          <div 
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              minWidth: "250px",
              cursor: "pointer"
            }}
            onClick={() => window.open('https://github.com/amtkrc/Group-20-Portfolio', '_blank')}
          >
            <div style={{
              background: "#fff",
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "24px"
            }}>
              🔗
            </div>
            <h4 style={{ color: "white" }}>GitHub</h4>
            <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>
              Group-20-Portfolio
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          textAlign: "center",
          marginTop: "30px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.2)"
        }}>
          <p style={{ 
            color: "rgba(255,255,255,0.7)", 
            margin: "0",
            fontSize: "0.9rem"
          }}>
            Copyright © 2025 Gruppe 20 - Universitetet i Agder
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;