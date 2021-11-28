import React from "react";
import style from "./Ledger.module.scss";


function Ledger({ ledger, removeLedger , changeLedger}) {
    return(
        <div className={style.ledger}>
            <div className={style.classify}>{ledger.classify}</div>
            <div className={style.date}>{ledger.date}</div>
            <div className={style.detail}>{ledger.detail}</div>
            <div className={style.money}>{ledger.money}</div>
            <div>
                <button onClick={() => removeLedger(ledger.id)}>
                    삭제
                </button>
            </div>
            <div>
                <button onClick={() => changeLedger()}>수정</button>
            </div>
        </div>
        
       
    )
}

export default Ledger;