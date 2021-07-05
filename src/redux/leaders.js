import * as ActionTypes from "./ActionTypes";

export const Leaders = (
  state = {
    isLoading: false,
    leaders: [],
    errmess: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LEADERS_LOADING:
      return { ...state, isLoading: true, leaders: [], errmess: null };
    case ActionTypes.ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        leaders: action.payload,
        errmess: null,
      };
    case ActionTypes.LEADERS_FAILED:
      return {
        ...state,
        isLoading: false,
        leaders: [],
        errmess: action.payload,
      };
    default:
      return state;
  }
};
