/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import {Navbar, NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Collapse} from "shards-react";
import Login from '../../Login/Login'
import './assets/NavBar.css';

export default class NavBar extends Component {

	constructor(props) {
        super(props);
        
        this.state = { 
            open: false,
            dropdownOpen: false,
            collapseOpen: false 
        };
        
        this.toggle = this.toggle;
        this.toggleDropdown = this.toggleDropdown;
        this.toggleNavbar = this.toggleNavbar;
	}
	
	toggle = () => {
		this.setState({
			open: !this.state.open
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

    render() {
        return ( 
            <Navbar type="dark" theme="primary" expand="md">

                <NavbarBrand className="ml-5" href="/">Myco</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar}/>

                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar>
                        <NavItem className="ml-3 mr-3">
                            <NavLink href="/SignUp">
                                Registrar Condominio
                            </NavLink>
                        </NavItem>
                        <NavItem className="ml-3 mr-3">
                            <NavLink onClick={this.toggle} href="javascript:void(0)">
                                Iniciar Sesion
                            </NavLink>
                        </NavItem>
                        <NavItem className="ml-3 mr-3">
                            <NavLink href="/FAQs">
                                Como Empezar
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

                <Login open={this.state.open} toggle={this.toggle}/>

            </Navbar>
        );
    }
}