import React from "react";

function PromoVideo() {
    return (
        <section id="promo-video" style={{ padding: "60px 20px", backgroundColor: "#f8f9fa" }}>
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
                <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "20px", color: "#222" }}>
                    Promo Video
                </h2>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <div
                        style={{
                            position: "relative",
                            paddingBottom: "56.25%",
                            height: 0,
                            overflow: "hidden",
                            borderRadius: "12px",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                            background: "#fff",
                        }}
                    >
                        <iframe
                            src="https://drive.google.com/file/d/1W_-FR0nzMw5x8yjqf48u0hE1lywxGjfd/preview"
                            title="Promo Video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                border: 0,
                                borderRadius: "12px",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromoVideo;