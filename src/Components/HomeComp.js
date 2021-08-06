import React from 'react'
import '../Styles/HomeComp.css'
import Navigator from './Navigator'
import { AppHeading, AppSubHeading } from '../Constants'

function HomeComp() {

    return (
        <div className= 'HeadingDiv'>
            <div className='Heading'>{AppHeading}</div><br></br>
            <div className='SubHeading'>{AppSubHeading}</div>
            <div className='NavigatorDiv'>
                <Navigator />
            </div>
        </div>
    )
}

export default React.memo(HomeComp)
