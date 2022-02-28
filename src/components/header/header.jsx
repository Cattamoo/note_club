import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote, faDoorOpen, faSquarePlus, faCalculator } from '@fortawesome/free-solid-svg-icons'

import styles from './header.module.css';

const Header = ({ onCalculator, onLogout, addNote }) => {
    const onAdd = () => {
        addNote({
            id: new Date().getTime(),
            title: "",
            content: "",
        })
    }
    const openCalculator = () => {
        onCalculator();
    }

    return (
        <header className={styles.header}>
            <span className={styles.title}>
                <FontAwesomeIcon icon={faStickyNote} /> Note Club
            </span>
            <button className={`${styles.button} ${styles.setting}`} onClick={openCalculator}>
                <FontAwesomeIcon icon={faCalculator} />
            </button>
            {
                onLogout &&
                <div>
                    <span className={styles.buttonGroup}>
                        <button className={`${styles.button} ${styles.add}`} onClick={onAdd}>
                            <FontAwesomeIcon icon={faSquarePlus} /> Add
                        </button>
                    </span>
                    <button className={styles.logout} onClick={onLogout}>
                        <FontAwesomeIcon icon={faDoorOpen} /> Logout
                    </button>
                </div>
            }
        </header>
    );
    /**
     *  - Setting Button -
     *   <button className={`${styles.button} ${styles.setting}`}>
     *       <FontAwesomeIcon icon={faGear} /> Setting
     *   </button>
     */
}

export default Header;