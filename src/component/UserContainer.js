import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userAction";

const UserConntainer = () => {
  const UserData=  useSelector(state=> state.user);
  const {user,loading,error}=UserData
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    },[]);

    const renderusers=()=>{
        if (loading) return <p> loading</p>
        if (!loading && error) return <p>{error}</p>
        if ( !loading && !error&& UserData && user) return <div>
            <h2>user list </h2>
            {user.map(users=><p key={users.id}>{users.name}</p>)}
        </div>

    }
    return ( 
         
        <div> 
        {renderusers()}
        </div>
     );
}
 
export default UserConntainer;