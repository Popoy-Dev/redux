export const GET_USER = "get_user";
export const SET_USER = "set_user";

const initialState = {
  count: 0,
  user: undefined,
};

export const getUser = () => ({
  type: GET_USER,
});
export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        count: state.count + 1,
      };
    case SET_USER:
      const { user } = action;
      return {
        ...state,
        user,
      };
    default:
      return state;
  }
};
