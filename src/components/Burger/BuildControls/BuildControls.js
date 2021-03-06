import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import { INGREDIENT_NAMES } from '../../../util/Constants';

const BuildControls = (props) => {

    const controls = props.ingredients.map(ing => (
        {label: INGREDIENT_NAMES[ing], type: ing}));
    
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}>
                </BuildControl>
            ))}

            <button 
                className={classes.OrderButton} 
                disabled={!props.purchasable}
                onClick={props.purchaseClicked}>ORDER NOW</button>
        </div>
    );
};

export default BuildControls;