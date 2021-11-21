import React from 'react';
import './App.css';
import {MainHeader} from "./components/header/MainHeader";
import {Main} from "./components/main/Main";

function App() {
    return (
        <div className="App">
            <MainHeader/>
            <Main/>
        </div>
    );
}

export default App;
