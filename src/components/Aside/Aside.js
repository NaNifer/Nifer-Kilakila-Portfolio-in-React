//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaPortrait, FaCode, FaKeyboard, FaAlignLeft, FaPaperPlane  } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Aside.css";


const Aside = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "PIC" : "Nifer Kilakila, web developer"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<FaPortrait />}>About</MenuItem>
              <MenuItem icon={<FaCode />}>Skills</MenuItem>
              <MenuItem icon={<FaKeyboard />}>Projects</MenuItem>
              <MenuItem icon={<FaAlignLeft />}>Resume</MenuItem>
              <MenuItem icon={<FaPaperPlane />}>Contact</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
          <p>{menuCollapse ? 
          "" : 
          <Menu iconShape="square">
              <MenuItem >Nifer Kilakila, 2022</MenuItem>
            </Menu>
            }</p>
            
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Aside;








// import { useState } from 'react';
// import SidebarMenu from 'react-bootstrap-sidebar-menu';
// import '../Aside/Aside';



// export default function Aside() {
//   return (
// <SidebarMenu>
//   <SidebarMenu.Header>
//     <SidebarMenu.Brand>
//       {/* Your brand icon */}
//     </SidebarMenu.Brand>
//     <SidebarMenu.Toggle />
//   </SidebarMenu.Header>
//   <SidebarMenu.Body>
//     <SidebarMenu.Nav>
//       <SidebarMenu.Nav.Link>
//         <SidebarMenu.Nav.Icon>
//           {/* Menu item icon */}
//         </SidebarMenu.Nav.Icon>
//         <SidebarMenu.Nav.Title>
//           <p>About Me</p>
//         </SidebarMenu.Nav.Title>
//       </SidebarMenu.Nav.Link>
//     </SidebarMenu.Nav>
//     <SidebarMenu.Sub>
//       <SidebarMenu.Sub.Toggle>
//         <SidebarMenu.Nav.Icon />
//         <SidebarMenu.Nav.Title>
//           <p>SKILLS</p>
//         </SidebarMenu.Nav.Title>
//       </SidebarMenu.Sub.Toggle>
//       <SidebarMenu.Sub.Collapse>
//         <SidebarMenu.Nav>
//           <SidebarMenu.Nav.Link>
//             <SidebarMenu.Nav.Icon>
//               {/* Submenu item icon */}
//             </SidebarMenu.Nav.Icon>
//             <SidebarMenu.Nav.Title>
//             <p>Testimonials</p>
//             </SidebarMenu.Nav.Title>
//           </SidebarMenu.Nav.Link>
//         </SidebarMenu.Nav>
//       </SidebarMenu.Sub.Collapse>
//     </SidebarMenu.Sub>
//   </SidebarMenu.Body>
// </SidebarMenu>
//   )
// }