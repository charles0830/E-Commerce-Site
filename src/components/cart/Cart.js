import React, {Component} from 'react';
import Title from "../Title";
import CartColumns from "./CartColumns"

class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="Cart"/>
            </section>
        );
    }
}

export default Cart;