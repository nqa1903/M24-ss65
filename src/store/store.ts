import { combineReducers, createStore } from "redux";
import reducerUser from "./reducers/userReducer";
import reducerCount from "./reducers/countReducer";
import reducerProduct from "./reducers/productReducer";
import reducerNumber from "./reducers/numberReducer";

const rootReducer = combineReducers({
    reducerUser,
    reducerCount,
    reducerProduct,
    reducerNumber,
});
const store = createStore(rootReducer);

export default store;