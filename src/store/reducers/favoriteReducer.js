import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../../actions/favoritesActions.js";

const initialState = { favorites: [], displayFavorites: true };

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    case ADD_FAVORITE:
      const exist = state.favorites.filter(
        (movie) => action.payload.id == movie.id
      ).length;
      if (exist == 0) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      } else {
        return state;
      }

    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: action.payload,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
