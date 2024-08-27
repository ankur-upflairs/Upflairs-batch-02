import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter/counter";



let combine = combineReducers({
    counter: counterReducer
})

export let store=createStore(combine)



