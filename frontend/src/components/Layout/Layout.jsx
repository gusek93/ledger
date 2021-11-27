import React from "react";
import Header from "./Header";
//import Footer from "./Footer";
import styles from "./Layout.module.scss"
import LedgerList from "../LedgerList"
import AddLedger from "../AddLedger"
import Navbar from "./Navbar";
import Users from "./Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

 function Layout() {
    return (
        <Router>
            <div className="Layout">
                <Navbar />
                <Switch>
                    <Route path="/ledger">
                        <Header />
                        <div className={styles.app}>
                            <AddLedger />
                            <LedgerList />
                        </div>
                    </Route>

                    <Route path="/users">
                        <Users />
                    </Route>

                    <Route path="/" exact>
                        <h1>home page</h1>
                    </Route>
                </Switch>
                
                    
               

            </div>
        </Router>
        
    )
}

export default Layout