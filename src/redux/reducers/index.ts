import {combineReducers} from "redux";

import points from "../reducers/points";

export const rootReducer = combineReducers({points});

export type RootState = ReturnType<typeof rootReducer>;