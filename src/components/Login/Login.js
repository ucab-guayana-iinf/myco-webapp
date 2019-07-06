import React, { Component } from 'react'
import {Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon, ModalFooter,ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import './assets/Login.css';

export default class Login extends Component {

	render(){
		return (
			<Modal size="med" open={this.props.open} toggle={this.props.toggle}>
				<Card>
					<ModalHeader>Inicio de Sesion</ModalHeader>

					<CardBody className="mx-0 mb-n2">
						<Form method="">
							<FormGroup>
								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Username</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="text" placeholder="Nombre de Usuario ó e-mail"/>
								</InputGroup>

								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="navy">Contraseña</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="password" placeholder="Contraseña"/>
								</InputGroup>
								
								<button className="">Login</button>
							</FormGroup>
						</Form>
					</CardBody>

					<ModalFooter className="mt-0 small">
							<a href="/FAQs" className="aquamarine text text-center">No posees una cuenta aun?</a>
					</ModalFooter>
				</Card>
			</Modal>
		)
	}
}