import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DashIcon from '@material-ui/icons/AvTimer';
import StarIcon from '@material-ui/icons/Star';
import PhoneIcon from '@material-ui/icons/StayCurrentPortrait';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
    root: {

    },
    bar: {
        background: 'white',
        justifyContent: 'space-between'
    },
    flex: {
        display: 'flex',
        color: 'black'
    },
    menuButton: {
        color: 'black',
        marginLeft: -12,
        marginRight: 20,
    },
    listCont: {
        display: 'flex',
        alignItems: 'center',
        color: 'gray',
        margin: '0 20px',
        '& span': {
            paddingTop: '19px',
            borderBottom: 'solid 2px white'
        },
        '& span:hover': {
            borderBottom: 'solid 2px gray'
        }
    },
    iconButton: {
        color: 'gray',
        marginTop: '15px',
        marginRight: '5px'
    },
    formControl: {
        minWidth: 120,
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'black'
    }
};

function ButtonAppBar(props) {
    const { classes, click } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">

                <Toolbar className={classes.bar}>

                    <div className={classes.flex}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon onClick={click}/>
                        </IconButton>
                        <Typography variant="title" color="inherit" style={{paddingTop: '13px'}}>
                            Modular Dashboard
                        </Typography>
                    </div>

                    <div style={{display: 'flex'}}>
                        <div className={classes.listCont}>
                            <DashIcon className={classes.iconButton}/>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Performance</InputLabel>
                                <Select
                                    name="performance"
                                    value=''
                                >
                                    <MenuItem>
                                        <a href="/new-url" className={classes.linkStyle}>by Campaign</a>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className={classes.listCont}>
                            <StarIcon className={classes.iconButton}>Sites</StarIcon>
                            <span>Sites</span>
                        </div>

                        <div className={classes.listCont}>
                            <PhoneIcon className={classes.iconButton}/>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Device</InputLabel>
                                <Select
                                    name="device"
                                    value=''
                                >
                                    <MenuItem>
                                        <a href="/new-url" className={classes.linkStyle}>Type</a>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);