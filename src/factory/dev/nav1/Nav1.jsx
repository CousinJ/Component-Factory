import React from "react";
import "./Nav1.css";

function Nav1(props) {

   

    const dropDownIcon = process.env.PUBLIC_URL + '/DropDown.svg';
  const links = [
    { text: "Home", dropDown: false },
    { text: "About", dropDown: false },
    { text: "Products", dropDown: true },
    { text: "Careers", dropDown: false },
  ];
  const iconStyle = {
    backgroundImage: `url(${dropDownIcon})`,
    backgroundSize: 'cover', // You can customize other background properties here
    backgroundRepeat: 'no-repeat',
    
}
  return (
    <div
      style={{ backgroundColor: `${props.theme.mainColor1}` }}
      className="nav-main"
    >
      <ul className="nav-list">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <div className="item-text">
              {link.text}
            </div>
           {link.dropDown && <div className="item-icon" style={iconStyle}></div>}
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav1;
