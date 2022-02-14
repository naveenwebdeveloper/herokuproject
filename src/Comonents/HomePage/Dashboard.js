import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
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
            }
            ComData();

        }

    });

    const logout = () => {
        console.log("logout hits")
        sessionStorage.removeItem("UserToken");
        sessionStorage.removeItem("Uid");
        sessionStorage.clear();
        Navigate("/")
    }


    return (
        <>
            <div>Deshboard</div>
            <button onClick={logout}> Logout now</button>
        </>
    );
};

export default Dashboard;
