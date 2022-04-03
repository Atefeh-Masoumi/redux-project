import { useSelector, useDispatch } from "react-redux";
import buyIcecream from "../redux/iceCream/IcecreamAction";


 const HookIcecreamContainer = (props) => {
    const numOfIcecreeam= useSelector(state=>state.iceCream.numOfIcecreeam);
     const dispatch=useDispatch()
    return (  
        <div>
            <h2> Number of Ice Cream:{numOfIcecreeam} </h2>
            <button onClick={()=>dispatch(buyIcecream())}>Buy Icecream</button>
        </div>
    );
}
 export default HookIcecreamContainer;
