import {createStore, combineReducers} from "redux"
import {cardsReducer} from "./cardsReducer";

const rootReducer = combineReducers({
	cardsReducer: cardsReducer
})

export const store = createStore(rootReducer)