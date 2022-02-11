import React from 'react';
import './Message.css';

export default function Mess(props) {
  console.log(props.mes);
  return <div>
    <h1>{props.mes}</h1>
  </div>;
}

