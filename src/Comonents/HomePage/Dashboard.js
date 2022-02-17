import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header";
import Mprofile from "../MyDetails/Mprofile";
import Bills from "../Bills/Bills";
import Ledgers from "../Ledger/Ledgers";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import ClipLoader from "react-spinners/ClipLoader";
import {
    BrowserRouter,
    Routes, // Just Use Routes instead of "Switch"
    Route
} from "react-router-dom";


const Dashboard = () => {
    const [loader, setLoader] = useState(true);
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
                            'type': 'my_details'
                        })
                    })
                        .then((res) => res.json()).then((res1) => res1).catch((err) => err);
                    return companydata;
                }
                const Udata = await usData();
                console.log(Udata);
                setuserData(Udata.data);
                setLoader(false)

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
                <Route path="Cdetails" element={<CompanyDetails />} />
                <Route path="Bills" element={<Bills />} />
                <Route path="Ledgers" element={<Ledgers />} />
                <Route path="/" element={<Mprofile Data={userData} />} />
            </Routes>
            <ClipLoader className="Spinning-loader" color={"blue"} loading={loader} size={150} />
        </>
    );
};

export default Dashboard;
