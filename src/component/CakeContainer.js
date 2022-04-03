import { connect } from "react-redux";
import buyCake from "../redux/cake/CakeAction";

export const CakeContainer = (props) => {
    return (  
        <div>
            <h2> Number of cake:{props.numOfCake} </h2>
            <button onClick={()=>props.buyCake()}>Buy Cake</button>
        </div>
    );
}

const mapStateToprops=(state)=>{
    return{
        numOfCake: state.cake.numOfCake
    };
}; 
const mapDispatchToprops=(dispatch)=>{
    return{
        buyCake:()=>dispatch(buyCake()),

    }
}

export default connect(mapStateToprops, mapDispatchToprops)(CakeContainer);