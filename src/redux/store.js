import { createStore } from "redux";
import cakeReucer from "./cake/cakeReducer";

const store = createStore(cakeReucer);
export default store;