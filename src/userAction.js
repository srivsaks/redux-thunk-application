import { ACTIONS } from "./reducer";

export const fetchUsers = () => {
  return (dispatch) => {
    fetch("https://reqres.in/api/users")
      .then((res) => {
        res
          .json()
          .then((res2) => {
            const users = [];
            res2.data.forEach((item) => {
              users.push(item.email);
            });
            dispatch({
              type: ACTIONS.GET_USERS,
              payload: {
                users
              }
            });
          })
          .catch((err) => {
            dispatch({
              type: ACTIONS.GET_USERS,
              payload: {}
            });
          });
      })
      .catch((err) => {});
  };
};

export const addUser = () => {
  return {
    type: ACTIONS.ADD_USER,
    payload: {}
  };
};
