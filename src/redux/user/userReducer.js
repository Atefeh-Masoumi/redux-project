import { FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS } from "./userTypes"


const initialState={
loading:false,
error:"",
user:[],
}
const Userreducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{...state, loading:true};
        case FETCH_USER_FAILURE:
                return{loading:false, error:action.payload,user:[]};
        case FETCH_USER_SUCCESS:
            return{loading:false, error:"",user:action.payload};
        default:
            return state;
    }
}
export default Userreducer;