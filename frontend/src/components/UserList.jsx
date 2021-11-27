import React from "react";

function UserList({ users }) {
    console.log(users);
    return (
        <div>
            {users.map(user => {
                return(
                    <div key={user.pk}>
                        {user.username}
                    </div>
                )
            })}
        </div>
    );

}

export default UserList;