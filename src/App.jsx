import React from "react";
import './App.css';
import Main from "./main/Main";
import Resume from "./resume/Resume";
import Skills from "./skills/Skills";
import MyProjects from "./my projects/MyProjects";
import Welcome from "./welcome/Welcome";
import Contacts from "./contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Main/>
            <Welcome/>
            <Resume/>
            <Skills/>
            <MyProjects/>
            <Contacts/>
        </div>
    );
}

export default App;
