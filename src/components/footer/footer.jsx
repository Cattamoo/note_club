import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>
                © 2022 <a
                href={`https://github.com/Cattamoo`}
                className={styles.link}>
                    Cattamoo
                </a>
            </span>
            <div className={styles.linkBox}>
            <a
                href={`https://github.com/Cattamoo/note_club`}
                className={styles.link}>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            </div>
        </footer>
    );
}

export default Footer;