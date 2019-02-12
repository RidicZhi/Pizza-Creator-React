import React from 'react';

const Summary = ({
  selectedToppings,
  selectedSize,
  onAddToppingClick,
  onMinusToppingClick}) => {
  return(
    <div className='section'>
      <h2>Summary</h2>
      <div className='summary'>
        {
          selectedSize ? 
          <li>
            <span>{selectedSize.name} Pizza</span>
            <span></span>
            <span></span>
            <span></span>
            <span>{selectedSize.price}</span>
          </li> 
          : null
        }
        {
          selectedToppings.map(selectedToppings => {
            const { name, amount, price } = selectedToppings;
            return(
              <li key={name}>
                <span>
                  <button className='amount' onClick={()=>onMinusToppingClick(selectedToppings)}>-</button>
                </span>
                <span>
                  <button className='amount' onClick={()=>onAddToppingClick(selectedToppings)}>+</button>
                </span>
                <span>{name}</span>
                <span>* {amount}</span>
                <span>$ {(price*amount).toFixed(2)}</span>
              </li>
            )
          })
        }
      </div>
      <hr/>
      <div className='total'>
        <span>Total: $ {getTotal({selectedSize,selectedToppings}).toFixed(2)}</span>
      </div>
    </div>
  )
  
}

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
}

export default Summary;