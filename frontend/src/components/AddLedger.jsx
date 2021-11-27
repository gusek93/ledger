import React, { useState } from "react";
import Axios from "axios";

const apiUrl = "http://localhost:8000/api/record/";

function AddLedger() {
    const [ledgerClassify, setLedgerClassify] = useState('');
    const [ledgerDate, setLedgerDate] = useState('');
    const [ledgerDetail, setLedgerDetail] = useState('');
    const [ledgerMoney, setLedgerMoney] = useState('');
    
    
    const addNewLedger = () => {

        const itemList = {
            "classify":ledgerClassify,
            "date":ledgerDate, 
            "detail":ledgerDetail, 
            "money": ledgerMoney,
        }
        console.log(itemList);

        Axios.post(apiUrl, itemList)

    }
    

    return(
        <div>
            <form onSubmit={addNewLedger}>
                <input 
                    type="text" 
                    placeholder="분류"
                    onChange={e => setLedgerClassify(e.target.value)}
                    value={ledgerClassify}
                    />
                <input 
                    type="date" 
                    placeholder="날짜"
                    onChange={e => setLedgerDate(e.target.value)}
                    value={ledgerDate}
                    />
                <input 
                    type="text" 
                    placeholder="상세"
                    onChange={e => setLedgerDetail(e.target.value)}
                    value={ledgerDetail}
                    />
                <input 
                    type="number" 
                    placeholder="금액"
                    onChange={e => setLedgerMoney(e.target.value)}
                    value={ledgerMoney}
                    />
                <input 
                    type="submit"/>
            </form>
        </div>
    );
}

export default AddLedger;