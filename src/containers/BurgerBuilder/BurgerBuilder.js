import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    // ingredient prices in $
    salad: 0.5,
    cheese: 0.4,
    meat: 2,
    bacon: 1
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 1,
            meat: 1
        },
        // base price is always 4 (minimum)
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        // update the number of ingredients based on the ingredient added
        let oldCount = this.state.ingredients[type];
        const updatedCount = oldCount += 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        // update the pricing based on the ingredient added
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;

        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
    }

    removeIngredientHandler = (type) => {
        // update the number of ingredients based on the ingredient removed.
        // check that the ingredient quantity doesn't go below 0!
        let oldCount = this.state.ingredients[type];
        if (oldCount !== 0) {
            const updatedCount = oldCount -= 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount;
    
            // update the pricing based on the ingredient added
            const priceReduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const updatedPrice = oldPrice - priceReduction;
    
            this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
        }
    }

    render() {
        return (
            <>
                <Burger 
                    ingredients={this.state.ingredients}>
                </Burger>
                <BuildControls
                    ingredients={Object.keys(this.state.ingredients)}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}>
                </BuildControls>
            </>
        );
    }
}

export default BurgerBuilder;