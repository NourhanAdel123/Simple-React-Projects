import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { product, onIncrement, onDelete } = this.props;
        return (
            <>
                <span>{product.name}</span>
                <span>{product.count}</span>
                <button
                    onClick={() => onIncrement(product)}
                >+</button>
                <span onClick={() => onDelete(product)}>
  <i className="fas fa-trash-alt m-2"></i>  
</span>

                <br/>
            </>
        );
    }
}

export default Product;
