import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../../redux/posts/postActions";

const PostSaga = () => {
    const [postId, setpostId] = useState("");
   const {loading, error, post}= useSelector((state)=>state.post);
   const dispatch = useDispatch();
    return ( 
        <>
        <h1> Redux - saga middleware</h1>
        <input
        type="text"
        value={postId}
        onChange={(e)=>setpostId(e.target.value)}
        />
        <button onClick={()=>dispatch(fetchPostRequest(postId))}>get post</button>
        {
            loading ? <p>loading</p> : 
            error? <p>{error}</p>
            :post.title ? 
            <div>
                <p>post title : {post.title}</p>
                <p>post body : {post.body}</p>
            </div> : <p> fetch some post ! </p>
        }
        </>
     );
}
 
export default PostSaga;