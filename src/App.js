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
