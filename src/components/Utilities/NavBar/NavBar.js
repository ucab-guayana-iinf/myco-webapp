/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import {Navbar, NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Collapse} from "shards-react";
import { withRouter } from 'react-router-dom'

import Login from '../../Login/Login'
import SignUp from '../../SignUp/SignUp'
import './assets/NavBar.css';


class NavBar extends Component {

	constructor(props) {
        super(props);
        
        this.state = { 
            open: false, //open es para el modal de login
            sign: false, //sign es para el modal de signup
            dropdownOpen: false,
            collapseOpen: false 
        };
	}
	
	toggle = () => {
		this.setState({
			open: !this.state.open
		});
    }
    
	toggle2 = () => {
		this.setState({
			sign: !this.state.sign
		});
	}

    toggleDropdown = () => {
        this.setState({
            ...this.state,
            ...{
              dropdownOpen: !this.state.dropdownOpen
            }
          });
    }

    toggleNavbar = () => {
        this.setState({
          ...this.state,
          ...{
            collapseOpen: !this.state.collapseOpen
          }
        });
    }

    logoff = () => {
        localStorage.clear()
        localStorage.setItem("logged",false)
        console.log("token en almacenamiento local al cerrar sesion:", localStorage.getItem("token"));
        this.props.history.push('/Landing')
        console.log("sesion cerrada")
    }

    viewCheck = () => {
        var logged = localStorage.getItem("logged")
        if(logged){
            return(
                <React.Fragment>
                    <NavItem className="mx-3">
                    <NavLink onClick={this.toggle2} href="javascript:void(0)">
                        Registrar
                    </NavLink>
                    </NavItem>
                    <NavItem className="mx-3">
                        <NavLink onClick={this.toggle} href="javascript:void(0)">
                            Iniciar Sesion
                        </NavLink>
                    </NavItem>
                </React.Fragment>
            )
        }else{
            return(
                <NavItem className="mx-3">
                    <NavLink onClick={this.logoff} href="javascript:void(0)">
                        Cerrar Sesion
                    </NavLink>
                </NavItem>
            )       
        }
    }

    render() {
        return ( 
            <Navbar type="dark" theme="primary" expand="md">

                <NavbarBrand className="ml-5" href="/">Myco</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar}/>

                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar>
                        {this.viewCheck()}
                        <NavItem className="mx-3">
                            <NavLink href="/FAQs">
                                Como Empezar
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

                <Login open={this.state.open} toggle={this.toggle}/>
                <SignUp open={this.state.sign} toggle={this.toggle2}/>

            </Navbar>
        );
    }
}

export default withRouter(NavBar)