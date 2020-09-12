import { createStore, combineReducers } from 'redux';
import course from '../redux/reducer/course';

const reducer = combineReducers({
    course,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;