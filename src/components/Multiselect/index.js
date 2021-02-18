import React, { useState } from 'react'
import MultiselectOptions from '../MultiselectOptions';

import './index.css';
const Multiselect = (props) => {
    const [options,setOptions] = useState([]);
    const [id,setId] = useState(0);





    const moreOptions = ()=>{
        if (options.length < 4)
        {
            const updatedOptions = [...options,id];
            setOptions(updatedOptions)
            setId(id+1);
            console.log(updatedOptions);
        }
    }
    
    const deleteLocalOptions = (clickedOption) =>{
        
        const newOptions = options.filter((option) =>{
            console.log(option,clickedOption.target.id,option != clickedOption.target.id)
            return (option != clickedOption.target.id)
        });
        setOptions(newOptions);
        console.log("newOptions are after deleting: ",newOptions);
        props.deleteOptions(clickedOption)
    }


    let optionValue = "";

    const updateAnswers = (e)=>{
        optionValue = optionValue + e.target.value;
        props.addAnswers(optionValue,e.target.id);
    }
   
    const addOptions =(options.length > 0)?options.map((e,index) => 
    <MultiselectOptions moreOptions = {moreOptions} id = {e} deleteOptions = {deleteLocalOptions} updateAnswers = {updateAnswers} options ={props.answers[index]}/>
    )
    :
    moreOptions();
    
    return (
        <>
          <textarea onChange= {props.updateQuestion}></textarea>
          <p>Options</p>
          {addOptions}
          {(options.length === 4)?
            <>
            <button onClick = {props.addQuestionAnswers}>Add Question</button>
            <button onClick = {props.publish}>Publish</button>
            </>
            :
            <></>  
        }
        </>
    );
};

export default Multiselect;

