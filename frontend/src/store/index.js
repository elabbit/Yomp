import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import businessReducer from './business'
import reviewReducer from "./review";
import miscReducer from "./misc";
import mapsReducer from "./maps";



const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  business: businessReducer,
  review: reviewReducer,
  misc: miscReducer,
  maps: mapsReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
