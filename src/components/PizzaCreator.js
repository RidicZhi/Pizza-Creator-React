import React , { Component, Fragment } from 'react';
import inputs from '../data/inputs'
import toppings from '../data/toppings';
import sizes from '../data/sizes';
import Toppings from './Toppings';
import DetailForm from './DetailsForm';
import PizzaSizes from './PizzaSizes';
import Summary from './Summary';
import SubmitResetButton from './SubmitResetButton'
import ConfirmationModal from './ConfirmationModal';

export default class PizzaCreator extends Component{
  constructor(){
    super();
    this.state = {
      inputs,
      toppings,
      selectedToppings: [],
      sizes,
      selectedSize: null,
      isConformationModalDisplay: false,
    }
    this.inputsChange = this.inputsChange.bind(this);
    this.onToppingClick = this.onToppingClick.bind(this);
    this.onSizeClick = this.onSizeClick.bind(this);
    this.onAddToppingClick = this.onAddToppingClick.bind(this);
    this.onMinusToppingClick = this.onMinusToppingClick.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.onResetClick = this.onResetClick.bind(this);
    this.modalCancelClick = this.modalCancelClick.bind(this);
  }

  render(){
    return (
      <Fragment>
        <DetailForm 
          inputs={this.state.inputs} 
          inputsChange={this.inputsChange}
        />
        <Toppings 
          toppings={this.state.toppings}
          selectedToppings={this.state.selectedToppings}
          onToppingClick={this.onToppingClick}
        />   
        <PizzaSizes
          sizes={this.state.sizes}
          selectedSize={this.state.selectedSize}
          onSizeClick={this.onSizeClick}
        />
        <Summary
          selectedToppings={this.state.selectedToppings}
          selectedSize={this.state.selectedSize}
          onAddToppingClick={this.onAddToppingClick}
          onMinusToppingClick={this.onMinusToppingClick}
        />
        <SubmitResetButton
          selectedToppings={this.state.selectedToppings}
          selectedSize={this.state.selectedSize}
          onSubmitClick={this.onSubmitClick}
          onResetClick={this.onResetClick}
        />
        <ConfirmationModal
          isConformationModalDisplay={this.state.isConformationModalDisplay}
          inputs={this.state.inputs}
          selectedSize={this.state.selectedSize}
          selectedToppings={this.state.selectedToppings}
          modalCancelClick={this.modalCancelClick}
        />
      </Fragment>
    )
  }

  inputsChange(label , value){
    const stagedInputs = this.state.inputs;
    stagedInputs.find(({ label : stagedLabel }) => (stagedLabel === label)).value = value;

    this.setState({
      inputs : stagedInputs
    })
  }

  onToppingClick(topping) {
    const { selectedToppings } = this.state;
    const isExists = selectedToppings.find(({ name }) => name === topping.name);

    const newSelectedToppings = !isExists 
      ? [{ ...topping, amount: 1 }, ...selectedToppings] 
      : selectedToppings.filter(({ name }) => name !== topping.name);

    this.setState({
      selectedToppings: newSelectedToppings
    });
  }

  onSizeClick(size){
    this.setState({
      selectedSize:size
    })
  }

  onAddToppingClick(topping){
    let newSelectedToppings = this.state.selectedToppings;
    newSelectedToppings.find(({ name }) => (name===topping.name)).amount += 1;

    this.setState({
      selectedToppings: newSelectedToppings
    })
  }

  onMinusToppingClick(topping){
    let newSelectedToppings = this.state.selectedToppings;
    const currentAmount = newSelectedToppings.find(({ name }) => (name===topping.name)).amount;
    
    currentAmount === 1 
    ? 
    //newSelectedToppings.splice(newSelectedToppings.findIndex(({ name }) => name == topping.name),1)
    newSelectedToppings = newSelectedToppings.filter(({ name }) => (name !== topping.name))
    :
    newSelectedToppings.find(({ name }) => (name===topping.name)).amount -= 1;
     
    this.setState({
      selectedToppings: newSelectedToppings
    })
  }

  onSubmitClick(){
    const {inputs, selectedSize} = this.state;

    for(let i=0; i<inputs.length; i++){
      if(!inputs[i].value){
        alert("Please Enter Your Details");
        return;
      }
    }

    const validEmail = inputs.find(({label})=> label==='Email').value === inputs.find(({label})=> label==='Confirm Email').value;
    if(!validEmail){
      alert("Please Confirm Your Email");
      return;
    }

    if(selectedSize == null){
      alert("Please Choose a Size");
      return;
    }
    
    this.setState({
      isConformationModalDisplay: true
    })
  }

  onResetClick(){
    this.setState({
      selectedSize: null,
      selectedToppings : []
    })
  }

  modalCancelClick(){
    this.setState({
      isConformationModalDisplay:false
    })
  }
  
}