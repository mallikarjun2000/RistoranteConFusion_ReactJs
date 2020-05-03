import React from'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Label, Form, FormGroup, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../Components/assets/logo.png';

class Header extends React.Component{

    constructor(props){
        super(props)

        this.state={
            isNavOpen:false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event){
        this.toggleModal();
        alert('username: '+this.username.value + " Password: "+
        this.password.value+" Remember"+this.remember);
        event.preventDefault();
    }
    
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    render(){
        return(
            <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                <NavbarBrand className="mr-auto" href='/'>
                    <img src={Logo} height="30" width="41"
                    alt="Ristorante Con Fusion"/>
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav Navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg"></span> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                            <span className="fa fa-info fa-lg"></span> About us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/menu">
                            <span className="fa fa-list fa-lg"></span> Menu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                            <span className="fa fa-address-card fa-lg"></span> Contact us
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-sign-in fa-lg"></span> Login
                        </Button>
                    </NavItem>
                </Nav>
                </Collapse>
                </div>
            </Navbar>
            <Jumbotron className="jumbotron">
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspration from the world's best cuisines, and create a uniqueu fusion experience. Our lipsmaking creations will tickle your culinary senses!</p>

                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" 
                            innerRef={(input)=>this.username = input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">password</Label>
                            <Input type="password" id="password" 
                            innerRef={(input)=>this.password = input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" 
                                inndrRef={(input)=>this.remember = input}/>
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" className="bg-primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            </>
        );
    }
}

export default Header