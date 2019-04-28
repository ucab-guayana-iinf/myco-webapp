import React, { Component } from 'react'
import {Card, CardBody, Modal, InputGroup, InputGroupText, InputGroupAddon, ModalFooter,ModalHeader, Form, FormGroup, FormInput} from 'shards-react'
import '../../assets/Login.css';

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
										<InputGroupText className="black">Username</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" onKeyUp={console.log(this.value)} type="text" placeholder="Nombre de Usuario ó e-mail"/>
								</InputGroup>

								<InputGroup className="mb-1">
									<InputGroupAddon type="prepend" >
										<InputGroupText className="black">Contraseña</InputGroupText>
									</InputGroupAddon>
									<FormInput size="med" type="password" placeholder="Contraseña"/>
								</InputGroup>

								<button className="btn btn-primary">Login</button>
							</FormGroup>
						</Form>
					</CardBody>

					<ModalFooter className=" mt-0 small text">
							<a href="/FAQs" className="aquamarine">No posees una cuenta aun?</a>
					</ModalFooter>
				</Card>
			</Modal>
		)
	}
}