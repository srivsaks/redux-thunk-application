const INITIAL_STATE = {
  users: []
};
export const ACTIONS = {
  GET_USERS: "GET_USERS",
  ADD_USER: "ADD_USER"
};
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_USERS:
      return {
        ...state,
        users: action.payload.users
      };
    case ACTIONS.ADD_USER:
      return state;
    default:
      return state;
  }
};
