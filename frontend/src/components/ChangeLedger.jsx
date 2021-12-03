import React,{useState, useEffect} from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import style from "./Ledger.module.scss";
import Spinner from "./Layout/Spinner";
import { useAppContext } from "../utils/store";

const apiUrl = 'http://localhost:8000/api/record'

function ChangeLedger() {

    const [changeLedger, setChangeLedger] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const [changeClassify, setChangeClassify] = useState('');
    const [changeDate, setChangeDate] = useState('');
    const [changeDetail, setChangeDetail] = useState('');
    const [changeMoney, setChangeMoney] = useState('');
    const { store: { jwtToken }, dispatch } = useAppContext();
    const headers = { Authorization: `JWT ${jwtToken}` }


    const addChangeLedger = () => {

        const itemList = {
            "classify": changeClassify,
            "date": changeDate,
            "detail": changeDetail,
            "money": changeMoney,
        }
        console.log(itemList);
        console.log(headers);

        Axios.put(`${apiUrl}/${id}/`, itemList, { headers })
            .then(console.log("수정에 성공 했습니다."))

    }

    useEffect(() => {
        Axios.get(`${apiUrl}/${id}`,{headers})
            .then((response) => {
                const { data } = response;
                setChangeLedger(data);
                setLoading(false);
                console.log("load response", response);
            })
            .catch(error => {
                console.log(error);
            })
    }, [id]);

    const ledgerDetail = loading ? <Spinner /> :
            <div className={style.ledger}>
                <div className={style.classify}>{changeLedger.classify}</div>
                <div className={style.date}>{changeLedger.date}</div>
                <div className={style.detail}>{changeLedger.detail}</div>
                <div className={style.money}>{changeLedger.money}</div>
            </div>


    return (
        <>
        <h1>수정 페이지 </h1>
            <form onSubmit={addChangeLedger}>
                <div className="row g-1 m-1">
                    <div className="col-sm">
                        <input
                            type="text"
                            placeholder="분류"
                            onChange={e => setChangeClassify(e.target.value)}
                            value={changeClassify}
                        />
                    </div>
                    <div className="col-sm">
                        <input
                            type="date"
                            placeholder="날짜"
                            onChange={e => setChangeDate(e.target.value)}
                            value={changeDate}
                        />
                    </div>
                    <div className="col-sm">
                        <input
                            type="text"
                            placeholder="상세"
                            onChange={e => setChangeDetail(e.target.value)}
                            value={changeDetail}
                        />
                    </div>
                    <div className="col-sm">
                        <input
                            type="number"
                            placeholder="금액"
                            onChange={e => setChangeMoney(e.target.value)}
                            value={changeMoney}
                        />
                    </div>
                    <div className="col-sm">
                        <button type="submit" className="btn btn-outline-dark">완료</button>
                    </div>

                </div>
            </form>
            {ledgerDetail}
        
        </>
    );
};

export default ChangeLedger