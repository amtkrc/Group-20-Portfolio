import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function Projects({ resumeProjects, resumeBasicInfo }) {
    const [deps, setDeps] = useState({});
    const [detailsModalShow, setDetailsModalShow] = useState(false);

    const sectionName = resumeBasicInfo?.section_name?.projects;
    const projects = (resumeProjects || []).map((p) => (
        <div
            className="col-sm-12 col-md-6 col-lg-6"
            key={p.title}
            style={{ cursor: "pointer" }}
        >
            <span className="portfolio-item d-block">
                <div className="foto" onClick={() => { setDetailsModalShow(true); setDeps(p); }}>
                    <div>
                        <img
                            src={p.images[0]}
                            alt="prosjektbilde"
                            height="230"
                            style={{
                                marginBottom: 0,
                                paddingBottom: 0,
                                position: "relative",
                                display: "block",
                                margin: "0 auto",
                                objectFit: "contain"
                            }}
                        />
                        <span className="project-date">{p.startDate}</span>
                        <br />
                        <p className="project-title-settings mt-3">{p.title}</p>
                    </div>
                </div>
            </span>
        </div>
    ));

    return (
        <section id="portfolio">
            <div className="col-md-12">
                <h1 className="section-title" style={{ color: "black" }}>
                    <span>{sectionName}</span>
                </h1>
                <div className="col-md-12 mx-auto">
                    <div className="row mx-auto justify-content-center">{projects}</div>
                </div>
                <ProjectDetailsModal
                    show={detailsModalShow}
                    onHide={() => setDetailsModalShow(false)}
                    data={deps}
                />
            </div>
        </section>
    );
}
