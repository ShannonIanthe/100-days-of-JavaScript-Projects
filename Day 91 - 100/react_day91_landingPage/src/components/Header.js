import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito'
        
    },
    appbar:{
        background:"none",
        fontFamily: 'Nunito'
    },
    icon:{
        color: '#fff',
        fontSize: '2rem'
    },
    appbarTitle:{
        flexGrow: '1'
    },
    appbarWrapper:{
        width: '80%',
        margin: '0 auto'
    },
    colorText: {
        color: '#5aff3d',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color:'#fff',
        fontFamily: 'Nunito',
        fontSize: '4rem'
    },
    goDown: {
        color: '#5aff3d',
        fontSize: '4rem'
    }
}));
export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)
    useEffect(() =>{
        setChecked(true)
    }, []) 
    return ( 
    <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>My<span className={classes.colorText}>Getaway.</span></h1>
            <IconButton>
                <SortIcon className={classes.icon} />
            </IconButton>
            </Toolbar>
        </AppBar> 

        <Collapse in={checked} {...(checked ?  { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.container}>
            <h1 className={classes.title}>
            Welcome to <br />My<span className={classes.colorText}>Getaway.</span></h1>
            <IconButton>
<ExpandMoreIcon className={classes.goDown} />
            </IconButton>
        </div>
        </Collapse>
    </div>
    )
}
