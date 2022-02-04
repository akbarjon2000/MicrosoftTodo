import { useStore, combineReducers, createStore } from "redux";
import authReducer from "../redux";

const rootReducer = combineReducers({
    auth: authReducer,

})

const store = createStore(rootReducer);

export default store;