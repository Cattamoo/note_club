import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import styles from "./note.module.css";

const Note = ({ note, updateNote, deleteNote }) => {
    const { id, title, content } = note;
    const onChange = (event) => {
        if(event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateNote({
            ...note,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    const onDelete = () => {
        deleteNote(id);
    }
    return (
        <div className={styles.note}>
            <div className={styles.titleBox}>
                <input
                    className={styles.title}
                    type="text"
                    name="title"
                    value={title}
                    onChange={onChange}/>
                <div className={styles.buttonGroup}>
                    <button
                        className={`${styles.button} ${styles.delete}`}
                        onDoubleClick={onDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
            <textarea
                className={styles.content}
                name="content"
                value={content}
                onChange={onChange}/>
        </div>
    );
}

export default Note;