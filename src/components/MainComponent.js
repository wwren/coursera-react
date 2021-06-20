import React, { Component } from "react";
import Header from "./HeaderComponent.js";
import Footer from "./FooterComponent.js";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent.js";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail
          selectedDish={this.state.dishes.find(
            (dish) => dish.id === this.state.selectedDish
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
