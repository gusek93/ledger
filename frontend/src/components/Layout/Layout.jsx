import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.scss"
import LedgerList from "../LedgerList"
//import Ledger from "../Ledger"

 function Layout() {
    return (
        <div>
            <Header />
                <div className={styles.app}>
                    <LedgerList/>
                </div>  
            <Footer />
        </div>
    )
}

export default Layout