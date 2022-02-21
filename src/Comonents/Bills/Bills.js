import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

function Bills() {
    const [errMess, seterrMess] = useState(false);
    const [loader, setLoader] = useState(true);
    const [userData, setuserData] = useState([]);
    useEffect(() => {
        const token = sessionStorage.getItem("UserToken");
        const uid = sessionStorage.getItem("Uid");
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
                        'type': 'bills'
                    })
                })
                    .then((res) => res.json()).then((res1) => res1).catch((err) => err);
                return companydata;
            }
            const Udata = await usData();
            console.log(Udata.data);
            if (Udata.status === true) {
                setuserData(Udata.data);

                seterrMess(true)
            }
            setLoader(false)


        }
        ComData();

    }, []);

    return (
        <>
            <div className="container profile-margin wrapper">
                <h3 className='text-center' style={{ margin: "20px" }}>Bills</h3>
            </div>
            <div className="errMess">
                {errMess ?
                    <div className='Table-Container'>
                        <table className="table table-striped" style={{ width: "70%" }}>
                            <thead>
                                <tr>
                                    <th scope="col">Bill No.</th>
                                    <th scope="col">Bill Date</th>
                                    <th scope="col">Bill to Name</th>
                                    <th scope="col">Bill Value</th>
                                    <th scope="col">Bill to Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((user) => (
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

                                ))}
                            </tbody>
                        </table>
                    </div>
                    : <h1 className="errMess">Data not Found!</h1>}
            </div>
            <ClipLoader className="Spinning-loader" color={"blue"} loading={loader} size={150} />
        </>
    )
}

export default Bills