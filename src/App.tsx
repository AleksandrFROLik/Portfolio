import React from 'react';
import './App.css';
import {MainHeader} from "./components/header/MainHeader";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Works} from "./components/works/Works";

function App() {
    return (
        <div className="App">
            <MainHeader/>
            <Main/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;
