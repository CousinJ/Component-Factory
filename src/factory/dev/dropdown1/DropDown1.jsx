import React from 'react'
import './DropDown.css'













function DropItem(props) {
    return(<div style={{'backgroundColor': `${props.theme.mainColor2}` }} className='drop-down-item'>
        <p style={{'color': `${props.theme.accentColor3}`}}>{props.text}</p>
    </div>)
}




function DropDown1(props) {


    return(<div style={{'backgroundColor': `${props.theme.mainColor1}`, 'top': `${props.dropStyle.top}%`}} className='drop-down-main'>
        {props.data.map((item, index) => (<DropItem key={index} theme={props.theme} text={item.text}></DropItem>))}
    </div>)


}

export default DropDown1;