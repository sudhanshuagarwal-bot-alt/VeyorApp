import React, { useEffect } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Moment from "moment";
import { useSelector } from 'react-redux'
import Time from './Time';


function Scheduler(props) {
    
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [timeList, setTimeList] = React.useState([]);
    const [selectedTime, setselectedTimet] = React.useState('');
    const AllTimes = useSelector(state => state.Categories.state.timingList)

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const details = {
            serviceName: props.ServiceName,
            selectedDate: Moment(date).format("MMMM DD,YYYY"),
            selectedTime: selectedTime,
            serviceCost: props.ServiceCosting
        }
        if(selectedTime !== ''){
        props.OnCalendarClose(details);
        }
    };

    // const onClose = () => {
    //     props.OnCalendarClose();
    // }

    useEffect(() => {
        setTimeList(GetAllTimes());
    }, [])

    const GetAllTimes = () => {
        return AllTimes?.map(time =>
            <Time key={time.Id} time={time} setTime={SetTime} />
        );
    }

    const SetTime = (time) => {
        setselectedTimet(time);
    }

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    autoOk={true}
                    // onClose={onClose}
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    minDate={Moment().toDate()}
                />
            </MuiPickersUtilsProvider>
            {timeList}
        </div>
    );
}

export default React.memo(Scheduler)
