import React, { useEffect, useState } from "react";
import Axios from "axios";
import Ledger from "./Ledger";


const apiUrl = "http://localhost:8000/api/record";
const apiDel = "http://localhost:8000/api/delete/"

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

    const removeLedger = (id) => {

        Axios.delete(`${apiUrl}/${id}/`)
        return window.location.reload();

    }
    

    const renderLedgerList = ledgerList.map(ledger => {
        return (
            <Ledger
                ledger={ledger} 
                key={ledger.id}
                removeLedger={removeLedger}
            />
        )
    })

    return (
        <div>
            {renderLedgerList}
        </div>
    );
    
}

export default LedgerList;