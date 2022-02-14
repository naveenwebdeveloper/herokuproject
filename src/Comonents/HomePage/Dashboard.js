import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header";
import Cprofile from "../CompanyProfile/Cprofile";
import Myprofile from "../Myprofile/Myprofile";
import {
    BrowserRouter,
    Routes, // Just Use Routes instead of "Switch"
    Route
} from "react-router-dom";


const Dashboard = () => {
    const [userData, setuserData] = useState({});
    const Navigate = useNavigate();
    useEffect(() => {
        console.log("data is colled by useEffect");
        const auth = sessionStorage.getItem("UserToken");
        if (!auth) {
            Navigate("/");
        } else {
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

        }

    }, []);

    const logout = () => {
        console.log("logout hits")
        sessionStorage.removeItem("UserToken");
        sessionStorage.removeItem("Uid");
        sessionStorage.clear();
        Navigate("/")
    }


    return (
        <>
            <Header userName={userData.name} Logout={logout} />
            <Routes>
                <Route path="/Myprofile" element={<Myprofile />} />
                <Route path="/" element={<Cprofile Data={userData} />} />
            </Routes>
        </>
    );
};

export default Dashboard;
