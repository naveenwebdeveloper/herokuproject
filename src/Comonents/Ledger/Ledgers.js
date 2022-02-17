import React from 'react'
import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";

function Ledgers() {
    const [fromDate, setfromDate] = useState(new Date());
    const [toDate, settoDate] = useState(new Date());
    // setfromDate(fromDate.getTime());
    // console.log(fromDate)
    const [userData, setuserData] = useState({});

    useEffect(() => {
        const token = sessionStorage.getItem("UserToken");
        const uid = sessionStorage.getItem("Uid");
        const LDate = new Date();
        const Ldate = LDate.getDay();
        const Lmonth = LDate.getMonth();
        const Lyear = LDate.getFullYear();
        console.log(Ldate, Lmonth, Lyear);
        console.log(token);
        console.log(uid);
        const ComData = async () => {
            async function usData() {
                const companydata = await fetch('https://bharatbills.in/papi/service.php', {
                    method: 'POST',
                    headers: {
                        'user': uid,
                        'token': token
                        //'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'type': 'ledger',
                        'fdate': '19-01-01',
                        'tdate': '19-01-05'

                    })
                })
                    .then((res) => res.json()).then((res1) => res1).catch((err) => err);
                return companydata;
            }
            const Udata = await usData();
            console.log(Udata);
            setuserData(Udata.data);

        }
        ComData();

    });

    return (

        <div className="container profile-margin wrapper">
            <h3 className='text-center' style={{ margin: "20px" }}>Ledgers</h3>
            <div>
                <div>
                    <h5>Start Date</h5>
                    <DatePicker selected={fromDate} onChange={(date) => setfromDate(date)} />
                </div>
                <div>
                    <h5>End Date</h5>
                    <DatePicker selected={toDate} onChange={(date) => setfromDate(date)} />
                </div>
                <div>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Ledgers