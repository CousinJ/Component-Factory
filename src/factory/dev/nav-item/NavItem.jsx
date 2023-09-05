import React, { useState, useEffect } from 'react'
import './NavItem.css'
import DropDown1 from '../dropdown1/DropDown1';





function NavItem(props) {



// handling drop down animation and keeps track of  drop down state
    const handleDropDownClick = () => {
      

       if(props.activeItem === props.itemId) {
        props.onItemClick(null)
       }
       else {
        props.onItemClick(props.itemId)
       }
        


    }
        

   //useEffect hook to handle changing styles based on activItem
   useEffect(() => {

    if(props.activeItem === props.itemId) {
        setDropStyle({top: 6.5, });
    }
    else {
        setDropStyle({top: -25});
    }

   }, [props.activeItem, props.itemId])

//use state vars
    const [dropStyle, setDropStyle] = useState({top: -25})
  



//data and theme resources
    const dropDownData = [
        {text: 'Item'},
        {text: 'Item'},
        {text: 'Item'},
        {text: 'Item'},
        {text: 'Item'}
    ]
    const theme = {
        mainColor1: '#352D39',
        mainColor2: '#FFFCF9',
        accentColor1: '#6D435A',
        accentColor2: '#B1EDE8',
        accentColor3: '#FF6978'
    }

    const themeObject1 = {
        'backgroundColor': `${props.theme.mainColor2}`,
        'color': `${props.theme.accentColor1}`,
    }


//function rendered



    return(<div style={themeObject1} onClick={handleDropDownClick} className='nav-item-main'>

            <div  className='nav-item-text-container'>
                {/* put props data here for item text */}
                {props.data.text}
                <div style={{'backgroundImage': `url(${process.env.PUBLIC_URL + '/downArrow.svg'})`}} className='nav-item-icon-container'></div>
                
            </div>

            <DropDown1  dropStyle={dropStyle} data={dropDownData} theme={theme}></DropDown1>
            

    </div>)



}

export default NavItem;