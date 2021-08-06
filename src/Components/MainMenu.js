import React from 'react'
import SericeProviding from './SericeProviding'
import '../Styles/Menu.css'

function MainMenu(props) {
    return (
        <div className='DivMargin'>
            <SericeProviding ToggleTab= {props.ToggleTab}/>
        </div>
    )
}

export default React.memo(MainMenu)
