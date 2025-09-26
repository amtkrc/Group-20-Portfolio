// App.js
import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resumeData: null,  // from res_primaryLanguage.json or res_secondaryLanguage.json
            sharedData: null,  // from portfolio_shared_data.json
        };
    }

    applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
        this.swapCurrentlyActiveLanguage(oppositeLangIconId);
        document.documentElement.lang = pickedLanguage;

        const resumePath =
            document.documentElement.lang === window.$primaryLanguage
                ? "res_primaryLanguage.json"
                : "res_secondaryLanguage.json";

        this.loadResumeFromPath(resumePath);
    }

    swapCurrentlyActiveLanguage(oppositeLangIconId) {
        const pickedLangIconId =
            oppositeLangIconId === window.$primaryLanguageIconId
                ? window.$secondaryLanguageIconId
                : window.$primaryLanguageIconId;

        const oppEl = document.getElementById(oppositeLangIconId);
        const pickEl = document.getElementById(pickedLangIconId);

        if (oppEl) oppEl.style.removeProperty("filter");
        if (pickEl) pickEl.style.filter = "brightness(40%)";
    }

    componentDidMount() {
        this.loadSharedData();
        this.applyPickedLanguage(
            window.$primaryLanguage,
            window.$secondaryLanguageIconId
        );
    }

    loadResumeFromPath(path) {
        const url = `${process.env.PUBLIC_URL}/${path}`;
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

                <div className="col-md-12 mx-auto text-center language">
                    <div
                        onClick={() =>
                            this.applyPickedLanguage(
                                window.$primaryLanguage,
                                window.$secondaryLanguageIconId
                            )
                        }
                        style={{ display: "inline" }}
                    >
                        <span
                            className="iconify language-icon mr-5"
                            data-icon="twemoji-flag-for-flag-norway"
                            data-inline="false"
                            id={window.$primaryLanguageIconId}
                        ></span>
                    </div>
                    <div
                        onClick={() =>
                            this.applyPickedLanguage(
                                window.$secondaryLanguage,
                                window.$primaryLanguageIconId
                            )
                        }
                        style={{ display: "inline" }}
                    >
                        <span
                            className="iconify language-icon"
                            data-icon="twemoji-flag-for-flag-united-kingdom"
                            data-inline="false"
                            id={window.$secondaryLanguageIconId}
                        ></span>
                    </div>
                </div>

                <About
                    resumeBasicInfo={resumeBasicInfo}
                    sharedBasicInfo={sharedBasicInfo}
                />

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
