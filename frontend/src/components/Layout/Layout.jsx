import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import SignIn from "../Accounts/SignIn";
import SignUp from "../Accounts/SignUp";
import Ledger from "./Ledger";
import ChangeLedger from "../ChangeLedger";
import Users from "./Users";
import User from "./User";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

//import LoginRequiredRoute from "../../utils/LoginRequiredRoute";



function Layout() {
    return (
        <Router>
            <div className="Layout">
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/signin"} component={SignIn}/>
                        <Route exact path={"/signup"} component={SignUp}/>
                        <Route exact path={"/ledger"} component={Ledger}/>
                        <Route exact path={"/ledger/:id"} component={ChangeLedger}/>
                        <Route exact path={"/users"} component={Users}/>
                        <Route exact path={"//users/:pk"} component={User}/>
                    </Switch>
                </div>
            </div>
        </Router>
        
    )
}

export default Layout