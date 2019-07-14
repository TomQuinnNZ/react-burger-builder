import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {

    // animations for in/out
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <>
            <Backdrop
                show={props.open}
                clicked={props.closed}>

            </Backdrop>
            <div className={attachedClasses.join(' ')}>
                
                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>
                
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </>
    )
};

export default sideDrawer;