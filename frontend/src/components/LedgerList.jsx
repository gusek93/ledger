import React, { useEffect, useState } from "react";
import Axios from "axios";
import Ledger from "./Ledger";
//import AddLedger from './AddLedger'


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
                <Ledger ledger={ledger} key={ledger.id}/>
            )
        })

        return (
            <div>
                {renderLedgerList}
            </div>
        );
    
}

export default LedgerList;