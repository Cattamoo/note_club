import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './service/firebase';
import App from './app';
import {BrowserRouter} from "react-router-dom";
import AuthService from "./service/authService";
import NoteRepository from "./service/noteRepository";

const authService = new AuthService();
const noteRepository = new NoteRepository();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App authService={authService} noteRepository={noteRepository} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
