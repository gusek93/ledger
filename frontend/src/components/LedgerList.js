import React, { useEffect, useState} from "react";
import Axios from "axios";
import Ledger from "./Ledger";

const apiUrl = "http://localhost:8000/api/posts";

function LedgerList() {
const [ledgerList, setLedgerList] = useState([]);
    useEffect(() => {
        Axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                setLedgerList(data);
                console.log("loaded response:", response);
            })
            .catch(error => {
                //error.response;
            })
        console.log("mounted");
    },[]);

    return (
        <div>
            <h2>LedgerList</h2>
            {ledgerList.map(post => {
               return <Ledger post={post} key={post.id}/>
            }      
            )}
        </div>
    );
}

export default LedgerList;