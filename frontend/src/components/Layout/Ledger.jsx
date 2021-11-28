import React from "react";
import AddLedger from "../AddLedger";
import LedgerList from "../LedgerList";
import Header from "./Header";
import styles from "./Layout.module.scss"


const Ledger = () => {
    return (
        <>
            <Header />
            <div className={styles.app}>
                <AddLedger />
                <LedgerList />
            </div>
        </>
    );
};

export default Ledger;