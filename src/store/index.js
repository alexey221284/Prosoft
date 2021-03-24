import {createStore, combineReducers, applyMiddleware} from "redux"
import {cardsReducer} from "./cardsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	cardsReducer: cardsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))