import { combineReducers, legacy_createStore as createStore } from "redux";

import movieReducer from "../store/reducers/movieReducer";

const reducers = combineReducers({ movie: movieReducer });

export const store = createStore(reducers);
