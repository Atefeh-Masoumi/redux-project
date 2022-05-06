import {
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
} from "./postTypes";

const initialState = {
    loading:false,
    error:"",
    post:[],
    }

    const Postreducer =(state=initialState,action)=>{
        switch(action.type){
            case  FETCH_POSTS_REQUEST:
                return{...state, loading:true};
            case FETCH_POSTS_FAILURE:
                    return{loading:false, error:action.payload,post:[]};
            case FETCH_POSTS_SUCCESS:
                return{loading:false, error:"",post:action.payload};
            default:
                return state;
        }
    }
    export default Postreducer;