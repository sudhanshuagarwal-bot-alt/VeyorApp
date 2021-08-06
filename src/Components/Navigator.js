import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import MainMenu from './MainMenu';
import YourInfo from './YourInfo';
import Confirmation from './Confirmation';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux'

// const useStyles = makeStyles({
//     TabClass: {
//         flexGrow: 1,
//     },
// });

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    console.log('children', children);
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component='div'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Navigator() {
    const bookingList = useSelector(state => state?.BookingDetails?.state?.bookingList);
    const classes = useStyles();
    const [tabValue, SetTabValue] = React.useState('one');
    const [dateTimeDetails, SetdateTimeDetails] = React.useState({});

    const handleChange = (event, newValue) => {
        SetTabValue(newValue);
    };

    const ToggleTab = React.useCallback((tabValue, details) => {
        SetTabValue(tabValue);
        SetdateTimeDetails(details)
    }, [dateTimeDetails])
    return (
        <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={tabValue} onChange={handleChange} aria-label="simple tabs example">
                        <Tab value="one" label="Choose Appointment" {...a11yProps('one')} />
                        <Tab value="two" label="YourInfo" {...a11yProps('two')} />
                        <Tab value="three" label="Confirmation" {...a11yProps('three')} />
                    </Tabs>
                </AppBar>
                <TabPanel value={tabValue} index={'one'}>
                    <MainMenu ToggleTab={ToggleTab} />
                </TabPanel>
                <TabPanel value={tabValue} index={'two'}>
                    <YourInfo ToggleTab={ToggleTab} dateTimeDetails={dateTimeDetails} />
                </TabPanel>
                <TabPanel value={tabValue} index={'three'}>
                    <Confirmation ToggleTab={ToggleTab} dateTimeDetails={dateTimeDetails} />
                </TabPanel>
        </div>
    )
}

export default Navigator
