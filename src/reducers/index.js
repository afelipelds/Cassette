import { SET_FAVORITE, DELETE_FAVORITE, LOGIN_REQUEST, LOGOUT_REQUEST, REGISTER_REQUEST, GET_VIDEO_SOURCE } from '../utils/constants';

const reducer = (state, action) => {
  const existsFavorite = state.myList.find((item) => item.id === action.payload.id);

  switch (action.type) {
    case SET_FAVORITE:
      //if the item already exists in the state
      if (existsFavorite) {
        return {
          ...state,
        };
      }
      //return the item that is being added alongside the state
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        user: action.payload,
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        user: action.payload,
      };

    case GET_VIDEO_SOURCE:
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
                 state.originals.find((item) => item.id === Number(action.payload)) ||
                 [],
      };

    default:
      return state;
  }
};

export default reducer;
