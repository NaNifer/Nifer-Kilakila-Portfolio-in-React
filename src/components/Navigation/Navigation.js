//import useState hook to create menu collapse state
import React from "react";
import { NavLink } from "react-router-dom";

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
                    <MenuItem
                        icon={<FaHome />}>
                        <NavLink exact='true' className="active" to='/'>
                            Home
                        </NavLink>
                    </MenuItem>
                    
                    <MenuItem
                        icon={<FaPortrait />}>
                        <NavLink exact='true' className="" to='/about'>
                            About
                        </NavLink>
                    </MenuItem>

                    <MenuItem
                        icon={<FaCode />}>
                        <NavLink exact='true' className="" to='/skills'>
                            Skills
                        </NavLink>
                    </MenuItem>

                    <MenuItem
                        icon={<FaKeyboard />}>
                        <NavLink exact='true' className="" to='/portfolio'>
                            Portfolio
                        </NavLink>
                    </MenuItem>

                    <MenuItem
                        icon={<FaAlignLeft />}>
                        <NavLink exact='true' className="" to='/resume'>
                            Resume
                        </NavLink>
                    </MenuItem>

                    <MenuItem
                        icon={<FaPaperPlane />}>
                        <NavLink exact='true' className="" to='/contact'>
                            Contact
                        </NavLink>
                    </MenuItem>

                </Menu>
            </SidebarContent>
        </div>
    );
};

export default Nav;