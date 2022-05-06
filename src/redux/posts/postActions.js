import {
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
} from "./postTypes";

export const fetchPostRequest =(id)=>{
    return {
        type:FETCH_POSTS_REQUEST,
    };

};

export const fetchPostSuccess =(post)=>{
    return {
        type:FETCH_POSTS_SUCCESS,
        payload:post,
    };

};

export const fetchPostFailure=(error)=>{
    return {
        type:FETCH_POSTS_FAILURE,
        payload:error,
    };

}