import React from 'react';
import {INGREDIENT_NAMES} from '../../../util/Constants';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(ing => {
        return (
            <li key={ing}>
                <span>{INGREDIENT_NAMES[ing]}</span>: {props.ingredients[ing]}
            </li>
        );
    });

    return (
        <>
            <h3>Your order</h3>
            <p>Your order is ready, with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <button>Cancel</button>
            <button>Continue</button>
        </>
    )
};

export default orderSummary;