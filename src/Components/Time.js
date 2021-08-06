import React from 'react'

function Time({time, setTime}) {

    const handleTimeChange = () => {
        setTime(time.name)
    }
    return (
        <React.Fragment>
            <div>
                <input type='radio' name= 'timing' value={time.Id} onClick={handleTimeChange}></input>
                <span>{time.name}</span><br />
            </div>
        </React.Fragment>
    )
}

export default React.memo(Time)
