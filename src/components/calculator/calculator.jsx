import React from 'react';
import styles from './calculator.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Calculator = ({ onCalculator }) => {
    const closeCalculator = () => {
        onCalculator();
    }
    return (
        <div className={styles.calculator}>
            <button className={styles.closeButton} onClick={closeCalculator}><FontAwesomeIcon icon={faClose} /></button>
            <iframe className={styles.iframe} src={`${process.env.PUBLIC_URL}/calculator/calculator.html`} />
        </div>
    );
}

export default Calculator;