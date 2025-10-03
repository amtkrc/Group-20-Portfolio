// App.js
import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Goals from "./components/Goals";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function GoalsSection() {
    return (
        <section style={{ backgroundColor: "#fff" }}>
            <div className="col-md-12">
                <h1 className="section-title" style={{ color: "black" }}>
                    <span>Våre Mål og Ambisjoner</span>
                </h1>
                <div className="col-md-12 mx-auto">
                    <p>
                        Vi er en gruppe studenter med forskjellige interesser og ferdigheter.
                        Vårt felles mål er ikke bare å fullføre dette prosjektet som en del av studiet,
                        men også å utvikle et produkt eller en løsning som kan ha ekte verdi i praksis.
                    </p>
                    <p>
                        Når det gjelder prosjekttype, ønsker vi å fokusere på teknologi og digitale løsninger.
                        Vi vil spesielt legge vekt på bærekraft, brukervennlig design og innovasjon, og ønsker å arbeide
                        med en løsning som kan bidra til å øke effektiviteten i en virksomhet eller organisasjon.
                    </p>
                    <p>Våre mål er:</p>
                    <ul>
                        <li>å utvikle oss innen prosjektledelse og samarbeid,</li>
                        <li>å lære og ta i bruk ny teknologi,</li>
                        <li>å sørge for at løsningen vi lager er både kreativ og gjennomførbar,</li>
                        <li>å presentere et sluttprodukt vi kan være stolte av.</li>
                    </ul>
                    <p>
                        Ambisjonsnivået vårt er høyt, men vi ønsker samtidig å følge en realistisk vei.
                        Vi vil ha glede av læringsprosessen, samtidig som vi skaper noe som kan inspirere andre studenter i fremtiden.
                    </p>
                </div>
            </div>
        </section>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeData: null,
            sharedData: null,
        };
    }

    componentDidMount() {
        this.loadSharedData();
        this.loadResumeData();
    }

    loadResumeData() {
        const url = `${process.env.PUBLIC_URL}/res_primaryLanguage.json`;
        $.ajax({
            url,
            dataType: "json",
            cache: false,
            success: (data) => {
                this.setState({ resumeData: data });
            },
            error: (xhr, status, err) => {
                console.error("Failed to load resume JSON:", err);
                alert("Failed to load resume data. Check console for details.");
            },
        });
    }

    loadSharedData() {
        const url = `${process.env.PUBLIC_URL}/portfolio_shared_data.json`;
        $.ajax({
            url,
            dataType: "json",
            cache: false,
            success: (data) => {
                this.setState({ sharedData: data }, () => {
                    const name = this.state.sharedData?.basic_info?.name;
                    if (name) document.title = name;
                });
            },
            error: (xhr, status, err) => {
                console.error("Failed to load shared JSON:", err);
                alert("Failed to load shared data. Check console for details.");
            },
        });
    }

    render() {
        const sharedBasicInfo = this.state.sharedData?.basic_info;
        const sharedSkills = this.state.sharedData?.skills;

        const resumeBasicInfo = this.state.resumeData?.basic_info;
        const resumeProjects = this.state.resumeData?.projects;
        const resumeExperience = this.state.resumeData?.experience;

        return (
            <div>
                <Header sharedData={sharedBasicInfo} />

                <About
                    resumeBasicInfo={resumeBasicInfo}
                    sharedBasicInfo={sharedBasicInfo}
                />


                {/* Goals component - "Om Oss" bölümünden sonra */}
                <Goals />


                {resumeProjects && resumeBasicInfo && (
                    <Projects
                        resumeProjects={resumeProjects}
                        resumeBasicInfo={resumeBasicInfo}
                    />
                )}

                {sharedSkills && resumeBasicInfo && (
                    <Skills
                        sharedSkills={sharedSkills}
                        resumeBasicInfo={resumeBasicInfo}
                    />
                )}

                {resumeExperience && resumeBasicInfo && (
                    <Experience
                        resumeExperience={resumeExperience}
                        resumeBasicInfo={resumeBasicInfo}
                    />
                )}

                <Footer sharedBasicInfo={sharedBasicInfo} />
            </div>
        );
    }
}

export default App;
