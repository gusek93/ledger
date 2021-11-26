import React from "react";
import Header from "./Header";
//import Footer from "./Footer";
import styles from "./Layout.module.scss"
import LedgerList from "../LedgerList"
import AddLedger from "../AddLedger"

 function Layout() {
    return (
        <div>
            <Header />
                <div className={styles.app}>

                    <AddLedger/>
                    <LedgerList/>
                </div>  
        </div>
    )
}

export default Layout