import React from 'react';
import './App.css';
import {MainHeader} from "./components/header/MainHeader";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";

function App() {
    return (
        <div className="App">
            <MainHeader/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
