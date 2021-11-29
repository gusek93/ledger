import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink 
                            className="nav-link " 
                            aria-current="page" 
                            to="/ledger"
                            activeClassName="active"

                            >
                                Ledger
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/users" 
                                activeClassName="active"
                            >
                            Users
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav> 
    )

}

export default Navbar; 