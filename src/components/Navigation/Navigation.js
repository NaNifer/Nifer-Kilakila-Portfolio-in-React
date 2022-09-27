//import useState hook to create menu collapse state
import React from "react";
import { Link, NavLink } from "react-router-dom";

//import react pro sidebar components
import {
    Menu,
    MenuItem,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaHome, FaPortrait, FaCode, FaKeyboard, FaAlignLeft, FaPaperPlane } from "react-icons/fa";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../Header/Header.css";

const Nav = () => {
    return (
        <div className="nav-bar">
            <SidebarContent
                className="position-absolute top-50">
                <Menu iconShape="square">
                    {/* <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem> */}
                    <NavLink exact='true' className="active" to='/'>
                        <MenuItem
                            icon={<FaHome />}>Home
                        </MenuItem>
                    </NavLink>
                        <MenuItem
                            icon={<FaPortrait />}>About
                        </MenuItem>
                    <MenuItem
                        icon={<FaCode />}>Skills
                    </MenuItem>
                    <MenuItem
                        icon={<FaKeyboard />}>Portfolio
                    </MenuItem>
                    <MenuItem
                        icon={<FaAlignLeft />}>Resume
                    </MenuItem>
                    <NavLink exact='true' className="active" to='contact'>

                    <MenuItem
                        icon={<FaPaperPlane />}>Contact
                    </MenuItem>
                    </NavLink>

                </Menu>
            </SidebarContent>
        </div>
    );
};

export default Nav;