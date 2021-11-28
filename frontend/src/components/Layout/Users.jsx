import Axios from "axios";
import React, { useEffect,useState } from "react";
import UserList from "../UserList";
import Spinner from "./Spinner";

const apiUrl = 'http://localhost:8000/api/users'


function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get(apiUrl,)
            .then(response => {
                console.log(response);
                setUsers(response.data);
                setLoading(false);
            });
    },[])
    return (
        <>
        <h1>users page</h1>
        {loading ?<Spinner/> :
        <UserList users={users}/>}
        </>
    )
}

export default Users;