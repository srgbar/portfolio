import React from "react";
import './App.css';
import Main from "./main/Main";
import Resume from "./resume/Resume";
import Skills from "./skills/Skills";
import MyProjects from "./my projects/MyProjects";
import Hi from "./hi/Hi";
import Contacts from "./contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Main/>
            <Hi/>
            <Resume/>
            <Skills/>
            <MyProjects/>
            <Contacts/>
        </div>
    );
}

export default App;
