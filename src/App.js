import React,{use, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./feature/users/usersSlice.js";

function App() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  return(
    <div style={{padding:"20px"}}>
      <h2>User list</h2>
        {status === "loading" && <div>Loading...</div>}
        {status ==="sucess" &&
         data.map((user) =>(
          <p key={user.id}>
            {user.name}-{user.email}
            </p>
         ))}
    </div>
  );
}
export default App;