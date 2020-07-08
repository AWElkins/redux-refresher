import { INCREASE, DECREASE, GET_USERS } from "./Home.actions";

export default (state = { count: 0, users: [] }, action) => {
  console.log(action.type);
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case GET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
