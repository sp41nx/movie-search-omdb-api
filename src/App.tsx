import React from 'react';
import './App.css';
import Main from "./components/Main";
import {MainScreen} from "./components/styled";
import Header from "./components/Header";

function App() {

    return (
        <div className="App d-flex flex-column justify-content-center mt-1">
            <Header/>
            <MainScreen>
                <Main/>
            </MainScreen>
        </div>
    );
}

export default App;
