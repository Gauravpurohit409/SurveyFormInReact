import React from 'react';
import './index.css'

const Options = (props) => {

    const call = ()=>{
        alert(props.value);
    }
    return (
        <option onClick ={call}>{props.value}</option>
    );
};

export default Options;