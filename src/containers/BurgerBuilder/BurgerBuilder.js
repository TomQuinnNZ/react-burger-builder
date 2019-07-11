import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 2,
            meat: 1
        }
    }

    render() {
        return (
            <>
                <Burger 
                    ingredients={this.state.ingredients}>
                </Burger>
                <div>Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;