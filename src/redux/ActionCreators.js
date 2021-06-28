import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";

//action object
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  // payload is the property that holds the actual data in a Redux action object
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

// so fetchDishes is a thunk as it returns a function but not an action like addComment
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});
