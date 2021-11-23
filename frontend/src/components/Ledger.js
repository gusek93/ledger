import React from "react";

function ledger({post}) {
    const { value_register, message } = post;
    return (
        <div>
            {value_register}, {message}
        </div>
    )
}

export default ledger;