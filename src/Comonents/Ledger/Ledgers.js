import React from 'react'
import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";

function Ledgers() {
    const [fromDate, setfromDate] = useState(new Date(2022, 1, 1));
    const [toDate, settoDate] = useState(new Date());
    const [isData, setisData] = useState(false);
    const [thead, setthead] = useState([]);
    const [tbody, settbody] = useState([]);
    const [tfoot, settfoot] = useState([]);
    const [errMess, seterrMess] = useState(true);
    // setfromDate(fromDate.getTime());
    // console.log(fromDate)
    const [userData, setuserData] = useState([]);
    const token = sessionStorage.getItem("UserToken");
    const uid = sessionStorage.getItem("Uid");

    useEffect(() => {
        const DefaultTable = async () => {
            const fdate = String(fromDate.getDate()).padStart(2, '0');
            const fyear = fromDate.getFullYear();
            const fmonth = String(fromDate.getMonth() + 1).padStart(2, '0');
            const F_date = fyear + '-' + fmonth + '-' + fdate;
            console.log('From Date :', F_date);

            const tdate = String(toDate.getDate()).padStart(2, '0');
            const tyear = toDate.getFullYear();
            const tmonth = String(toDate.getMonth() + 1).padStart(2, '0');
            const T_date = tyear + '-' + tmonth + '-' + tdate;
            console.log('To Date :', T_date);

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
                        'f_date': F_date,
                        't_date': T_date

                    })
                })
                    .then((res) => res.json()).then((res1) => res1).catch((err) => err);
                return companydata;
            }
            const Udata = await usData();
            setisData(true);
            console.log(Udata);
            setuserData(Udata.data);
            if (Udata.status == true) {
                seterrMess(true);
                setthead(Udata.data.thead);
                settbody(Udata.data.tbody);
                settfoot(Udata.data.tfoot);
                console.log(fromDate);
            } else {
                seterrMess(false);
            }


        }
        DefaultTable();

    }, []);

    const ComData = async () => {

        const fdate = String(fromDate.getDate()).padStart(2, '0');
        const fyear = fromDate.getFullYear();
        const fmonth = String(fromDate.getMonth() + 1).padStart(2, '0');
        const F_date = fyear + '-' + fmonth + '-' + fdate;
        console.log('From Date :', F_date);

        const tdate = String(toDate.getDate()).padStart(2, '0');
        const tyear = toDate.getFullYear();
        const tmonth = String(toDate.getMonth() + 1).padStart(2, '0');
        const T_date = tyear + '-' + tmonth + '-' + tdate;
        console.log('To Date :', T_date);

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
                    'f_date': F_date,
                    't_date': T_date

                })
            })
                .then((res) => res.json()).then((res1) => res1).catch((err) => err);
            return companydata;
        }
        const Udata = await usData();
        setisData(true);
        console.log(Udata.data);
        // // setuserData(Udata.data);
        // setthead(Udata.data.thead);
        // settbody(Udata.data.tbody);
        // settfoot(Udata.data.tfoot);
        // console.log(fromDate);
        if (Udata.status === true) {
            seterrMess(true);
            setthead(Udata.data.thead);
            settbody(Udata.data.tbody);
            settfoot(Udata.data.tfoot);
            console.log(fromDate);
        }

    }

    return (

        <div className="container profile-margin wrapper">
            <h3 className='text-center' style={{ margin: "20px" }}>Ledgers</h3>
            <div>
                <div className='Table-filter'>
                    <div>
                        <h5>Start Date</h5>
                        <DatePicker selected={fromDate} onChange={(date) => setfromDate(date)} />
                    </div>
                    <div>
                        <h5>End Date</h5>
                        <DatePicker selected={toDate} onChange={(date) => settoDate(date)} />
                    </div>

                    <div>
                        <button onClick={ComData} type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div >
                    {errMess ?
                        <div>
                            <div className='table-responsive'>
                                <table className="table table-fixed col-xs-1 table-striped" style={{ height: "300px" }}>
                                    {isData ? (<>
                                        <thead style={{ position: "sticky", top: "0" }} className="thead-dark">
                                            <tr>
                                                {/* <th className="col-3">NO.</th> */}
                                                {thead.map((user, index) => (
                                                    <th key={index} className="col-3" scope="col">{user}</th>
                                                ))}

                                                {/* <th scope="col">Bill No.</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {tbody.map((data, index) => (
                                                <tr key={index}>
                                                    {/* <td style={}     className="col-3">{index}</td> */}
                                                    <td className="col-3">{data[0]}</td>
                                                    <td className="col-3">{data[1]}</td>
                                                    <td className="col-3">{data[2]}</td>
                                                    <td className="col-3">{data[3]}</td>
                                                    <td className="col-3">{data[4]}</td>
                                                    <td className="col-3">{data[5]}</td>
                                                    <td className="col-3">{data[6]}</td>
                                                </tr>
                                            ))}

                                            {/* {userData.map((data) => (
                                        // display a <div> element with the user.name and user.type
                                        // parent element needs to have a unique key
                                        // <div key={user.id}>
                                        //     <p>{user.name}</p>
                                        //     <p>{user.type}</p>
                                        // </div>
                                        <tr key={user.bill_id}>
                                            <th scope="row">{user.bill_id}</th>
                                            <td>{user.bill_no}</td>
                                            <td>{user.bill_to_name}</td>
                                            <td><b>Rs.</b>{user.bill_value}</td>
                                            <td>{user.bill_to_contact}</td>
                                        </tr>

                                    ))} */}
                                        </tbody>
                                        <tfoot>

                                            <tr>
                                                {tfoot.map((data, index) => (
                                                    <td key={index}>{data}</td>
                                                ))}
                                            </tr>

                                        </tfoot>
                                    </>
                                    ) : (
                                        <h1>Data not found</h1>
                                    )}


                                </table>
                            </div>
                        </div> : <h1 className="errMess">Data not found !</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default Ledgers