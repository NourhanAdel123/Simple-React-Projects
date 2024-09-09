import React, { Component } from "react";
import ShoppingCart from "./shoppingCart";
import "@fortawesome/fontawesome-free/css/all.css";
import "./shoppingCart.css";
import NavBar from "./navbar";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", count: 0 },
      { id: 2, name: "Fries", count: 0 },
      { id: 3, name: "Cola", count: 0 },
    ],
  };
  handelReset = () => {
    let products = [...this.state.products];
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products });
  };
  Incrementhandler = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].count++;
    this.setState({ products });
  };
  handelDelete = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products.splice(index, 1);
    this.setState({ products });
  };
  render() {
    return (
      <>
        <NavBar productsCount={this.state.products.length} />
        <ShoppingCart
          products={this.state.products}
          onIncrement={this.Incrementhandler}
          onDelete={this.handelDelete}
          onReset={this.handelReset}
        />
      </>
    );
  }
}

export default App;
