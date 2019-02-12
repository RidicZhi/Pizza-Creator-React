import React from 'react';

const ConfirmationModal = ({
  isConformationModalDisplay,
  inputs,
  selectedSize,
  selectedToppings,
  modalCancelClick}) => {
  if (!isConformationModalDisplay) {
    return null;
  }else{
    return(
      <div className='modal'>
        <div className='modal-box'> 
          <h1>Your Order Details</h1>
          <div className='address'>
            <p><strong>{inputs.find(({label})=> label==='Name').value}</strong></p>
            <p>{inputs.find(({label})=> label==='Address').value}</p>
            <p>{inputs.find(({label})=> label==='Post Code').value}</p>
            <p>{inputs.find(({label})=> label==='Contact Number').value}</p>
          </div>
          <hr/>
          <div className='pizzas'>
            <div className='pizza'>
              <div>
                <strong>{selectedSize.name} Pizza</strong>
                <br/>
                <span>{getToppingsString(selectedToppings)}</span>
              </div>
            </div>
            <div>
              $ {(getTotal({selectedToppings,selectedSize})).toFixed(2)}
            </div>
          </div>
          <div className='actions'>
            <button className='cancel' onClick={modalCancelClick}>Cancel</button>
            <button className='confirm'>Confirm</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ConfirmationModal;

const getToppingsString = (toppings) => {
  let result = '';
  toppings.forEach(({ name, amount }, index) => {
    result = index === 0 ? `${name} * ${amount}` : `${result}, ${name} * ${amount}`;
  });
  return result;
};

const getTotal = ({
  selectedToppings,
  selectedSize}
) => {
  let total = selectedSize ? +selectedSize.price : 0;
  selectedToppings.forEach(({ price, amount }) => {
    const selectedToppingTotal = price * amount;
    total = total + selectedToppingTotal;
  });
  return total;
};