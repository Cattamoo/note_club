import React from "react";
import {Route, Routes} from "react-router-dom";

import styles from './app.module.css';

import Login from "./pages/login/login";
import NoteDetail from "./pages/noteDetail/noteDetail";

function App({ authService, noteRepository }) {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<Login authService={authService} />} exact />
                <Route path="/note" element={<NoteDetail authService={authService} noteRepository={noteRepository} />} exact />
            </Routes>
        </div>
    );
}

export default App;
