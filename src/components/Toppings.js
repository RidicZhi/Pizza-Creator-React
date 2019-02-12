import React from 'react';

const Toppings = ({toppings, selectedToppings, onToppingClick}) => {
  return(
      <div className='section'>
        <h2>Pick Your Toppings</h2>
        <div className='toppings'>
        {
          toppings.map(topping => {
          const { name: toppingName } = topping;

          return (
            <div 
              className={`topping ${selectedToppings.find(({ name }) => name === topping.name) ? 'active' : ''}`}
              key={toppingName}
              onClick={() => onToppingClick(topping)}
            >
              <div className="img">
                <img 
                  src={`https://toddmotto.com/angular-pizza-creator/assets/toppings/${toppingName}.svg`} 
                  alt={toppingName}
                />
              </div>
              <span>{toppingName}</span>
            </div>
            )
          })
        }
              
            
        </div>
      </div>
  )
}

export default Toppings;