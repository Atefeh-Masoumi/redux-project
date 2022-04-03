import {BUY_ICECREAM} from './icecreamType';
const initialState ={
    numOfIcecreeam:10,

}
const icecreamReduer=(state=initialState, action)=>{
switch (action.type){
    case BUY_ICECREAM:
        return {...state, numOfIcecreeam: state.numOfIcecreeam -1};
    default:
        return state;
}
}
export default icecreamReduer;