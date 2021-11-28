import React from "react";
import Navbar from "./Navbar";
import routers from "./routers";
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
                <div className="container">
                    <Switch>
                        {routers.map(route => {
                            return (
                                <Route key={route.path} path={route.path} exact>
                                    <route.component />
                                </Route>
                            )
                        })}
                    </Switch>
                </div>
            </div>
        </Router>
        
    )
}

export default Layout