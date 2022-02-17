import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function Bills() {
    const [loader, setLoader] = useState(true);
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
                        'type': 'bills'
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

    }, []);

    return (<>
        <div className="container profile-margin wrapper">
            <h3 className='text-center' style={{ margin: "20px" }}>Bills</h3>
        </div>
        <div>

        </div>
        <ClipLoader className="Spinning-loader" color={"blue"} loading={loader} size={150} />
    </>
    )
}

export default Bills