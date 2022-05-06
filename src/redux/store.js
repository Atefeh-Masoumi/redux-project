import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk,sagaMiddleware)));
export default store;
