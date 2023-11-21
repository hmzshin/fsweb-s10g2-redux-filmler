import { combineReducers, configureStore } from "redux";

import movieReducer from "../store/reducers/movieReducer";

const reducers = combineReducers({ movie: movieReducer });

export default store = configureStore(reducers);
