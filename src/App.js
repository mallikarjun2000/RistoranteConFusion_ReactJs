import React from 'react';
import './App.css';
import { DISHES } from './shared/dishes';
import Menu from './Components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES}/>
    </div>
  );
  }
}

export default App;
