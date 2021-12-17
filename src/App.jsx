import React from "react";
import './App.css';
import Header from "./header/Header.jsx";
import Main from "./main/Main";
import Resume from "./resume/Resume";
import Skills from "./skills/Skills";
import MyProjects from "./my projects/MyProjects";
import Hi from "./hi/Hi";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Hi/>
            <Resume/>
            <Skills/>
            <MyProjects/>
        </div>
    );
}

export default App;
