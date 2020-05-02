import React from 'react';
import { DISHES } from './shared/dishes';
import Menu from './Components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import DishDetails from './DishDetailCompoent';

class Main extends React.Component {

  constructor(props){
    super(props)

    this.state = { 
        dishes : DISHES,
        selectedDish : null
    }
  }

  onDishSelect(dish){
    this.setState({selectedDish : dish})
}

  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClink={(dishId)=>{this.}}/>
      <DishDetails dish={this.state.selectedDish}/>
    </div>
  );
  }
}

export default Main;
