import React from 'react';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo></Logo>
        <nav>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
    );
};

export default toolbar;