import { combineReducers } from 'redux';
import counterReducer from './Productos/prod.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;