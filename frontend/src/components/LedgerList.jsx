import React, { useEffect, useState } from "react";
import Axios from "axios";
import LedgerItem from "./LedgerItem";
import { useAppContext } from "../utils/store";


const apiUrl = "http://localhost:8000/api/record";

function LedgerList() {
    const [ledgerList, setLedgerList] = useState([]);
    const {store:{jwtToken}, dispatch} = useAppContext();
    const headers = { Authorization: `JWT ${jwtToken}` }

        useEffect(() => {
            
            Axios.get(apiUrl,{headers})
                .then((response) => {
                    const { data } = response;
                    setLedgerList(data);
                    console.log("load response", response);
                })
                .catch(error => {

                })
        },[]);

    const removeLedger = (id) => {

        Axios.delete(`${apiUrl}/${id}/`, { headers})
        return window.location.reload();

    }

    const renderLedgerList = ledgerList.map(ledger => {
        return (
            <LedgerItem
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