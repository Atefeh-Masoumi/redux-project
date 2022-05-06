import { combineReducers } from "redux";
import cakeReucer from "./cake/cakeReducer";
import icecreamReduer from "./iceCream/iceCrreamReducer";
import Postreducer from "./posts/postReducer";
import Userreducer from "./user/userReducer";

 const rootReducer=combineReducers({
    cake:cakeReucer,
    iceCream:icecreamReduer,
    user:Userreducer,
    post:Postreducer
});
export default rootReducer;