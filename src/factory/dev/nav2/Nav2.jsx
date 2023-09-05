import React, { useState } from 'react'
import './Nav2.css'
import NavItem from '../nav-item/NavItem';

function Nav2(props) {

   const [activeItem, setActiveItem] = useState(null)

   const handleNavClick = (itemId) => {
    setActiveItem(itemId)
   }

    return(<div style={{'backgroundColor': `${props.theme.mainColor1}`}} className='nav-main'>



        <NavItem  itemId={1} activeItem={activeItem} onItemClick={handleNavClick} theme={props.theme} data={{text: 'Services'}}></NavItem>

        <NavItem itemId={2} activeItem={activeItem} onItemClick={handleNavClick} theme={props.theme} data={{text: 'About'}}></NavItem>

        <NavItem  itemId={3} activeItem={activeItem} onItemClick={handleNavClick} theme={props.theme} data={{text: 'Careers'}}></NavItem>

        <NavItem  itemId={4} activeItem={activeItem} onItemClick={handleNavClick} theme={props.theme} data={{text: 'Products'}}></NavItem>

       


    </div>)


}


export default Nav2;