import React from 'react';
import './App.css';
import {MainHeader} from "./components/header/MainHeader";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Works} from "./components/works/Works";
import {RemoteWork} from "./components/remoteWork/RemoteWork";

function App() {
    return (
        <div className="App">
            <MainHeader/>
            <Main/>
            <Skills/>
            <Works/>
            <RemoteWork/>
        </div>
    );
}

export default App;
