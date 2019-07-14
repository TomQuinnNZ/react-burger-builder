import React from 'react';
import Logo from '../../../components/Logo/Logo';
import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo></Logo>
        <nav>
            ...
        </nav>
    </header>
    );
};

export default toolbar;