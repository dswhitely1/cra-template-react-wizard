import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {rootReducer} from "./reducer";

const middleware = [logger]
const enhancers = applyMiddleware(...middleware)

const isProduction = process.env.NODE_ENV === "production"

const store = isProduction ? createStore(rootReducer) : createStore(rootReducer, composeWithDevTools(enhancers))

export default store