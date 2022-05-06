import { useState } from "react";

const PostSaga = () => {
    const [postId, setpostId] = useState("");
    return ( 
        <>
        <h1> Redux - saga middleware</h1>
        <input
        type="text"
        value={postId}
        />
        </>
     );
}
 
export default PostSaga;