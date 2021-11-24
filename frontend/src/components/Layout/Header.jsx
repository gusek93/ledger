import React from "react";
import styles from "./Header.module.scss";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <div>
                    가계부
                </div>

                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            user
                        </li>
                        <li>
                            logout
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header