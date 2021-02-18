import React from 'react';

const MultiselectOptions = (props) => {
    
    const getId = ()=>{
        console.log("id is ",props.id);
        return "Multi_" + props.id;
    }
   
    return (
        <>
            <textarea onChange = {props.updateAnswers} id = {getId()} value = {props.options ? (props.options.ans) : ""}></textarea>
            <span onClick = {props.moreOptions}>+</span>
            <span id = {props.id} onClick = {props.deleteOptions}>-</span>  
            <br></br>
        </>
    );
};

export default MultiselectOptions;