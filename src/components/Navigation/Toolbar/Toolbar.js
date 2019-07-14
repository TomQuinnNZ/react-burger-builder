import React from 'react';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
    <header className={classes.Toolbar}>
        <DrawerToggle
            clicked={props.drawerToggleClicked}></DrawerToggle>

        <div className={classes.Logo}>
            <Logo></Logo>
        </div>
        
        <nav className={classes.DesktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
    );
};

export default toolbar;