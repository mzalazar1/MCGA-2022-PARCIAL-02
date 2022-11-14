import { combineReducers } from "redux";
import reducer from './Productos/prod.reducer';

const rootReducer = combineReducers({
    product: reducer,
});

export default rootReducer;
