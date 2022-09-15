//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
    Menu,
    MenuItem,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaPortrait, FaCode, FaKeyboard, FaAlignLeft, FaPaperPlane } from "react-icons/fa";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../Header/Header.css";

const Nav = () => {
    return (
        <>
            <SidebarContent>
                <Menu iconShape="square">
                    {/* <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem> */}
                    <MenuItem icon={<FaPortrait />}>About</MenuItem>
                    <MenuItem icon={<FaCode />}>Skills</MenuItem>
                    <MenuItem icon={<FaKeyboard />}>Portfolio</MenuItem>
                    <MenuItem icon={<FaAlignLeft />}>Resume</MenuItem>
                    <MenuItem icon={<FaPaperPlane />}>Contact</MenuItem>
                </Menu>
            </SidebarContent>
        </>
    );
};

export default Nav;