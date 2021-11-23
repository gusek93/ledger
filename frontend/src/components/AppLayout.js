import React from "react";
import "./AppLayout.scss";
import { Input, Menu } from "antd";


function AppLayout({ children }) {
    return (
        <div className="app">
            <div className="header">
                <h1>가계부</h1>
                <div className="search"><Input.Search /></div>
                <div className="topnav">
                    <Menu mode="horizontal">
                        <Menu.Item>메뉴1</Menu.Item>
                        <Menu.Item>메뉴2</Menu.Item>
                        <Menu.Item>메뉴3</Menu.Item>
                    </Menu>
                </div>
            </div>
            
            <div className="contents">{children}</div>
            <div className="sidebar">Sidebar</div>
            <div className="footer">Footer</div>
        </div>
    )
}

export default AppLayout;