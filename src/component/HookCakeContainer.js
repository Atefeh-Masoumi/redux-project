import { useSelector, useDispatch } from "react-redux";
import buyCake from "../redux/cake/CakeAction";


 const HookCakeContainer = (props) => {
    const numOfCake= useSelector(state=>state.cake.numOfCake);
     const dispatch=useDispatch()
    return (  
        <div>
            <h2> Number of cake:{numOfCake} </h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}
 export default HookCakeContainer;
