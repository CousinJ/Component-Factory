import React from 'react'
import './Sandbox.css'

//COMPONENT imports
// import DropDown1 from '../factory/dev/dropdown1/DropDown1'
import NavItem from '../factory/dev/nav-item/NavItem'
import Nav2 from '../factory/dev/nav2/Nav2'

//======================

const theme = {
    mainColor1: '#352D39',
    mainColor2: '#FFFCF9',
    accentColor1: '#6D435A',
    accentColor2: '#B1EDE8',
    accentColor3: '#FF6978'
}



function Sandbox() {






    return(<div className='sandbox-div'>
            {/* <DropDown1 theme={theme} data={dropDownData}></DropDown1> */}
            {/* <NavItem data={{text: 'Services'}} theme={theme}></NavItem> */}
            <Nav2 theme={theme}></Nav2>
    
    </div>)
}

export default Sandbox;