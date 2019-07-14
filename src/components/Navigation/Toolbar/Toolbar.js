import React from 'react';
import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div>Logo</div>
        <nav>
            ...
        </nav>
    </header>
    );
};

export default toolbar;