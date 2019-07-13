import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { INGREDIENTS, INGREDIENT_PRICES, BASE_BURGER_PRICE, INGREDIENT_QUANTITIES } from '../../util/Constants';

class BurgerBuilder extends Component {

    state = {
        // ingredient list and base burger price defined in util/Constants
        ingredients: INGREDIENT_QUANTITIES,
        totalPrice: BASE_BURGER_PRICE,
        purchasable: false
    }

    updatePurchaseState = (updatedIngredients) => {

        const numberOfIngredients = Object.values(updatedIngredients).reduce((sum, ing) => {
            return sum + ing;
        });

        this.setState({purchasable: numberOfIngredients > 0});
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

        this.updatePurchaseState(updatedIngredients);
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

            this.updatePurchaseState(updatedIngredients);
        }
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        // If the quantity of an ingredient is 0, set disabledInfo to true
        for (let ing in disabledInfo) {
            disabledInfo[ing] = disabledInfo[ing] <= 0
        }
        
        return (
            <>
                <Burger 
                    ingredients={this.state.ingredients}>
                </Burger>
                <BuildControls
                    ingredients={Object.values(INGREDIENTS)}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}>
                </BuildControls>
            </>
        );
    }
}

export default BurgerBuilder;