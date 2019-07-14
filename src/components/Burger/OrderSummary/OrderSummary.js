import React, {Component} from 'react';
import {INGREDIENT_NAMES} from '../../../util/Constants';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('[OrderSummary] was updated.')
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients).map(ing => {
            return (
                <li key={ing}>
                    <span>{INGREDIENT_NAMES[ing]}</span>: {this.props.ingredients[ing]}
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
                <p>The total price will be ${this.props.price.toFixed(2)}.</p>
                <p>Continue to checkout?</p>
                <Button
                    btnType="Danger"
                    clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinued}>Continue</Button>
            </>
        );
    }

};

export default OrderSummary;