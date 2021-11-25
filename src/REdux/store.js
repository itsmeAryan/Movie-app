import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RealReducer from "./REdux/Combine";

const store=createStore(RealReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;