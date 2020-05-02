import React from 'react';
import Main from './Components/MainComponent';

import { Navbar, NavbarBrand } from 'reactstrap';

class App extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
  return (
    <div>
      <Main/>
    </div>
  );
  }
}

export default App;
