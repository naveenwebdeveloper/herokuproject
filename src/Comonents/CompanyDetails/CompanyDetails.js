import React from 'react'
import { useEffect, useState } from 'react';

function CompanyDetails() {

    const [userData, setuserData] = useState({});
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
                        'type': 'company_details'
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

    }, []);

    return (
        <div className="container profile-margin wrapper">
            <h3 className='text-center' style={{ margin: "20px" }}>Company Details</h3>
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={userData.logo} alt="Admin" width="150" />
                                    <div className="mt-3">
                                        <h4>{userData.name}</h4>
                                        <p className="text-secondary mb-1">{userData.email}</p>
                                        <p className="text-muted font-size-sm">Phone : {userData.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userData.name}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userData.email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userData.phone}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">State</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userData.state}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">City</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userData.city}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userData.address}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Pin</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userData.pin}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Landline</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userData.landline}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">GST</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userData.gst}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Website</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {userData.web}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CompanyDetails;