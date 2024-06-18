import { combineReducers, createStore } from "redux";
import reducerUser from "./reducers/userReducer";

const rootReducer = combineReducers({
    reducerUser,
});
const store = createStore(rootReducer);

export default store;