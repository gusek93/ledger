import React, { useEffect, useState } from "react";
import Axios from "axios";


const apiUrl = "http://localhost:8000/record/record";

function LedgerList() {
const [ledgerList, setLedgerList] = useState([]);
    useEffect(() => {
        Axios.get(apiUrl)
            .then((response) => {
                const { data } = response;
                setLedgerList(data);
                console.log("load response", response);
            })
            .catch(error => {

            })
        console.log("mounted");
    },[]);

    const renderLedgerList = ledgerList.map(ledger => {
        return (
            <div>{ledger.classify},{ledger.date},{ledger.detail},{ledger.money}</div>
        )
    })

    return (
        <div>
            <h2>List</h2>
            {renderLedgerList}
        </div>
    );
    
}

export default LedgerList;