import React from "react";
import style from "./Ledger.module.scss";
import { Link } from "react-router-dom";
import ChangeLedger from "./ChangeLedger";

function LedgerItem({ ledger, removeLedger , changeLedger}) {
    return(
        <div className={style.ledger}>
            <div className={style.classify}>{ledger.classify}</div>
            <div className={style.date}>{ledger.date}</div>
            <div className={style.detail}>{ledger.detail}</div>
            <div className={style.money}>{ledger.money}</div>
            <div>
                <Link className="btn btn-outline-secondary m-1" to={`/ledger/${ledger.id}`}>수정</Link>
                
            </div>
            <div>
                <button 
                    type="button" 
                    className="btn btn-outline-secondary m-1" 
                    onClick={() => removeLedger(ledger.id)}>
                    삭제
                </button>
            </div>
        </div>
        
       
    )
}

export default LedgerItem;