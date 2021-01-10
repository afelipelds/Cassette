const reducer = (state, action) => {
  const existsFavorite = state.myList.find((item) => item.id === action.payload.id);

  switch (action.type) {
    case 'SET_FAVORITE':
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

    case 'DELETE_FAVORITE':
      console.log('state.myList -> ', state.myList);
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
