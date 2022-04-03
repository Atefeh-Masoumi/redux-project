import { connect } from "react-redux";
import CakeAction from "../redux/cake/CakeAction";

export const CakeContainer = (props) => {
    return (  
        <div>
            <h2> Number of cake:{props.numOfCake} </h2>
            <button onClick={props.CakeAction}>Buy Cake</button>
        </div>
    );
}
 


const mapStateToprops=(state)=>{
    return{
        numOfCake: state.numOfCake
    };
}; 
const mapDispatchToprops=(dispatch)=>{
    return{
        buyCake:()=>dispatch(CakeAction()),

    }
}

export default connect(mapStateToprops, mapDispatchToprops)(CakeContainer);