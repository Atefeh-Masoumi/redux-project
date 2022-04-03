import {BUY_CAKE} from './CakeType'

function buyCake (numbers=1) {
    return {
        type:"BUY_CAKE",
        payload:numbers,
    };
}
 
export default buyCake;