import React from 'react';
import {INGREDIENT_NAMES} from '../../../util/Constants';
import Button from '../../UI/Button/Button';

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
            <p>Your burger is ready, with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>The total price will be ${props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.purchaseCancelled}>Cancel</Button>
            <Button
                btnType="Success"
                clicked={props.purchaseContinued}>Continue</Button>
        </>
    )
};

export default orderSummary;