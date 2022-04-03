import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import buyCake from "../redux/cake/CakeAction";


 const CakeWithPayload = (props) => {
     const [numbers, setNumber]=useState(0);
    const numOfCake= useSelector(state=>state.cake.numOfCake);
     const dispatch=useDispatch()
    return (  
        <div>
            <h2> Number of cake:{numOfCake} </h2>
            <input type="text" onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(buyCake(numbers))}>Buy {numbers} cake</button>
        </div>
    );
}
 export default CakeWithPayload;
