import Axios from "axios";
import React, { useEffect,useState } from "react";
import UserList from "../UserList";

const apiUrl = 'http://localhost:8000/api/users'


function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios.get(apiUrl,)
            .then(response => {
                console.log(response);
                setUsers(response.data);
            });
    },[])
    return (
        <>
        <h1>users page</h1>
        <UserList users={users}/>
        </>
    )
}

export default Users;