import React from 'react';

const DetailForm = ({inputs,inputsChange})=>{
  return(
    <div className='section'>
      <h2>Enter Your Details</h2>
      <div className='details'>
        {
          inputs.map((inputs, index) => (
            <div className='form-control' key={index} >
              <label>{inputs.label}</label>
              <input 
                type='text' 
                value={inputs.value} 
                onChange={(e)=>inputsChange(inputs.label, e.target.value)}
              />
            </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default DetailForm;
