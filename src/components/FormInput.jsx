import React, { useState } from 'react';
impnput.css';

function FormInput(props) {
  const [focused,setFocused]=useState(false);
  const { label, errormessage, onChange, id, ...inputProps } = props;

  const handleFocus=(e)=>{
    setFocused(true);
  };

  return (

    <div className='formInput d-flex flex-column ' style={{ width: '280px' }}>
      <label >{label}</label>
      <input {...inputProps} onBlur={handleFocus} focused={focused.toString()}  onChange={onChange} style={{ border: '1px solid #cccc', padding: '12px', margin: '5px 0px' }} />
      <span>{errormessage}</span>
    </div>

  );
};

export default FormInput;