import React from 'react';

const SubmitResetButton = ({
  selectedToppings,
  selectedSize,
  onSubmitClick,
  onResetClick}) => {
  if(!selectedToppings.length && selectedSize===null){
    return(
      <div className='section'>
        <button type="submit" onClick={onSubmitClick}>Place order</button>
      </div>
    )
    }else{
      return(
        <div className='section'>
          <button type="reset" onClick={onResetClick}>Clear</button>
          <button type="submit" onClick={onSubmitClick}>Place order</button>
        </div>
      )
    }
  
}

export default SubmitResetButton;