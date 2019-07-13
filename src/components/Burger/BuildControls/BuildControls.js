import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import { stringLiteral } from '@babel/types';

const BuildControls = (props) => {
    const controls = props.ingredients.map(ing => (
        {label: (ing.charAt(0).toUpperCase() + ing.slice(1)), type: ing}));
    
    return (<div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label}
                label={ctrl.label}>
            </BuildControl>
        ))}
    </div>
    );
};

export default BuildControls;