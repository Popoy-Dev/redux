import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/user";
import rootSaga from "./sagas/rootSaga";
const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
