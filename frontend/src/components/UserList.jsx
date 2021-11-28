import React from "react";
import { Link } from 'react-router-dom'

function UserList({ users }) {
    console.log(users);
    return (
        <div>          
            {users.map(user => {
                return(
                    <div className="card m-2" key={user.pk}>
                        <div className="card-body p-3" >
                            <Link to={`/users/${user.pk}`}>{user.username}</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );

}

export default UserList;