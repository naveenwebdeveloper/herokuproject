import React from 'react'

function Cprofile(props) {
    return (
        <div className="container profile-margin wrapper">
            <h3 className='text-center' style={{ margin: "20px" }}>Company Details</h3>
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={props.Data.logo} alt="Admin" width="150" />
                                    <div className="mt-3">
                                        <h4>{props.Data.name}</h4>
                                        <p className="text-secondary mb-1">{props.Data.email}</p>
                                        <p className="text-muted font-size-sm">Phone : {props.Data.phone}</p>
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
                                        {props.Data.name}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {props.Data.email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {props.Data.phone}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">State</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {props.Data.state}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">City</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {props.Data.city}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {props.Data.address}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Pin</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {props.Data.pin}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Landline</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {props.Data.landline}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">GST</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {props.Data.gst}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Website</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {props.Data.web}
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

export default Cprofile