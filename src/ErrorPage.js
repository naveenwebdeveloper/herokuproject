import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const Navigate = useNavigate();
    return <div className='error-page'>
        <h1>404</h1>
        <h3>page Not Found</h3>
        <button onClick={() => Navigate("/")} type="button" className="btn btn-primary">Go Back</button>
    </div >;
}
