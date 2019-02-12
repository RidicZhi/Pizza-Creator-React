import React from 'react';

const SubmitResetButton = ({
  onSubmitClick,
  onResetClick}) => {
  return(
    <div className='section'>
      <button type="reset" onClick={onResetClick}>Clear</button>
      <button type="submit" onClick={onSubmitClick}>Place order</button>
    </div>
  )
}

export default SubmitResetButton;