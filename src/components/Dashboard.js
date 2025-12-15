import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../feature/users/usersSlice";   
import { addUser } from "../feature/users/usersSlice";
import { updateUser } from "../feature/users/usersSlice";
import { deleteUser } from "../feature/users/usersSlice";

const Dashboard = () => {
    const dispatch = useDispatch();
    const {list, status, error} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleAdd = () => {
           dispatch(
            addUser({
                id:Date.now(),
                name:"New User",
                email:"newUser@gmail.com",

            })
           );
    };


    const handleUpdate = (user) => {
        dispatch(
            updateUser({
                ...user,
                name:user.name + "(Updated)",
            })
        );
    };


    if (status === "loading") return <div>Loading...</div>;
    if (status === "failed") return <div>{error}</div>;

    return (
        <div>
            <h2> USer Dashboard</h2>
            <button onClick={handleAdd}>Add User</button>

            <table border="1" cellPadding="8" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleUpdate(user)}>Edit</button>
                <button onClick={() => dispatch(deleteUser(user.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );

};

export default Dashboard;