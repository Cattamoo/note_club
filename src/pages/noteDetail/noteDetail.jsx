import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Calculator from "../../components/calculator/calculator";

import styles from './noteDetail.module.css';
import Note from "../../components/note/note";

const NoteDetail = ({ authService, noteRepository }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [userId, setUserId] = useState(location.state && location.state.id);
    const [notes, setNotes] = useState({});
    const [calculator, setCalculator] = useState(false);
    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);
    const updateNote = (note) => {
        setNotes((notes) => {
            const updated = {...notes};
            updated[note.id] = note;
            return updated;
        });
        noteRepository.saveNote(userId, note);
    }
    const deleteNote = (noteId) => {
        setNotes(notes => {
            const updated = {...notes};
            delete updated[noteId];
            return updated;
        });
        noteRepository.removeNote(userId, noteId);
    }
    const setCalculatorState = () => {
        setCalculator(!calculator);
    }
    // mount
    useEffect(() => {
        if(!userId) {
            return;
        }
        const stopSync = noteRepository.syncCards(userId, notes => {
            setNotes(notes);
        });
        return () => stopSync();
    }, [userId, noteRepository]);
    // Login
    useEffect(() => {
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.uid);
            } else {
                navigate('/note_club');
            }
        })
    }, [authService, userId, navigate]);

    return (
        <section className={styles.container}>
            <Header
                onCalculator={setCalculatorState}
                onLogout={onLogout}
                addNote={updateNote} />
            {calculator && <Calculator onCalculator={setCalculatorState} />}
            <div className={styles.contents}>
                {
                    Object.keys(notes).map((key) => {
                        return (
                            <Note
                                key={key}
                                note={notes[key]}
                                updateNote={updateNote}
                                deleteNote={deleteNote} />
                        )
                    })
                }
            </div>
            <Footer />
        </section>
    )
}

export default NoteDetail;