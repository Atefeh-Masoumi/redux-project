import { BUY_CAKE } from "./CakeType"

const initialState={
    numOfCake:10,
}
const  cakeReucer = (state=initialState, action) => {
  switch (action.type){
      case BUY_CAKE: 
        return {...state, numOfCake:state.numOfCake - action.payload};
    default:
        return state;



  }
}
 export default cakeReucer;
