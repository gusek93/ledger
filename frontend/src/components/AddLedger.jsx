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
            .then(console.log("list추가에 성공 했습니다."))

    }
    

    return(
        <div>
            <form onSubmit={addNewLedger}>
                <div className="row g-1 m-1">
                    <div className="col-sm">
                        <input
                            type="text"
                            placeholder="분류"
                            onChange={e => setLedgerClassify(e.target.value)}
                            value={ledgerClassify}
                        />
                    </div>
                    <div className="col-sm">
                        <input
                            type="date"
                            placeholder="날짜"
                            onChange={e => setLedgerDate(e.target.value)}
                            value={ledgerDate}
                        />
                    </div>
                    <div className="col-sm">
                        <input
                            type="text"
                            placeholder="상세"
                            onChange={e => setLedgerDetail(e.target.value)}
                            value={ledgerDetail}
                        />
                    </div>
                    <div className="col-sm">
                        <input
                            type="number"
                            placeholder="금액"
                            onChange={e => setLedgerMoney(e.target.value)}
                            value={ledgerMoney}
                        />
                    </div>
                    <div className="col-sm">
                        <button type="submit" className="btn btn-outline-dark">추가</button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
}

export default AddLedger;