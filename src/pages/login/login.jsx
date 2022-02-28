import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import styles from './login.module.css'

const Login = ({ authService }) => {
    const navigate = useNavigate();
    const goToNoteList = (userId) => {
        navigate(
            '/note_club/note',
            {state: { id: userId }},
        );
    }
    const onLogin = (event) => {
        authService
            .login(event.currentTarget.dataset.title)
            .then((data) => goToNoteList(data.user.uid))
        ;
    }
    useEffect(() => {
        authService
            .onAuthChange(user => {
                user && goToNoteList(user.uid);
            });
    });
    return (
        <section className={styles.container}>
            <Header />
            <section className={styles.login}>
                <h1 className={styles.title}>
                    <FontAwesomeIcon icon={faLock} />
                </h1>
                <div className={styles.loginButtonGroup}>
                    <button
                        className={`${styles.button} ${styles.twitter}`}
                        data-title="Twitter"
                        onClick={onLogin}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                </div>
            </section>
            <Footer />
        </section>
    );
}

export default Login;