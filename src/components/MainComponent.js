import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import DishDetail from "./DishDetailComponent.js";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { addComment, fetchDishes } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
});

// previously main holds and maintains the states, now need to get the states from store
class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.find((dish) => dish.featured)}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.find((ele) => ele.featured)}
          leader={this.props.leaders.find((leader) => leader.featured)}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          selectedDish={this.props.dishes.dishes.find(
            (dish) => dish.id == parseInt(match.params.dishId, 10)
          )}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter(
            (comment) => comment.dishId == parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
        ></DishDetail>
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          ></Route>
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          ></Route>
          <Route path="/menu/:dishId" component={DishWithId}></Route>
          <Route exact path="/contactus" component={Contact}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer />
      </div>
    );
  }
}
// connect react components to react router
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
