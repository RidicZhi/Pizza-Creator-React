import React from 'react';
import pizzaImg from '../../asset/pizza.png';

const PizzaSizes = ({sizes,selectedSize,onSizeClick}) => {
  return(
    <div className='section'>
      <h2>Choose Your Size</h2>
      <div className='sizes'>
        {
          sizes.map(sizes => {
            const { name, inches } = sizes;
            return (
              <div className={selectedSize && name === selectedSize.name ? 'size active' : 'size' } key={name}>
                <img 
                  src={pizzaImg} 
                  className={'pizza ' + name} 
                  onClick={()=>onSizeClick(sizes)}
                />
                <span>{name} ({inches}')</span>
              </div> 
            )
          })
        }
      </div>
    </div>
  )
}

export default PizzaSizes;