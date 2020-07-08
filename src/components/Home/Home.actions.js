export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const GET_USERS = "GET_USERS";

export const increaseAction = (dispatch) => {
  dispatch({
    type: INCREASE,
  });
};

export const decreaseAction = (dispatch) => {
  dispatch({
    type: DECREASE,
  });
};

export const getUsers = (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res,
      });
    });
};
