import React from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
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

  onDishSelect(dishId){
    this.setState({selectedDish : dishId})
}

  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
      <DishDetails 
            dish={this.state.dishes.filter((dish)=>dish.id == this.state.selectedDish)[0]}/>
    </div>
  );
  }
}

export default Main;
