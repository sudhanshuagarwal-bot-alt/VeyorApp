import React from 'react'
import Service from './Service';
import { useSelector } from 'react-redux'

function SericeProviding(props) {

    const categoryList = useSelector(state => state.Categories.state.categoryList)

    const GetServices = categoryList?.map(service => 
         <Service key={service.Id} service = {service} ToggleTab= {props.ToggleTab} />
         );
    

    return (
        <div>
            {GetServices}
        </div>
        
    )
}

export default React.memo(SericeProviding)
