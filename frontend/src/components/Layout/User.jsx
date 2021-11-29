import Axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";

const apiUrl = 'http://localhost:8000/api/users'


function User() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { pk } = useParams();

    useEffect(() => {
        Axios.get(`${apiUrl}/${pk}`)
            .then(response => {
                console.log(response);
                setUser(response.data);
                setLoading(false);
            });
    },[])

    const userDetail = loading ? <Spinner /> :
        <div>
            <div>{user.username}</div>
            <div>{user.email}</div>
        </div>

    return (
        <>
            <h1>User 정보</h1>
            {userDetail}
        </>
    )
}

export default User;