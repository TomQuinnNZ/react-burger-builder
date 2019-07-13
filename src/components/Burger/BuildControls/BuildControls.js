import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import { INGREDIENT_NAMES, INGREDIENT_PRICES, BASE_BURGER_PRICE } from '../../../util/Constants';

const BuildControls = (props) => {

    const controls = props.ingredients.map(ing => (
        {label: (ing.charAt(0).toUpperCase() + ing.slice(1)), type: ing}));
    
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}>
                </BuildControl>
            ))}
        </div>
    );
};

export default BuildControls;