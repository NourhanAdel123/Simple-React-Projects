import React, { Component } from 'react';
import Product from './Product';
import NavBar from './navbar';
class ShoppingCart extends Component {
    render() { 
        return (
            <div className="container">
                <h1>Shopping Cart</h1>
                <button onClick={this.props.onReset}>Reset</button>
                {
                    this.props.products.map(product => (
                        <div className="product" key={product.id}>
                            <Product 
                                product={product}
                                onDelete={this.props.onDelete}
                                onIncrement={this.props.onIncrement}
                            />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ShoppingCart;
