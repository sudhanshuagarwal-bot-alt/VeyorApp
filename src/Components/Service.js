import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Scheduler from './Scheduler';

const useStyles = makeStyles(theme => ({
    DivStyle: {
        border: '1px solid',
        padding: '1.5%',
        marginTop: '1%',
        width: '90%',
        cursor: 'pointer'
    },
    ServiceName: {
        fontWeight: '700',
        padding: '2%'
    },
    ServiceCosting: {
        padding: '2%'
    }
}))

function Service({ service, ToggleTab }) {
    const [selectedService, setService] = useState(0);
    const classes = useStyles();
    const ClickHandler = () => {
        setService(service.Id);
    }

    const OnCalendarClose = (dateTimeDetails) => {
        ToggleTab('two', dateTimeDetails);
        setService(0);
    }

    return (
        <div>
            <div className={classes.DivStyle} onClick={ClickHandler}>
                <span id='ServiceName' className={classes.ServiceName}>{service.name}</span><br />
                <span id='ServiceCosting' className={classes.ServiceCosting}>{service.costing}</span>
            </div>
            <div>
                {selectedService === service.Id && <Scheduler ServiceName={service.name} ServiceCosting={service.costing} OnCalendarClose={OnCalendarClose} />}
            </div>
        </div>
    )
}

export default React.memo(Service)
