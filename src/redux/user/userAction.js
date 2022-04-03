
import { FETCH_USER_REQUEST } from "./userTypes";
import { FETCH_USER_SUCCESS } from "./userTypes";
import { FETCH_USER_FAILURE } from "./userTypes";
import axios from "axios";

function fetchUserRequest(){
    return {
        type:FETCH_USER_REQUEST,
    };
}

function fetchUserSuccess(users){
    return {
        type:FETCH_USER_SUCCESS,
        payload:users,
    };
}
function fetchUserFailure(error){
    return {
        type:FETCH_USER_FAILURE,
        payload:error,
    };
}

export const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            const data=res.data;
            dispatch(fetchUserSuccess(data));
        })
        .catch((error)=>dispatch(fetchUserFailure(error.message)))
    }
}