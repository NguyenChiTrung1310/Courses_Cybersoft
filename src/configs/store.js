import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import course from '../redux/reducer/course';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  course,
  credentials,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
