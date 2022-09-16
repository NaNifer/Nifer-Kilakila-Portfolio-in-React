//import useState hook to create menu collapse state
import React, { useState } from "react";
import Nav from "../Navigation/Navigation";

//import react pro sidebar components
import {
  ProSidebar,
  SidebarHeader,
} from "react-pro-sidebar";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)
  //create a custom function that will change menucollapse state from false to true and true to false
  return (
    <>
      <div
        id="header"
        // On mouse rollover the menu expands
        onMouseEnter={() => setMenuCollapse(false)}
        onMouseLeave={() => setMenuCollapse(true)}>
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader
          // Something below broke the rendering of other components
          className="d-flex justify-content-center pt-5" 
          >
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              {menuCollapse ?
                <h1 className="border circle">NK</h1> :
                <p>Nifer Kilakila</p>
              }
            </div>
          </SidebarHeader>
          <Nav />
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;