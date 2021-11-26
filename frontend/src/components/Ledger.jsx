import React from "react";
import style from "./Ledger.module.scss";

function Ledger({ledger}) {
    return(
        <div className={style.ledger}>
            <div className={style.classify}>{ledger.classify}</div>
            <div className={style.date}>{ledger.date}</div>
            <div className={style.detail}>{ledger.detail}</div>
            <div className={style.money}>{ledger.money}</div>
            <div>
                <button>삭제</button>
            </div>
        </div>
        
       
    )
}

export default Ledger;